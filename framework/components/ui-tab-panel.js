var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "../utils/ui-utils"], function (require, exports, aurelia_framework_1, ui_utils_1) {
    var UITabPanel = (function () {
        function UITabPanel(element) {
            this.element = element;
            this.tabs = [];
            this.activeTab = 0;
        }
        UITabPanel.prototype.bind = function () {
            var _this = this;
            ui_utils_1._.forEach(this.element.querySelectorAll('ui-tab'), function (t) { return _this.tabs.push(t); });
        };
        UITabPanel.prototype.attached = function () {
            this.activeTabChanged(this.activeTab);
        };
        UITabPanel.prototype.activeTabChanged = function (newValue) {
            if (this.tabs[newValue]) {
                try {
                    this.__tabButtons
                        .querySelector('.ui-active')
                        .classList
                        .remove('ui-active');
                    this.__tabs
                        .querySelector('.ui-active')
                        .classList
                        .remove('ui-active');
                }
                catch (e) {
                }
                this.__tabButtons
                    .querySelector("[data-index=\"" + newValue + "\"]")
                    .classList
                    .add('ui-active');
                this.tabs[newValue]
                    .classList
                    .add('ui-active');
            }
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], UITabPanel.prototype, "activeTab", void 0);
        UITabPanel = __decorate([
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.customElement('ui-tab-panel'), 
            __metadata('design:paramtypes', [Element])
        ], UITabPanel);
        return UITabPanel;
    })();
    exports.UITabPanel = UITabPanel;
    var UITab = (function () {
        function UITab(element) {
            this.element = element;
            this.label = '';
            this.icon = '';
            if (this.element.hasAttribute('scroll'))
                this.element.classList.add('ui-scroll');
        }
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UITab.prototype, "label", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UITab.prototype, "icon", void 0);
        UITab = __decorate([
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.inlineView('<template class="ui-tab-content"><content></content></template>'),
            aurelia_framework_1.customElement('ui-tab'), 
            __metadata('design:paramtypes', [Element])
        ], UITab);
        return UITab;
    })();
    exports.UITab = UITab;
});
