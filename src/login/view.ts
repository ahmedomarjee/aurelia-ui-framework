import {UIApplication} from "../../framework/index";
import {autoinject} from "aurelia-framework";

@autoinject()
export class Login {
  error = '';

  constructor(public appState: UIApplication) {
  }

  activate(params) {
    if (params && params.status == 401) {
      this.error = '<span class="fi-ui-error-exclaim"></span> Unauthorized Access';
    }
  }

  doLogin($event) {
    this.appState.IsAuthenticated = true;
    let route = this.appState.session('AppCurrentRoute') || ['home', {}];
    this.appState.navigateTo.apply(this.appState, route);
  }
}
