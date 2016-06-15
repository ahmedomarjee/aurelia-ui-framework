/**
 *    UI Utils      Validation Strategy
 *    @author       Adarsh Pastakia
 *    @company      HMC
 *    @copyright    2015-2016, Adarsh Pastakia
 **/
import {autoinject, DOM} from "aurelia-framework";
import {validationRenderer} from 'aurelia-validation';
import {ValidationRule} from "aurelia-validatejs";

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
    formGroup.classList.add('ui-invalid');
    formGroup.classList.remove('ui-valid');
    if (formGroup.lastElementChild !== null) formGroup = formGroup.lastElementChild;

    let helpBlock: any = formGroup.lastElementChild;
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
      formGroup.appendChild(helpBlock);
    }

    helpBlock.error = error;
    helpBlock.textContent = error ? error.message : 'Invalid';
  }

  unrender(error, target) {
    if (!target || !(this.boundaryElement === target || this.boundaryElement.contains(target))) {
      return;
    }
    const formGroup = getParentByClass(target, 'ui-input-group');
    formGroup.classList.remove('ui-invalid');
    formGroup.classList.add('ui-valid');

    // remove all messages related to the error.
    let messages = formGroup.querySelectorAll('.ui-input-error');
    let i = messages.length;
    while (i--) {
      let message: any = messages[i];
      if (message.error !== error) {
        continue;
      }
      message.error = null;
      message.remove();
    }
  }

}
