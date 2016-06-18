/**
 *    UI Component  Login Panel
 *    @author       Adarsh Pastakia
 *    @company      HMC
 *    @copyright    2015-2016, Adarsh Pastakia
 **/
import {autoinject, inject, NewInstance, customElement, containerless, bindable, transient, bindingMode} from "aurelia-framework";
import {UIEvent} from "../utils/ui-event";
import {UIUtils} from "../utils/ui-utils";
import {UIModel} from "../utils/ui-model";
import {UIApplication} from "../utils/ui-application";
import {required, email, ValidationRules} from "aurelia-validatejs";
import {ValidationController} from "aurelia-validation";

//@inject(Element, UIApplication, NewInstance.of(ValidationController))
@autoinject
@customElement('ui-login')
export class UILogin {
  model: LoginModel;

  __page;
  __temp;
  __content;

  @bindable
  error: string;
  @bindable
  busy: boolean = false;

  constructor(public element: Element, public appState: UIApplication, public controller: ValidationController) {
    this.model = new LoginModel();
  }

  attached() {
    if (this.model.remember === true) this.doLogin();

    this.__content.appendChild(this.__temp);
  }

  doLogin() {
    if (this.controller.validate().length == 0) {
      this.error = '';
      UIEvent.fireEvent('login', this.element, this.model);
    }
  }

  toast(config) {
    if (typeof config === 'string') config = { message: config };
    config.extraClass = 'ui-page-toast';
    UIUtils.showToast(this.__page, config);
  }
}

@transient()
@autoinject()
export class LoginModel extends UIModel {
  @required
  @email
  username: string = '';
  @required
  password: string = '';

  @required
  tempInput: string = '';

  remember: boolean = false;

  appState: UIApplication;

  constructor() {
    super();

    let _u, _p;
    this.appState = UIUtils.lazy(UIApplication);
    if ((_u = this.appState.persist('AppUsername')) !== null) {
      this.username = _u;
    }
    if ((_p = this.appState.persist('AppPassword')) !== null) {
      this.password = _p;
      this.remember = true;
    }
  }

  save() {
    this.appState.persist('AppUsername', this.username);
    this.appState.persist('AppPassword', this.remember ? this.password : null);
  }
}
