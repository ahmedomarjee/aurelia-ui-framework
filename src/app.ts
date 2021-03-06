import {UIUtils, UIEvent, AuthInterceptor, UIApplication} from "../framework/index";
import {autoinject} from "aurelia-framework";
import {Router} from "aurelia-router";
import './highlight';

@autoinject()
export class App {
	private router: Router;

	configureRouter(config, router: Router) {
		this.router = router;
		config.title = 'Aurelia UI Framework';
		config.options.showLogo = true;
		config.options.showAuthentication = true;
		config.addPipelineStep('authorize', AuthInterceptor);
		config.map([{
			route: 'login',
			moduleId: './login/view',
			nav: false,
			auth: false,
			isLogin: true,
			name: 'login'
		}, {
				route: 'home',
				moduleId: './home/view',
				settings: { sectionTitle: 'Aurelia UI Framework', icon: 'fi-material-window-with-different-sections' },
				title: 'Framework Elements',
				nav: true,
				auth: false,
				name: 'home'
			}, {
				route: 'validate',
				moduleId: './home/validate',
				settings: { icon: 'fi-vaadin-automation' },
				title: 'Validation Tester',
				nav: true,
				auth: false,
				name: 'validate'
			}, {
				route: 'charts',
				moduleId: './home/chart',
				settings: { icon: 'fi-vaadin-chart' },
				title: 'Chart Example',
				nav: true,
				auth: false,
				name: 'charts'
			}, {
				route: 'colors',
				moduleId: './home/colors',
				settings: { icon: 'fi-material-painter-palette' },
				title: 'Copic Colors',
				nav: true,
				auth: false,
				name: 'colors'
			}, {
				route: 'readme',
				moduleId: './home/readme',
				settings: { icon: 'fi-vaadin-open-book' },
				title: 'ReadMe',
				nav: true,
				auth: true,
				name: 'readme'
			}, {
				route: 'core',
				moduleId: './core/view',
				settings: { icon: 'fi-vaadin-viewpoint', sectionStart: true },
				title: 'Core Elements',
				nav: true,
				auth: false,
				name: 'core'
			}, {
				route: 'components',
				moduleId: './components/view',
				settings: { icon: 'fi-vaadin-modal-list' },
				title: 'Components',
				nav: true,
				auth: false,
				name: 'components'
			}, {
				route: 'inputs',
				moduleId: './inputs/view',
				settings: { icon: 'fi-vaadin-input' },
				title: 'Input Elements',
				nav: true,
				auth: false,
				name: 'inputs'
			}, {
				route: 'utils',
				moduleId: './utils/view',
				settings: { icon: 'fi-vaadin-tools' },
				title: 'Utility Classes',
				nav: true,
				auth: false,
				name: 'utils'
			}, {
				route: '', redirect: 'home'
			}]);
	}

	constructor(public appState: UIApplication) {
		appState.IsAuthenticated = true;
	}

	logout() {
		this.appState.navigateTo('login');
	}

	toggleDir() {
		document.body.dir = document.body.dir == 'rtl' ? 'ltr' : 'rtl';
	}

	toggleTheme(id) {
		let css = document.getElementById('baseStyle') as HTMLLinkElement;
		// css.href = css.href.indexOf('light') == -1 ? 'styles/app-light.css' : 'styles/app-dark.css';
		let _css = 'light';
		switch (id) {
			case 'green': _css = 'green'; break;
			case 'dark': _css = 'dark'; break;
		}
		css.href = `styles/app-${_css}.css`;
	}
}
