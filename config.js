System.config({
  baseURL: ".",
  defaultJSExtensions: true,
  transpiler: "typescript",
  paths: {
    "npm:*": "jspm_packages/npm/*",
    "github:*": "jspm_packages/github/*"
  },
  bundles: {
    "dist/demo.js": [
      "framework/components/ui-datagrid.html!github:systemjs/plugin-text@0.0.4.js",
      "framework/components/ui-datagrid.js",
      "framework/components/ui-dialog.js",
      "framework/components/ui-form.html!github:systemjs/plugin-text@0.0.4.js",
      "framework/components/ui-form.js",
      "framework/components/ui-header.html!github:systemjs/plugin-text@0.0.4.js",
      "framework/components/ui-login.html!github:systemjs/plugin-text@0.0.4.js",
      "framework/components/ui-login.js",
      "framework/components/ui-menu.html!github:systemjs/plugin-text@0.0.4.js",
      "framework/components/ui-menu.js",
      "framework/components/ui-pager.html!github:systemjs/plugin-text@0.0.4.js",
      "framework/components/ui-panel.html!github:systemjs/plugin-text@0.0.4.js",
      "framework/components/ui-panel.js",
      "framework/components/ui-ribbon.html!github:systemjs/plugin-text@0.0.4.js",
      "framework/components/ui-ribbon.js",
      "framework/components/ui-tab-panel.html!github:systemjs/plugin-text@0.0.4.js",
      "framework/components/ui-tab-panel.js",
      "framework/components/ui-tree-node.html!github:systemjs/plugin-text@0.0.4.js",
      "framework/components/ui-tree.html!github:systemjs/plugin-text@0.0.4.js",
      "framework/components/ui-tree.js",
      "framework/core/ui-app-menu.html!github:systemjs/plugin-text@0.0.4.js",
      "framework/core/ui-grid.js",
      "framework/core/ui-page.html!github:systemjs/plugin-text@0.0.4.js",
      "framework/core/ui-page.js",
      "framework/core/ui-viewport.html!github:systemjs/plugin-text@0.0.4.js",
      "framework/core/ui-viewport.js",
      "framework/data/countries.js",
      "framework/data/currencies.js",
      "framework/data/fileTypes.js",
      "framework/data/filetypes.js",
      "framework/index.js",
      "framework/inputs/ui-button.html!github:systemjs/plugin-text@0.0.4.js",
      "framework/inputs/ui-button.js",
      "framework/inputs/ui-combo.html!github:systemjs/plugin-text@0.0.4.js",
      "framework/inputs/ui-combo.js",
      "framework/inputs/ui-date-view.html!github:systemjs/plugin-text@0.0.4.js",
      "framework/inputs/ui-date-view.js",
      "framework/inputs/ui-date.html!github:systemjs/plugin-text@0.0.4.js",
      "framework/inputs/ui-date.js",
      "framework/inputs/ui-file.html!github:systemjs/plugin-text@0.0.4.js",
      "framework/inputs/ui-file.js",
      "framework/inputs/ui-input-dual.js",
      "framework/inputs/ui-input-group.js",
      "framework/inputs/ui-input.html!github:systemjs/plugin-text@0.0.4.js",
      "framework/inputs/ui-input.js",
      "framework/inputs/ui-language.html!github:systemjs/plugin-text@0.0.4.js",
      "framework/inputs/ui-language.js",
      "framework/inputs/ui-list-group.html!github:systemjs/plugin-text@0.0.4.js",
      "framework/inputs/ui-list-item.html!github:systemjs/plugin-text@0.0.4.js",
      "framework/inputs/ui-list.html!github:systemjs/plugin-text@0.0.4.js",
      "framework/inputs/ui-list.js",
      "framework/inputs/ui-listing.js",
      "framework/inputs/ui-markdown.html!github:systemjs/plugin-text@0.0.4.js",
      "framework/inputs/ui-markdown.js",
      "framework/inputs/ui-option-group.html!github:systemjs/plugin-text@0.0.4.js",
      "framework/inputs/ui-option.html!github:systemjs/plugin-text@0.0.4.js",
      "framework/inputs/ui-option.js",
      "framework/inputs/ui-phone.js",
      "framework/inputs/ui-reorder.html!github:systemjs/plugin-text@0.0.4.js",
      "framework/inputs/ui-reorder.js",
      "framework/inputs/ui-switch.html!github:systemjs/plugin-text@0.0.4.js",
      "framework/inputs/ui-switch.js",
      "framework/inputs/ui-tags.html!github:systemjs/plugin-text@0.0.4.js",
      "framework/inputs/ui-tags.js",
      "framework/inputs/ui-textarea.html!github:systemjs/plugin-text@0.0.4.js",
      "framework/inputs/ui-textarea.js",
      "framework/libs/marked.js",
      "framework/libs/phonelib.js",
      "framework/utils/ui-application.js",
      "framework/utils/ui-converters.js",
      "framework/utils/ui-event.js",
      "framework/utils/ui-formatters.js",
      "framework/utils/ui-http-service.js",
      "framework/utils/ui-model.js",
      "framework/utils/ui-tree-models.js",
      "framework/utils/ui-utils.js",
      "framework/utils/ui-validation.js",
      "github:github/fetch@0.11.1.js",
      "github:github/fetch@0.11.1/fetch.js",
      "github:jspm/nodelibs-buffer@0.1.0.js",
      "github:jspm/nodelibs-buffer@0.1.0/index.js",
      "github:jspm/nodelibs-process@0.1.2.js",
      "github:jspm/nodelibs-process@0.1.2/index.js",
      "main.js",
      "npm:aurelia-binding@1.0.0-rc.1.0.2.js",
      "npm:aurelia-binding@1.0.0-rc.1.0.2/aurelia-binding.js",
      "npm:aurelia-bootstrapper@1.0.0-rc.1.0.0.js",
      "npm:aurelia-bootstrapper@1.0.0-rc.1.0.0/aurelia-bootstrapper.js",
      "npm:aurelia-dependency-injection@1.0.0-rc.1.0.0.js",
      "npm:aurelia-dependency-injection@1.0.0-rc.1.0.0/aurelia-dependency-injection.js",
      "npm:aurelia-event-aggregator@1.0.0-rc.1.0.0.js",
      "npm:aurelia-event-aggregator@1.0.0-rc.1.0.0/aurelia-event-aggregator.js",
      "npm:aurelia-fetch-client@1.0.0-rc.1.0.0.js",
      "npm:aurelia-fetch-client@1.0.0-rc.1.0.0/aurelia-fetch-client.js",
      "npm:aurelia-framework@1.0.0-rc.1.0.0.js",
      "npm:aurelia-framework@1.0.0-rc.1.0.0/aurelia-framework.js",
      "npm:aurelia-history-browser@1.0.0-rc.1.0.0.js",
      "npm:aurelia-history-browser@1.0.0-rc.1.0.0/aurelia-history-browser.js",
      "npm:aurelia-history@1.0.0-rc.1.0.0.js",
      "npm:aurelia-history@1.0.0-rc.1.0.0/aurelia-history.js",
      "npm:aurelia-loader-default@1.0.0-rc.1.0.0.js",
      "npm:aurelia-loader-default@1.0.0-rc.1.0.0/aurelia-loader-default.js",
      "npm:aurelia-loader@1.0.0-rc.1.0.0.js",
      "npm:aurelia-loader@1.0.0-rc.1.0.0/aurelia-loader.js",
      "npm:aurelia-logging-console@1.0.0-rc.1.0.0.js",
      "npm:aurelia-logging-console@1.0.0-rc.1.0.0/aurelia-logging-console.js",
      "npm:aurelia-logging@1.0.0-rc.1.0.0.js",
      "npm:aurelia-logging@1.0.0-rc.1.0.0/aurelia-logging.js",
      "npm:aurelia-metadata@1.0.0-rc.1.0.0.js",
      "npm:aurelia-metadata@1.0.0-rc.1.0.0/aurelia-metadata.js",
      "npm:aurelia-pal-browser@1.0.0-rc.1.0.0.js",
      "npm:aurelia-pal-browser@1.0.0-rc.1.0.0/aurelia-pal-browser.js",
      "npm:aurelia-pal@1.0.0-rc.1.0.0.js",
      "npm:aurelia-pal@1.0.0-rc.1.0.0/aurelia-pal.js",
      "npm:aurelia-path@1.0.0-rc.1.0.0.js",
      "npm:aurelia-path@1.0.0-rc.1.0.0/aurelia-path.js",
      "npm:aurelia-polyfills@1.0.0-rc.1.0.0.js",
      "npm:aurelia-polyfills@1.0.0-rc.1.0.0/aurelia-polyfills.js",
      "npm:aurelia-route-recognizer@1.0.0-rc.1.0.0.js",
      "npm:aurelia-route-recognizer@1.0.0-rc.1.0.0/aurelia-route-recognizer.js",
      "npm:aurelia-router@1.0.0-rc.1.0.0.js",
      "npm:aurelia-router@1.0.0-rc.1.0.0/aurelia-router.js",
      "npm:aurelia-task-queue@1.0.0-rc.1.0.0.js",
      "npm:aurelia-task-queue@1.0.0-rc.1.0.0/aurelia-task-queue.js",
      "npm:aurelia-templating-binding@1.0.0-rc.1.0.0.js",
      "npm:aurelia-templating-binding@1.0.0-rc.1.0.0/aurelia-templating-binding.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/abstract-repeater.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/analyze-view-factory.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/array-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/aurelia-hide-style.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/aurelia-templating-resources.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/binding-mode-behaviors.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/binding-signaler.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/compose.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/css-resource.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/debounce-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/dynamic-element.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/focus.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/hide.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/html-resource-plugin.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/html-sanitizer.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/if.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/map-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/null-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/number-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/repeat-strategy-locator.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/repeat-utilities.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/repeat.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/replaceable.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/sanitize-html.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/set-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/show.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/signal-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/throttle-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/update-trigger-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/with.js",
      "npm:aurelia-templating-router@1.0.0-rc.1.0.0.js",
      "npm:aurelia-templating-router@1.0.0-rc.1.0.0/aurelia-templating-router.js",
      "npm:aurelia-templating-router@1.0.0-rc.1.0.0/route-href.js",
      "npm:aurelia-templating-router@1.0.0-rc.1.0.0/route-loader.js",
      "npm:aurelia-templating-router@1.0.0-rc.1.0.0/router-view.js",
      "npm:aurelia-templating@1.0.0-rc.1.0.0.js",
      "npm:aurelia-templating@1.0.0-rc.1.0.0/aurelia-templating.js",
      "npm:aurelia-validatejs@0.5.2.js",
      "npm:aurelia-validatejs@0.5.2/aurelia-validatejs.js",
      "npm:aurelia-validation@0.9.2.js",
      "npm:aurelia-validation@0.9.2/aurelia-validation.js",
      "npm:aurelia-validation@0.9.2/property-info.js",
      "npm:aurelia-validation@0.9.2/validate-binding-behavior.js",
      "npm:aurelia-validation@0.9.2/validate-trigger.js",
      "npm:aurelia-validation@0.9.2/validation-controller.js",
      "npm:aurelia-validation@0.9.2/validation-error.js",
      "npm:aurelia-validation@0.9.2/validation-errors-custom-attribute.js",
      "npm:aurelia-validation@0.9.2/validation-renderer-custom-attribute.js",
      "npm:aurelia-validation@0.9.2/validation-renderer.js",
      "npm:aurelia-validation@0.9.2/validator.js",
      "npm:base64-js@0.0.8.js",
      "npm:base64-js@0.0.8/lib/b64.js",
      "npm:buffer@3.6.0.js",
      "npm:buffer@3.6.0/index.js",
      "npm:ieee754@1.1.6.js",
      "npm:ieee754@1.1.6/index.js",
      "npm:isarray@1.0.0.js",
      "npm:isarray@1.0.0/index.js",
      "npm:lodash@4.13.1.js",
      "npm:lodash@4.13.1/lodash.js",
      "npm:moment@2.13.0.js",
      "npm:moment@2.13.0/moment.js",
      "npm:numeral@1.5.3.js",
      "npm:numeral@1.5.3/numeral.js",
      "npm:process@0.11.5.js",
      "npm:process@0.11.5/browser.js",
      "npm:validate.js@0.10.0.js",
      "npm:validate.js@0.10.0/validate.js",
      "src/app.html!github:systemjs/plugin-text@0.0.4.js",
      "src/app.js",
      "src/components/readme.js",
      "src/components/view.html!github:systemjs/plugin-text@0.0.4.js",
      "src/components/view.js",
      "src/core/readme.js",
      "src/core/view.html!github:systemjs/plugin-text@0.0.4.js",
      "src/core/view.js",
      "src/highlight.js",
      "src/home/colors.html!github:systemjs/plugin-text@0.0.4.js",
      "src/home/colors.js",
      "src/home/my-dialog.html!github:systemjs/plugin-text@0.0.4.js",
      "src/home/my-dialog.js",
      "src/home/readme.js",
      "src/home/todo.js",
      "src/home/validate.html!github:systemjs/plugin-text@0.0.4.js",
      "src/home/validate.js",
      "src/home/view.html!github:systemjs/plugin-text@0.0.4.js",
      "src/home/view.js",
      "src/inputs/readme.js",
      "src/inputs/view.html!github:systemjs/plugin-text@0.0.4.js",
      "src/inputs/view.js",
      "src/login/view.html!github:systemjs/plugin-text@0.0.4.js",
      "src/login/view.js",
      "src/utils/readme.js",
      "src/utils/view.html!github:systemjs/plugin-text@0.0.4.js",
      "src/utils/view.js"
    ]
  },

  map: {
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0-rc.1.0.0",
    "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-rc.1.0.0",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0-rc.1.0.0",
    "aurelia-framework": "npm:aurelia-framework@1.0.0-rc.1.0.0",
    "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.0",
    "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.0",
    "aurelia-router": "npm:aurelia-router@1.0.0-rc.1.0.0",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-rc.1.0.0",
    "aurelia-validatejs": "npm:aurelia-validatejs@0.5.2",
    "aurelia-validation": "npm:aurelia-validation@0.9.2",
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "core-js": "npm:core-js@1.2.6",
    "fetch": "github:github/fetch@0.11.1",
    "lodash": "npm:lodash@4.13.1",
    "moment": "npm:moment@2.13.0",
    "numeral": "npm:numeral@1.5.3",
    "text": "github:systemjs/plugin-text@0.0.4",
    "typescript": "npm:typescript@1.8.10",
    "validate.js": "npm:validate.js@0.10.0",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.5"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-binding@1.0.0-rc.1.0.2": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-bootstrapper@1.0.0-rc.1.0.0": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-rc.1.0.0",
      "aurelia-framework": "npm:aurelia-framework@1.0.0-rc.1.0.0",
      "aurelia-history": "npm:aurelia-history@1.0.0-rc.1.0.0",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-rc.1.0.0",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-rc.1.0.0",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-rc.1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-rc.1.0.0",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0-rc.1.0.0",
      "aurelia-router": "npm:aurelia-router@1.0.0-rc.1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-rc.1.0.0",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-rc.1.0.0",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-rc.1.0.0",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-dependency-injection@1.0.0-rc.1.0.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-event-aggregator@1.0.0-rc.1.0.0": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-framework@1.0.0-rc.1.0.0": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-rc.1.0.2",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-rc.1.0.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-rc.1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-rc.1.0.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-rc.1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-history-browser@1.0.0-rc.1.0.0": {
      "aurelia-history": "npm:aurelia-history@1.0.0-rc.1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-loader-default@1.0.0-rc.1.0.0": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0-rc.1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-loader@1.0.0-rc.1.0.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-logging-console@1.0.0-rc.1.0.0": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-metadata@1.0.0-rc.1.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-pal-browser@1.0.0-rc.1.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-polyfills@1.0.0-rc.1.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-route-recognizer@1.0.0-rc.1.0.0": {
      "aurelia-path": "npm:aurelia-path@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-router@1.0.0-rc.1.0.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-rc.1.0.0",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-rc.1.0.0",
      "aurelia-history": "npm:aurelia-history@1.0.0-rc.1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-rc.1.0.0",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-task-queue@1.0.0-rc.1.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-templating-binding@1.0.0-rc.1.0.0": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-rc.1.0.2",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-templating-resources@1.0.0-rc.1.0.0": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-rc.1.0.2",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-rc.1.0.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-rc.1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-rc.1.0.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-rc.1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-templating-router@1.0.0-rc.1.0.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-rc.1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-rc.1.0.0",
      "aurelia-router": "npm:aurelia-router@1.0.0-rc.1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-templating@1.0.0-rc.1.0.0": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-rc.1.0.2",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-rc.1.0.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-rc.1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-rc.1.0.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-validatejs@0.5.2": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.0",
      "aurelia-validation": "npm:aurelia-validation@0.9.2",
      "validate.js": "npm:validate.js@0.10.0"
    },
    "npm:aurelia-validation@0.9.2": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-rc.1.0.2",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-rc.1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-rc.1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-rc.1.0.0"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:isarray@1.0.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:lodash@4.13.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:numeral@1.5.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.5": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:typescript@1.8.10": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:validate.js@0.10.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});
