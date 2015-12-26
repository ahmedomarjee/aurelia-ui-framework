System.config({
  baseURL: ".",
  defaultJSExtensions: true,
  transpiler: "typescript",
  paths: {
    "npm:*": "jspm_packages/npm/*",
    "github:*": "jspm_packages/github/*"
  },
  bundles: {
    "dist/aurelia.js": [
      "github:jspm/nodelibs-process@0.1.2",
      "github:jspm/nodelibs-process@0.1.2/index",
      "npm:aurelia-binding@1.0.0-beta.1.0.2",
      "npm:aurelia-binding@1.0.0-beta.1.0.2/aurelia-binding",
      "npm:aurelia-bootstrapper@1.0.0-beta.1",
      "npm:aurelia-bootstrapper@1.0.0-beta.1/aurelia-bootstrapper",
      "npm:aurelia-dependency-injection@1.0.0-beta.1",
      "npm:aurelia-dependency-injection@1.0.0-beta.1/aurelia-dependency-injection",
      "npm:aurelia-event-aggregator@1.0.0-beta.1",
      "npm:aurelia-event-aggregator@1.0.0-beta.1/aurelia-event-aggregator",
      "npm:aurelia-fetch-client@1.0.0-beta.1.0.1",
      "npm:aurelia-fetch-client@1.0.0-beta.1.0.1/aurelia-fetch-client",
      "npm:aurelia-framework@1.0.0-beta.1.0.3",
      "npm:aurelia-framework@1.0.0-beta.1.0.3/aurelia-framework",
      "npm:aurelia-history-browser@1.0.0-beta.1.0.1",
      "npm:aurelia-history-browser@1.0.0-beta.1.0.1/aurelia-history-browser",
      "npm:aurelia-history@1.0.0-beta.1",
      "npm:aurelia-history@1.0.0-beta.1/aurelia-history",
      "npm:aurelia-loader-default@1.0.0-beta.1.0.1",
      "npm:aurelia-loader-default@1.0.0-beta.1.0.1/aurelia-loader-default",
      "npm:aurelia-loader@1.0.0-beta.1",
      "npm:aurelia-loader@1.0.0-beta.1/aurelia-loader",
      "npm:aurelia-logging-console@1.0.0-beta.1",
      "npm:aurelia-logging-console@1.0.0-beta.1/aurelia-logging-console",
      "npm:aurelia-logging@1.0.0-beta.1",
      "npm:aurelia-logging@1.0.0-beta.1/aurelia-logging",
      "npm:aurelia-metadata@1.0.0-beta.1",
      "npm:aurelia-metadata@1.0.0-beta.1/aurelia-metadata",
      "npm:aurelia-pal-browser@1.0.0-beta.1",
      "npm:aurelia-pal-browser@1.0.0-beta.1/aurelia-pal-browser",
      "npm:aurelia-pal@1.0.0-beta.1",
      "npm:aurelia-pal@1.0.0-beta.1/aurelia-pal",
      "npm:aurelia-path@1.0.0-beta.1",
      "npm:aurelia-path@1.0.0-beta.1/aurelia-path",
      "npm:aurelia-route-recognizer@1.0.0-beta.1",
      "npm:aurelia-route-recognizer@1.0.0-beta.1/aurelia-route-recognizer",
      "npm:aurelia-router@1.0.0-beta.1",
      "npm:aurelia-router@1.0.0-beta.1/aurelia-router",
      "npm:aurelia-task-queue@1.0.0-beta.1.0.1",
      "npm:aurelia-task-queue@1.0.0-beta.1.0.1/aurelia-task-queue",
      "npm:aurelia-templating-binding@1.0.0-beta.1.0.1",
      "npm:aurelia-templating-binding@1.0.0-beta.1.0.1/aurelia-templating-binding",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/analyze-view-factory",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/array-repeat-strategy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/aurelia-templating-resources",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/binding-mode-behaviors",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/binding-signaler",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/compile-spy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/compose",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/css-resource",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/debounce-binding-behavior",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/dynamic-element",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/focus",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/html-sanitizer",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/if",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/map-repeat-strategy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/null-repeat-strategy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/number-repeat-strategy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/repeat",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/repeat-strategy-locator",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/repeat-utilities",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/replaceable",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/sanitize-html",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/show",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/signal-binding-behavior",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/throttle-binding-behavior",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/update-trigger-binding-behavior",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/view-spy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/with",
      "npm:aurelia-templating-router@1.0.0-beta.1.0.2",
      "npm:aurelia-templating-router@1.0.0-beta.1.0.2/aurelia-templating-router",
      "npm:aurelia-templating-router@1.0.0-beta.1.0.2/route-href",
      "npm:aurelia-templating-router@1.0.0-beta.1.0.2/route-loader",
      "npm:aurelia-templating-router@1.0.0-beta.1.0.2/router-view",
      "npm:aurelia-templating@1.0.0-beta.1.0.1",
      "npm:aurelia-templating@1.0.0-beta.1.0.1/aurelia-templating",
      "npm:aurelia-validation@0.6.0",
      "npm:aurelia-validation@0.6.0/debouncer",
      "npm:aurelia-validation@0.6.0/decorators",
      "npm:aurelia-validation@0.6.0/index",
      "npm:aurelia-validation@0.6.0/path-observer",
      "npm:aurelia-validation@0.6.0/resources/bg-BG",
      "npm:aurelia-validation@0.6.0/resources/ca-ES",
      "npm:aurelia-validation@0.6.0/resources/da-DK",
      "npm:aurelia-validation@0.6.0/resources/de-DE",
      "npm:aurelia-validation@0.6.0/resources/en-US",
      "npm:aurelia-validation@0.6.0/resources/es-MX",
      "npm:aurelia-validation@0.6.0/resources/fr-FR",
      "npm:aurelia-validation@0.6.0/resources/nb-NO",
      "npm:aurelia-validation@0.6.0/resources/nl-BE",
      "npm:aurelia-validation@0.6.0/resources/nl-NL",
      "npm:aurelia-validation@0.6.0/resources/nn-NO",
      "npm:aurelia-validation@0.6.0/resources/sv-SE",
      "npm:aurelia-validation@0.6.0/resources/tr-TR",
      "npm:aurelia-validation@0.6.0/resources/zh-CN",
      "npm:aurelia-validation@0.6.0/strategies/twbootstrap-view-strategy",
      "npm:aurelia-validation@0.6.0/utilities",
      "npm:aurelia-validation@0.6.0/validate-custom-attribute",
      "npm:aurelia-validation@0.6.0/validation",
      "npm:aurelia-validation@0.6.0/validation-config",
      "npm:aurelia-validation@0.6.0/validation-group",
      "npm:aurelia-validation@0.6.0/validation-group-builder",
      "npm:aurelia-validation@0.6.0/validation-locale",
      "npm:aurelia-validation@0.6.0/validation-property",
      "npm:aurelia-validation@0.6.0/validation-result",
      "npm:aurelia-validation@0.6.0/validation-rules",
      "npm:aurelia-validation@0.6.0/validation-rules-collection",
      "npm:aurelia-validation@0.6.0/validation-view-strategy",
      "npm:core-js@1.2.6",
      "npm:core-js@1.2.6/index",
      "npm:core-js@1.2.6/modules/$",
      "npm:core-js@1.2.6/modules/$.a-function",
      "npm:core-js@1.2.6/modules/$.add-to-unscopables",
      "npm:core-js@1.2.6/modules/$.an-object",
      "npm:core-js@1.2.6/modules/$.array-copy-within",
      "npm:core-js@1.2.6/modules/$.array-fill",
      "npm:core-js@1.2.6/modules/$.array-includes",
      "npm:core-js@1.2.6/modules/$.array-methods",
      "npm:core-js@1.2.6/modules/$.array-species-create",
      "npm:core-js@1.2.6/modules/$.classof",
      "npm:core-js@1.2.6/modules/$.cof",
      "npm:core-js@1.2.6/modules/$.collection",
      "npm:core-js@1.2.6/modules/$.collection-strong",
      "npm:core-js@1.2.6/modules/$.collection-to-json",
      "npm:core-js@1.2.6/modules/$.collection-weak",
      "npm:core-js@1.2.6/modules/$.core",
      "npm:core-js@1.2.6/modules/$.ctx",
      "npm:core-js@1.2.6/modules/$.defined",
      "npm:core-js@1.2.6/modules/$.descriptors",
      "npm:core-js@1.2.6/modules/$.dom-create",
      "npm:core-js@1.2.6/modules/$.enum-keys",
      "npm:core-js@1.2.6/modules/$.export",
      "npm:core-js@1.2.6/modules/$.fails",
      "npm:core-js@1.2.6/modules/$.fails-is-regexp",
      "npm:core-js@1.2.6/modules/$.fix-re-wks",
      "npm:core-js@1.2.6/modules/$.flags",
      "npm:core-js@1.2.6/modules/$.for-of",
      "npm:core-js@1.2.6/modules/$.get-names",
      "npm:core-js@1.2.6/modules/$.global",
      "npm:core-js@1.2.6/modules/$.has",
      "npm:core-js@1.2.6/modules/$.hide",
      "npm:core-js@1.2.6/modules/$.html",
      "npm:core-js@1.2.6/modules/$.invoke",
      "npm:core-js@1.2.6/modules/$.iobject",
      "npm:core-js@1.2.6/modules/$.is-array",
      "npm:core-js@1.2.6/modules/$.is-array-iter",
      "npm:core-js@1.2.6/modules/$.is-integer",
      "npm:core-js@1.2.6/modules/$.is-object",
      "npm:core-js@1.2.6/modules/$.is-regexp",
      "npm:core-js@1.2.6/modules/$.iter-call",
      "npm:core-js@1.2.6/modules/$.iter-create",
      "npm:core-js@1.2.6/modules/$.iter-define",
      "npm:core-js@1.2.6/modules/$.iter-detect",
      "npm:core-js@1.2.6/modules/$.iter-step",
      "npm:core-js@1.2.6/modules/$.iterators",
      "npm:core-js@1.2.6/modules/$.keyof",
      "npm:core-js@1.2.6/modules/$.library",
      "npm:core-js@1.2.6/modules/$.math-expm1",
      "npm:core-js@1.2.6/modules/$.math-log1p",
      "npm:core-js@1.2.6/modules/$.math-sign",
      "npm:core-js@1.2.6/modules/$.microtask",
      "npm:core-js@1.2.6/modules/$.object-assign",
      "npm:core-js@1.2.6/modules/$.object-define",
      "npm:core-js@1.2.6/modules/$.object-sap",
      "npm:core-js@1.2.6/modules/$.object-to-array",
      "npm:core-js@1.2.6/modules/$.own-keys",
      "npm:core-js@1.2.6/modules/$.partial",
      "npm:core-js@1.2.6/modules/$.path",
      "npm:core-js@1.2.6/modules/$.property-desc",
      "npm:core-js@1.2.6/modules/$.redefine",
      "npm:core-js@1.2.6/modules/$.redefine-all",
      "npm:core-js@1.2.6/modules/$.replacer",
      "npm:core-js@1.2.6/modules/$.same-value",
      "npm:core-js@1.2.6/modules/$.set-proto",
      "npm:core-js@1.2.6/modules/$.set-species",
      "npm:core-js@1.2.6/modules/$.set-to-string-tag",
      "npm:core-js@1.2.6/modules/$.shared",
      "npm:core-js@1.2.6/modules/$.species-constructor",
      "npm:core-js@1.2.6/modules/$.strict-new",
      "npm:core-js@1.2.6/modules/$.string-at",
      "npm:core-js@1.2.6/modules/$.string-context",
      "npm:core-js@1.2.6/modules/$.string-pad",
      "npm:core-js@1.2.6/modules/$.string-repeat",
      "npm:core-js@1.2.6/modules/$.string-trim",
      "npm:core-js@1.2.6/modules/$.task",
      "npm:core-js@1.2.6/modules/$.to-index",
      "npm:core-js@1.2.6/modules/$.to-integer",
      "npm:core-js@1.2.6/modules/$.to-iobject",
      "npm:core-js@1.2.6/modules/$.to-length",
      "npm:core-js@1.2.6/modules/$.to-object",
      "npm:core-js@1.2.6/modules/$.to-primitive",
      "npm:core-js@1.2.6/modules/$.uid",
      "npm:core-js@1.2.6/modules/$.wks",
      "npm:core-js@1.2.6/modules/core.delay",
      "npm:core-js@1.2.6/modules/core.dict",
      "npm:core-js@1.2.6/modules/core.function.part",
      "npm:core-js@1.2.6/modules/core.get-iterator",
      "npm:core-js@1.2.6/modules/core.get-iterator-method",
      "npm:core-js@1.2.6/modules/core.is-iterable",
      "npm:core-js@1.2.6/modules/core.log",
      "npm:core-js@1.2.6/modules/core.number.iterator",
      "npm:core-js@1.2.6/modules/core.object.classof",
      "npm:core-js@1.2.6/modules/core.object.define",
      "npm:core-js@1.2.6/modules/core.object.is-object",
      "npm:core-js@1.2.6/modules/core.object.make",
      "npm:core-js@1.2.6/modules/core.string.escape-html",
      "npm:core-js@1.2.6/modules/core.string.unescape-html",
      "npm:core-js@1.2.6/modules/es5",
      "npm:core-js@1.2.6/modules/es6.array.copy-within",
      "npm:core-js@1.2.6/modules/es6.array.fill",
      "npm:core-js@1.2.6/modules/es6.array.find",
      "npm:core-js@1.2.6/modules/es6.array.find-index",
      "npm:core-js@1.2.6/modules/es6.array.from",
      "npm:core-js@1.2.6/modules/es6.array.iterator",
      "npm:core-js@1.2.6/modules/es6.array.of",
      "npm:core-js@1.2.6/modules/es6.array.species",
      "npm:core-js@1.2.6/modules/es6.function.has-instance",
      "npm:core-js@1.2.6/modules/es6.function.name",
      "npm:core-js@1.2.6/modules/es6.map",
      "npm:core-js@1.2.6/modules/es6.math.acosh",
      "npm:core-js@1.2.6/modules/es6.math.asinh",
      "npm:core-js@1.2.6/modules/es6.math.atanh",
      "npm:core-js@1.2.6/modules/es6.math.cbrt",
      "npm:core-js@1.2.6/modules/es6.math.clz32",
      "npm:core-js@1.2.6/modules/es6.math.cosh",
      "npm:core-js@1.2.6/modules/es6.math.expm1",
      "npm:core-js@1.2.6/modules/es6.math.fround",
      "npm:core-js@1.2.6/modules/es6.math.hypot",
      "npm:core-js@1.2.6/modules/es6.math.imul",
      "npm:core-js@1.2.6/modules/es6.math.log10",
      "npm:core-js@1.2.6/modules/es6.math.log1p",
      "npm:core-js@1.2.6/modules/es6.math.log2",
      "npm:core-js@1.2.6/modules/es6.math.sign",
      "npm:core-js@1.2.6/modules/es6.math.sinh",
      "npm:core-js@1.2.6/modules/es6.math.tanh",
      "npm:core-js@1.2.6/modules/es6.math.trunc",
      "npm:core-js@1.2.6/modules/es6.number.constructor",
      "npm:core-js@1.2.6/modules/es6.number.epsilon",
      "npm:core-js@1.2.6/modules/es6.number.is-finite",
      "npm:core-js@1.2.6/modules/es6.number.is-integer",
      "npm:core-js@1.2.6/modules/es6.number.is-nan",
      "npm:core-js@1.2.6/modules/es6.number.is-safe-integer",
      "npm:core-js@1.2.6/modules/es6.number.max-safe-integer",
      "npm:core-js@1.2.6/modules/es6.number.min-safe-integer",
      "npm:core-js@1.2.6/modules/es6.number.parse-float",
      "npm:core-js@1.2.6/modules/es6.number.parse-int",
      "npm:core-js@1.2.6/modules/es6.object.assign",
      "npm:core-js@1.2.6/modules/es6.object.freeze",
      "npm:core-js@1.2.6/modules/es6.object.get-own-property-descriptor",
      "npm:core-js@1.2.6/modules/es6.object.get-own-property-names",
      "npm:core-js@1.2.6/modules/es6.object.get-prototype-of",
      "npm:core-js@1.2.6/modules/es6.object.is",
      "npm:core-js@1.2.6/modules/es6.object.is-extensible",
      "npm:core-js@1.2.6/modules/es6.object.is-frozen",
      "npm:core-js@1.2.6/modules/es6.object.is-sealed",
      "npm:core-js@1.2.6/modules/es6.object.keys",
      "npm:core-js@1.2.6/modules/es6.object.prevent-extensions",
      "npm:core-js@1.2.6/modules/es6.object.seal",
      "npm:core-js@1.2.6/modules/es6.object.set-prototype-of",
      "npm:core-js@1.2.6/modules/es6.object.to-string",
      "npm:core-js@1.2.6/modules/es6.promise",
      "npm:core-js@1.2.6/modules/es6.reflect.apply",
      "npm:core-js@1.2.6/modules/es6.reflect.construct",
      "npm:core-js@1.2.6/modules/es6.reflect.define-property",
      "npm:core-js@1.2.6/modules/es6.reflect.delete-property",
      "npm:core-js@1.2.6/modules/es6.reflect.enumerate",
      "npm:core-js@1.2.6/modules/es6.reflect.get",
      "npm:core-js@1.2.6/modules/es6.reflect.get-own-property-descriptor",
      "npm:core-js@1.2.6/modules/es6.reflect.get-prototype-of",
      "npm:core-js@1.2.6/modules/es6.reflect.has",
      "npm:core-js@1.2.6/modules/es6.reflect.is-extensible",
      "npm:core-js@1.2.6/modules/es6.reflect.own-keys",
      "npm:core-js@1.2.6/modules/es6.reflect.prevent-extensions",
      "npm:core-js@1.2.6/modules/es6.reflect.set",
      "npm:core-js@1.2.6/modules/es6.reflect.set-prototype-of",
      "npm:core-js@1.2.6/modules/es6.regexp.constructor",
      "npm:core-js@1.2.6/modules/es6.regexp.flags",
      "npm:core-js@1.2.6/modules/es6.regexp.match",
      "npm:core-js@1.2.6/modules/es6.regexp.replace",
      "npm:core-js@1.2.6/modules/es6.regexp.search",
      "npm:core-js@1.2.6/modules/es6.regexp.split",
      "npm:core-js@1.2.6/modules/es6.set",
      "npm:core-js@1.2.6/modules/es6.string.code-point-at",
      "npm:core-js@1.2.6/modules/es6.string.ends-with",
      "npm:core-js@1.2.6/modules/es6.string.from-code-point",
      "npm:core-js@1.2.6/modules/es6.string.includes",
      "npm:core-js@1.2.6/modules/es6.string.iterator",
      "npm:core-js@1.2.6/modules/es6.string.raw",
      "npm:core-js@1.2.6/modules/es6.string.repeat",
      "npm:core-js@1.2.6/modules/es6.string.starts-with",
      "npm:core-js@1.2.6/modules/es6.string.trim",
      "npm:core-js@1.2.6/modules/es6.symbol",
      "npm:core-js@1.2.6/modules/es6.weak-map",
      "npm:core-js@1.2.6/modules/es6.weak-set",
      "npm:core-js@1.2.6/modules/es7.array.includes",
      "npm:core-js@1.2.6/modules/es7.map.to-json",
      "npm:core-js@1.2.6/modules/es7.object.entries",
      "npm:core-js@1.2.6/modules/es7.object.get-own-property-descriptors",
      "npm:core-js@1.2.6/modules/es7.object.values",
      "npm:core-js@1.2.6/modules/es7.regexp.escape",
      "npm:core-js@1.2.6/modules/es7.set.to-json",
      "npm:core-js@1.2.6/modules/es7.string.at",
      "npm:core-js@1.2.6/modules/es7.string.pad-left",
      "npm:core-js@1.2.6/modules/es7.string.pad-right",
      "npm:core-js@1.2.6/modules/es7.string.trim-left",
      "npm:core-js@1.2.6/modules/es7.string.trim-right",
      "npm:core-js@1.2.6/modules/js.array.statics",
      "npm:core-js@1.2.6/modules/web.dom.iterable",
      "npm:core-js@1.2.6/modules/web.immediate",
      "npm:core-js@1.2.6/modules/web.timers",
      "npm:core-js@1.2.6/shim",
      "npm:process@0.11.2",
      "npm:process@0.11.2/browser"
    ],
    "dist/aurelia-ui-framework.js": [
      "framework/components/ui-button.html!github:systemjs/plugin-text@0.0.3",
      "framework/components/ui-button.js",
      "framework/components/ui-chosen.html!github:systemjs/plugin-text@0.0.3",
      "framework/components/ui-chosen.js",
      "framework/components/ui-date.html!github:systemjs/plugin-text@0.0.3",
      "framework/components/ui-date.js",
      "framework/components/ui-divider.js",
      "framework/components/ui-input.html!github:systemjs/plugin-text@0.0.3",
      "framework/components/ui-input.js",
      "framework/components/ui-lang-select.html!github:systemjs/plugin-text@0.0.3",
      "framework/components/ui-lang-select.js",
      "framework/components/ui-list.html!github:systemjs/plugin-text@0.0.3",
      "framework/components/ui-list.js",
      "framework/components/ui-markdown.html!github:systemjs/plugin-text@0.0.3",
      "framework/components/ui-markdown.js",
      "framework/components/ui-option.html!github:systemjs/plugin-text@0.0.3",
      "framework/components/ui-option.js",
      "framework/components/ui-ribbon.html!github:systemjs/plugin-text@0.0.3",
      "framework/components/ui-ribbon.js",
      "framework/components/ui-switch.html!github:systemjs/plugin-text@0.0.3",
      "framework/components/ui-switch.js",
      "framework/components/ui-tree-node.html!github:systemjs/plugin-text@0.0.3",
      "framework/components/ui-tree-node.js",
      "framework/components/ui-tree.html!github:systemjs/plugin-text@0.0.3",
      "framework/components/ui-tree.js",
      "framework/containers/ui-button-group.html!github:systemjs/plugin-text@0.0.3",
      "framework/containers/ui-button-group.js",
      "framework/containers/ui-datagrid.html!github:systemjs/plugin-text@0.0.3",
      "framework/containers/ui-datagrid.js",
      "framework/containers/ui-dialog.html!github:systemjs/plugin-text@0.0.3",
      "framework/containers/ui-dialog.js",
      "framework/containers/ui-form.html!github:systemjs/plugin-text@0.0.3",
      "framework/containers/ui-form.js",
      "framework/containers/ui-grid-column.html!github:systemjs/plugin-text@0.0.3",
      "framework/containers/ui-grid-column.js",
      "framework/containers/ui-grid-row.html!github:systemjs/plugin-text@0.0.3",
      "framework/containers/ui-grid-row.js",
      "framework/containers/ui-login.html!github:systemjs/plugin-text@0.0.3",
      "framework/containers/ui-login.js",
      "framework/containers/ui-menu.html!github:systemjs/plugin-text@0.0.3",
      "framework/containers/ui-menu.js",
      "framework/containers/ui-option-group.html!github:systemjs/plugin-text@0.0.3",
      "framework/containers/ui-option-group.js",
      "framework/containers/ui-panel.html!github:systemjs/plugin-text@0.0.3",
      "framework/containers/ui-panel.js",
      "framework/containers/ui-scroll.js",
      "framework/containers/ui-tab-panel.html!github:systemjs/plugin-text@0.0.3",
      "framework/containers/ui-tab.html!github:systemjs/plugin-text@0.0.3",
      "framework/containers/ui-tab.js",
      "framework/core/ui-app.html!github:systemjs/plugin-text@0.0.3",
      "framework/core/ui-app.js",
      "framework/core/ui-content.html!github:systemjs/plugin-text@0.0.3",
      "framework/core/ui-content.js",
      "framework/core/ui-header.html!github:systemjs/plugin-text@0.0.3",
      "framework/core/ui-header.js",
      "framework/core/ui-page.html!github:systemjs/plugin-text@0.0.3",
      "framework/core/ui-page.js",
      "framework/core/ui-section.html!github:systemjs/plugin-text@0.0.3",
      "framework/core/ui-section.js",
      "framework/core/ui-sidebar.html!github:systemjs/plugin-text@0.0.3",
      "framework/core/ui-sidebar.js",
      "framework/core/ui-statsbar.html!github:systemjs/plugin-text@0.0.3",
      "framework/core/ui-statsbar.js",
      "framework/core/ui-toolbar.html!github:systemjs/plugin-text@0.0.3",
      "framework/core/ui-toolbar.js",
      "framework/index.js",
      "framework/libs/chosen.js",
      "framework/libs/countries.js",
      "framework/libs/currencies.js",
      "framework/libs/datepicker.js",
      "framework/libs/marked.js",
      "framework/libs/notify.js",
      "framework/libs/phonelib.js",
      "framework/utils/ui-app-state.js",
      "framework/utils/ui-converters.js",
      "framework/utils/ui-dialog-service.js",
      "framework/utils/ui-dwr-service.js",
      "framework/utils/ui-event.js",
      "framework/utils/ui-http-service.js",
      "framework/utils/ui-model.js",
      "framework/utils/ui-tree-models.js",
      "framework/utils/ui-utils.js",
      "framework/utils/ui-validations.js",
      "main.js",
      "src/app.html!github:systemjs/plugin-text@0.0.3",
      "src/app.js",
      "src/home/buttons.html!github:systemjs/plugin-text@0.0.3",
      "src/home/buttons.js",
      "src/home/datagrid.html!github:systemjs/plugin-text@0.0.3",
      "src/home/datagrid.js",
      "src/home/dialogs.html!github:systemjs/plugin-text@0.0.3",
      "src/home/dialogs.js",
      "src/home/form.html!github:systemjs/plugin-text@0.0.3",
      "src/home/form.js",
      "src/home/grid.html!github:systemjs/plugin-text@0.0.3",
      "src/home/grid.js",
      "src/home/guide.html!github:systemjs/plugin-text@0.0.3",
      "src/home/guide.js",
      "src/home/my-dialog.html!github:systemjs/plugin-text@0.0.3",
      "src/home/my-dialog.js",
      "src/home/page.html!github:systemjs/plugin-text@0.0.3",
      "src/home/page.js",
      "src/home/panels.html!github:systemjs/plugin-text@0.0.3",
      "src/home/panels.js",
      "src/home/styles.html!github:systemjs/plugin-text@0.0.3",
      "src/home/styles.js",
      "src/home/tabs.html!github:systemjs/plugin-text@0.0.3",
      "src/home/tabs.js",
      "src/home/tree.html!github:systemjs/plugin-text@0.0.3",
      "src/home/tree.js",
      "src/home/view.html!github:systemjs/plugin-text@0.0.3",
      "src/home/view.js",
      "src/home/welcome.html!github:systemjs/plugin-text@0.0.3",
      "src/home/welcome.js",
      "src/login/view.html!github:systemjs/plugin-text@0.0.3",
      "src/login/view.js"
    ]
  },

  map: {
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0-beta.1",
    "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1",
    "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0-beta.1.0.1",
    "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.0.3",
    "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
    "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
    "aurelia-router": "npm:aurelia-router@1.0.0-beta.1",
    "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.1",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.0.2",
    "aurelia-validation": "npm:aurelia-validation@0.6.0",
    "core-js": "npm:core-js@1.2.6",
    "fetch": "github:github/fetch@0.10.1",
    "jquery": "github:components/jquery@2.1.4",
    "lodash": "npm:lodash@3.10.1",
    "moment": "npm:moment@2.10.6",
    "numeral": "npm:numeral@1.5.3",
    "text": "github:systemjs/plugin-text@0.0.3",
    "typescript": "npm:typescript@1.7.3",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-binding@1.0.0-beta.1.0.2": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.0.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-bootstrapper@1.0.0-beta.1": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1",
      "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.0.3",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.1.0.1",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.0.1",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.1",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.1",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.0.1",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.0.2",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.0.2",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-dependency-injection@1.0.0-beta.1": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-event-aggregator@1.0.0-beta.1": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1"
    },
    "npm:aurelia-fetch-client@1.0.0-beta.1.0.1": {
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-framework@1.0.0-beta.1.0.3": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.0.2",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.0.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-history-browser@1.0.0-beta.1.0.1": {
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-loader-default@1.0.0-beta.1.0.1": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1"
    },
    "npm:aurelia-loader@1.0.0-beta.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1"
    },
    "npm:aurelia-logging-console@1.0.0-beta.1": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1"
    },
    "npm:aurelia-metadata@1.0.0-beta.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-pal-browser@1.0.0-beta.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1"
    },
    "npm:aurelia-route-recognizer@1.0.0-beta.1": {
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-router@1.0.0-beta.1": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0-beta.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-task-queue@1.0.0-beta.1.0.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1"
    },
    "npm:aurelia-templating-binding@1.0.0-beta.1.0.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.0.2",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.1"
    },
    "npm:aurelia-templating-resources@1.0.0-beta.1.0.2": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.0.2",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.0.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-templating-router@1.0.0-beta.1.0.2": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.1"
    },
    "npm:aurelia-templating@1.0.0-beta.1.0.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.0.2",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.0.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-validation@0.6.0": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.0.2",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.1"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:lodash@3.10.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:moment@2.10.6": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:numeral@1.5.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
