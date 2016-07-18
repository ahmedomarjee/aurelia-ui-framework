import {Router} from "aurelia-router";
import {UIApplication} from "aurelia-ui-framework";
export class Core {
	private router: Router;

	configureRouter(config, router: Router) {
		this.router = router;
		config.title = 'Core Elements';
		config.map([{
			route: 'readme',
			moduleId: './readme',
			settings: { icon: 'fi-vaadin-open-book' },
			title: 'ReadMe',
			nav: true,
			auth: false,
			name: 'readme'
		}, {
				route: 'home',
				moduleId: './home',
				settings: { icon: 'fi-vaadin-flask' },
				title: 'Examples',
				nav: true,
				auth: false,
				name: 'home'
				//}, {
				//	route   : 'input',
				//	moduleId: './input',
				//	settings: {icon: 'fi-vaadin-input'},
				//	title   : 'Input',
				//	nav     : true,
				//	auth    : false,
				//	name    : 'input'
				//}, {
				//	route   : 'phone',
				//	moduleId: './phone',
				//	settings: {icon: 'fi-material-telephone-keypad-with-ten-keys'},
				//	title   : 'Telephone Input',
				//	nav     : true,
				//	auth    : false,
				//	name    : 'phone'
				//}, {
				//	route   : 'date',
				//	moduleId: './date',
				//	settings: {icon: 'fi-vaadin-date-input'},
				//	title   : 'Date Input',
				//	nav     : true,
				//	auth    : false,
				//	name    : 'date'
				//}, {
				//	route   : 'combo',
				//	moduleId: './combo',
				//	settings: {icon: 'fi-vaadin-combo-box'},
				//	title   : 'ComboBox',
				//	nav     : true,
				//	auth    : false,
				//	name    : 'combo'
				//}, {
				//	route   : 'textarea',
				//	moduleId: './textarea',
				//	settings: {icon: 'fi-vaadin-text-input'},
				//	title   : 'Multiline Input',
				//	nav     : true,
				//	auth    : false,
				//	name    : 'textarea'
				//}, {
				//	route   : 'options',
				//	moduleId: './options',
				//	settings: {icon: 'fi-vaadin-options'},
				//	title   : 'Checkbox/Radio',
				//	nav     : true,
				//	auth    : false,
				//	name    : 'options'
				//}, {
				//	route   : 'switch',
				//	moduleId: './switch',
				//	settings: {icon: 'fi-vaadin-slider'},
				//	title   : 'Toggle Switch',
				//	nav     : true,
				//	auth    : false,
				//	name    : 'switch'
			}, {
				route: '', redirect: 'readme'
			}]);
	}

	constructor(public appState: UIApplication) { }

	showAlert() {
		this.appState.alert('Hello World');
	}

	showConfirm() {
		this.appState.confirm('Hello World?')
			.then(() => this.appState.toast({ theme: 'success', icon: 'fi-vaadin-bell', message: 'You clicked OK' }))
			.catch(() => this.appState.toast({ theme: 'danger', icon: 'fi-vaadin-bell', message: 'You clicked Cancel' }));
	}

}
