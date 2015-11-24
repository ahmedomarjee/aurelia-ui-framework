var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "aurelia-router"], function (require, exports, aurelia_framework_1, aurelia_router_1) {
    var UIMenu = (function () {
        function UIMenu(element) {
            this.element = element;
            this.classes = '';
            this.floating = false;
            this.floating = element.hasAttribute('dropdown');
        }
        UIMenu.prototype.bind = function () {
            if (this.router && this.router.isRoot)
                this.classes = 'ui-app-menu';
            if (this.floating !== false)
                this.classes += ' ui-floating ';
        };
        UIMenu.prototype.linkClicked = function ($event) {
            var el = $($event.target).closest('a');
            if (el) {
                var e = new Event('click');
                e.bubbles = true;
                e.cancelable = true;
                e.target = el.get(0);
                this.element.dispatchEvent(e);
            }
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', aurelia_router_1.Router)
        ], UIMenu.prototype, "router");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIMenu.prototype, "title");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIMenu.prototype, "menu");
        UIMenu = __decorate([
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.containerless(),
            aurelia_framework_1.customElement("ui-menu"), 
            __metadata('design:paramtypes', [Element])
        ], UIMenu);
        return UIMenu;
    })();
    exports.UIMenu = UIMenu;
});