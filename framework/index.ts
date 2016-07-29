/**
 *    UI Framework Plugins
 *    @author    Adarsh Pastakia
 *    @company    HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import 'lodash';
import 'moment';
import 'numeral';
import './libs/marked';
import './libs/phonelib';
import './data/fileTypes';
import './data/countries';
import './data/currencies';
import {FrameworkConfiguration} from "aurelia-framework";
import {UIChartStatic} from "./utils/ui-utils";
import {UIApplication} from "./utils/ui-application";
import {UIValidationRenderer} from "./utils/ui-validation";
import * as ld from 'lodash';

export function configure(aurelia: FrameworkConfiguration, configCallback) {
	aurelia.container.registerHandler('ui-validator', container => container.get(UIValidationRenderer));

	///** Core **/
	aurelia.globalResources('./core/ui-viewport');
	aurelia.globalResources('./core/ui-page');
	aurelia.globalResources('./core/ui-grid');

	///** Components **/
	aurelia.globalResources('./components/ui-menu');
	aurelia.globalResources('./components/ui-form');
	aurelia.globalResources('./components/ui-ribbon');
	aurelia.globalResources('./components/ui-panel');
	aurelia.globalResources('./components/ui-login');
	aurelia.globalResources('./components/ui-tree');
	aurelia.globalResources('./components/ui-datagrid');
	aurelia.globalResources('./components/ui-tab-panel');

	/** Inputs **/
	aurelia.globalResources('./inputs/ui-button');
	aurelia.globalResources('./inputs/ui-switch');
	aurelia.globalResources('./inputs/ui-option');
	aurelia.globalResources('./inputs/ui-input');
	aurelia.globalResources('./inputs/ui-file');
	aurelia.globalResources('./inputs/ui-phone');
	aurelia.globalResources('./inputs/ui-markdown');
	aurelia.globalResources('./inputs/ui-textarea');
	aurelia.globalResources('./inputs/ui-input-dual');
	aurelia.globalResources('./inputs/ui-combo');
	aurelia.globalResources('./inputs/ui-tags');
	aurelia.globalResources('./inputs/ui-language');
	aurelia.globalResources('./inputs/ui-date');
	aurelia.globalResources('./inputs/ui-date-view');
	aurelia.globalResources('./inputs/ui-reorder');
	aurelia.globalResources('./inputs/ui-list');

	/** Utils **/
	aurelia.globalResources('./utils/ui-converters');

	if (configCallback !== undefined && typeof configCallback === 'function') {
		configCallback(UIApplication.defaults);

		if (UIApplication.defaults.UseCharts) {
			aurelia.globalResources('./components/ui-chart');
			UIChartStatic.init();
		}
	}
}

// export {UIChart} from "./components/ui-chart";
export {UIEvent} from "./utils/ui-event";
export {UIFormat} from "./utils/ui-formatters";
export {UIApplication, AuthInterceptor} from "./utils/ui-application";
export {UIModel} from "./utils/ui-model";
// export {UILanguage} from "./inputs/ui-language";
export {UIDialogService, UIDialog} from "./components/ui-dialog";
export {UITreeModel, UITreeOptions, UITreePanel} from "./utils/ui-tree-models";
export {UIHttpService} from "./utils/ui-http-service";
export {validatemap, validatephone} from "./utils/ui-validation";
export {UIChartStatic, UIUtils, _, moment, numeral} from "./utils/ui-utils";
