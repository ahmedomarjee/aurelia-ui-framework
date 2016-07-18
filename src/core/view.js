define(["require", "exports"], function (require, exports) {
    "use strict";
    var Core = (function () {
        function Core(appState) {
            this.appState = appState;
        }
        Core.prototype.configureRouter = function (config, router) {
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
                }, {
                    route: '', redirect: 'readme'
                }]);
        };
        Core.prototype.showAlert = function () {
            this.appState.alert('Hello World');
        };
        Core.prototype.showConfirm = function () {
            var _this = this;
            this.appState.confirm('Hello World?')
                .then(function () { return _this.appState.toast({ theme: 'success', icon: 'fi-vaadin-bell', message: 'You clicked OK' }); })
                .catch(function () { return _this.appState.toast({ theme: 'danger', icon: 'fi-vaadin-bell', message: 'You clicked Cancel' }); });
        };
        return Core;
    }());
    exports.Core = Core;
});
