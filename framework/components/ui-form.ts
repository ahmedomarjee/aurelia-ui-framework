/**
 *    UI Component  Form
 *    @author       Adarsh Pastakia
 *    @company      HMC
 *    @copyright    2015-2016, Adarsh Pastakia
 **/
import {autoinject, customElement, bindable} from "aurelia-framework";
import {UIEvent} from "../utils/ui-event";

@autoinject
@customElement('ui-form')
export class UIForm {
  @bindable
  busy: boolean;

  private __form: HTMLElement;

  constructor(public element: Element) {
  }

  attached() {
    setTimeout(() => {
      let el: any = this.element.querySelector('ui-input input,textarea,ui-phone input');
      if (!isEmpty(el)) el.focus();
    }, 10);

    if (this.busy) setTimeout(() => this.busyChanged(true), 200);
  }

  busyChanged(newValue: any) {
    let els = this.element.querySelectorAll('ui-button,ui-combo,ui-date,ui-input,ui-input-dual,ui-language,ui-markdown,ui-checkbox,ui-radio,ui-phone,ui-switch,ui-tags,ui-textarea');
    _.forEach(els, el => {
      try {
        el.au.controller.viewModel.disable(isTrue(newValue));
      } catch (e) {
      }
    });
  }

  fireSubmit() {
    UIEvent.fireEvent('submit', this.element, this);
  }

  getForm() {
    return this.__form;
  }
}
