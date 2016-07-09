/**
 *    UI Utils      Validation Strategy
 *    @author       Adarsh Pastakia
 *    @company      HMC
 *    @copyright    2015-2016, Adarsh Pastakia
 **/
import {autoinject, DOM} from "aurelia-framework";
import {validationRenderer} from 'aurelia-validation';
import {base, Validator, ValidationRule} from "aurelia-validatejs";
import {validate} from 'validate.js';

@autoinject
@validationRenderer
export class UIValidationRenderer {
  constructor(public boundaryElement: Element) {
    // ValidationRule['phone'] = function(config) {
    //   return new ValidationRule('inclusion', config);
    // }
    //
    // ValidationRule['phone'] = function() {
    //   this.passes((newValue) => {
    //     return PhoneLib.isValid(newValue, '');
    //   }, null)
    //     .withMessage(() => {
    //       return 'invalid phone number';
    //     });
    //   return this;
    // };
  }

  render(error, target) {
    if (!target || !(this.boundaryElement === target || this.boundaryElement.contains(target))) {
      return;
    }
    let formGroup: any = getParentByClass(target, 'ui-input-group');
    let isDual = formGroup.isDual;
    formGroup.classList.add('ui-invalid');
    formGroup.classList.remove('ui-valid');
    if (formGroup.lastElementChild !== null) formGroup = formGroup.lastElementChild;

    let helpBlock: any = formGroup.lastElementChild;
    if (isDual && helpBlock.prop != error.propertyName) helpBlock = helpBlock.previousSibling;
    if (helpBlock) {
      if (!helpBlock.classList) {
        helpBlock = null;
      }
      else if (!helpBlock.classList.contains('ui-input-error')) {
        helpBlock = null;
      }
    }

    if (!helpBlock) {
      helpBlock = DOM.createElement('div');
      helpBlock.classList.add('ui-input-help');
      helpBlock.classList.add('ui-input-error');
      helpBlock.prop = error.propertyName;
      formGroup.appendChild(helpBlock);
    }

    helpBlock.error = error;
    helpBlock.textContent = error ? error.message : 'Invalid';
  }

  unrender(error, target) {
    if (!target || !(this.boundaryElement === target || this.boundaryElement.contains(target))) {
      return;
    }
    let formGroup: any = getParentByClass(target, 'ui-input-group');

    // remove all messages related to the error.
    let messages = formGroup.querySelectorAll('.ui-input-error');
    let i = messages.length;
    while (i--) {
      let message: any = messages[i];
      if (message.prop !== error.propertyName) {
        continue;
      }
      message.error = null;
      message.remove();
    }

    if (formGroup.querySelectorAll('.ui-input-error').length == 0) {
      formGroup.classList.remove('ui-invalid');
      formGroup.classList.add('ui-valid');
    }

  }
}

//--------------------------
// Custom ValidationRules

const validator = new Validator();
validate.validators.map = function(map: Map<string, any>) {
  const errors = []
  map.forEach((v, k) => {
    console.log(v, validator.validateObject(v));
    if (validator.validateObject(v).length > 0) errors.push(k);
  });
  // Unfortunately details are lost, but Aurelia's controller will evaluate and display them on the binding as well.
  // This is only really useful for your `validate()` call when saving.
  return errors.length > 0 ? `${errors.join(',')} has invalid values` : null;
}

function mapRule(config) {
  return new ValidationRule('map', config);
}
export function validatemap(targetOrConfig?, key?, descriptor?) {
  return base(targetOrConfig, key, descriptor, mapRule);
}

validate.validators.phone = function(val: string) {
  // Unfortunately details are lost, but Aurelia's controller will evaluate and display them on the binding as well.
  // This is only really useful for your `validate()` call when saving.
  return !PhoneLib.isValid(val) ? `Invalid phone number` : null;
}

function phoneRule(config) {
  return new ValidationRule('phone', config);
}
export function validatephone(targetOrConfig?, key?, descriptor?) {
  return base(targetOrConfig, key, descriptor, phoneRule);
}
