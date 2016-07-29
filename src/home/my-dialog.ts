import {autoinject} from "aurelia-framework";
import {UIDialog, UIHttpService} from "../../framework/index";

@autoinject()
export class MyDialog extends UIDialog {
	static i = 1;

	md = '';
	modal = false;
	icon = 'fi-vaadin-exclamation-circle';
	title = `Dialog ${MyDialog.i++}`;
	countries = _.groupBy(window.countries, 'continent');

	constructor(public httpClient: UIHttpService) {
		super();
	}

	canActivate(model) {
		this.modal = (model || { modal: false }).modal;
		return this.httpClient
			.text('./markdown/example.md')
			.then(resp => this.md = resp)
	}

}
