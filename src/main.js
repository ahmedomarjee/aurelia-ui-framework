define(["require", "exports", "fetch", "fabric"], function (require, exports) {
    "use strict";
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .developmentLogging()
            .plugin('aurelia-validation')
            .plugin('aurelia-validatejs')
            .feature('./framework', function (config) {
            config.App.Key = 'App';
            config.App.Title = 'Aurelia UI Framework';
            config.App.Version = '2.00';
            config.Http.BaseUrl = './';
            config.Http.Headers = {
                'X-API-VERSION': '2'
            };
            config.Http.AuthorizationHeader = true;
            config.UseCharts = true;
        });
        return aurelia.start()
            .then(function (a) {
            return a.setRoot();
        })
            .then(function () {
            var splash = window.document.querySelector('.ui-splash');
            splash.classList.add('animate');
            setTimeout(function () {
                splash.parentElement.removeChild(splash);
            }, 1000);
        })
            .catch(function (e) {
            console.log(e);
        });
    }
    exports.configure = configure;
});
