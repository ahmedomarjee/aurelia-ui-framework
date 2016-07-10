define(["require", "exports", "./utils/ui-application", "./utils/ui-validation", "./utils/ui-event", "./utils/ui-formatters", "./utils/ui-application", "./utils/ui-model", "./inputs/ui-language", "./components/ui-dialog", "./utils/ui-tree-models", "./utils/ui-http-service", "./utils/ui-validation", "./utils/ui-utils", 'fetch', 'lodash', 'moment', 'numeral', './libs/marked', './libs/phonelib', './data/fileTypes', './data/countries', './data/currencies'], function (require, exports, ui_application_1, ui_validation_1, ui_event_1, ui_formatters_1, ui_application_2, ui_model_1, ui_language_1, ui_dialog_1, ui_tree_models_1, ui_http_service_1, ui_validation_2, ui_utils_1) {
    "use strict";
    function configure(aurelia, configCallback) {
        aurelia.container.registerHandler('ui-validator', function (container) { return container.get(ui_validation_1.UIValidationRenderer); });
        aurelia.globalResources('./core/ui-viewport');
        aurelia.globalResources('./core/ui-page');
        aurelia.globalResources('./core/ui-grid');
        aurelia.globalResources('./components/ui-menu');
        aurelia.globalResources('./components/ui-form');
        aurelia.globalResources('./components/ui-ribbon');
        aurelia.globalResources('./components/ui-panel');
        aurelia.globalResources('./components/ui-login');
        aurelia.globalResources('./components/ui-tree');
        aurelia.globalResources('./components/ui-datagrid');
        aurelia.globalResources('./components/ui-tab-panel');
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
        aurelia.globalResources('./utils/ui-converters');
        if (configCallback !== undefined && typeof configCallback === 'function') {
            configCallback(ui_application_1.UIApplication.defaults);
        }
    }
    exports.configure = configure;
    exports.UIEvent = ui_event_1.UIEvent;
    exports.UIFormat = ui_formatters_1.UIFormat;
    exports.UIApplication = ui_application_2.UIApplication;
    exports.AuthInterceptor = ui_application_2.AuthInterceptor;
    exports.UIModel = ui_model_1.UIModel;
    exports.UILanguage = ui_language_1.UILanguage;
    exports.UIDialogService = ui_dialog_1.UIDialogService;
    exports.UIDialog = ui_dialog_1.UIDialog;
    exports.UITreeModel = ui_tree_models_1.UITreeModel;
    exports.UITreeOptions = ui_tree_models_1.UITreeOptions;
    exports.UIHttpService = ui_http_service_1.UIHttpService;
    exports.validatemap = ui_validation_2.validatemap;
    exports.validatephone = ui_validation_2.validatephone;
    exports.UIUtils = ui_utils_1.UIUtils;
    exports._ = ui_utils_1._;
    exports.moment = ui_utils_1.moment;
    exports.numeral = ui_utils_1.numeral;
});
