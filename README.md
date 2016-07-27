Aurelia UI Framework for Business Apps
======================================

> A complete UI Framework for building business applications for the Web.
>
> This UI framework has been built on the [Aurelia](http://aurelia.io) JavaScript client framework.

#### [Demo Pages](http://adarshpastakia.github.io/aurelia-ui-framework)

#### [Help Wiki](https://github.com/adarshpastakia/aurelia-ui-framework/wiki/Home)

#### [Changes](#changes)

---

AureliaUIFramework
------------------

### Version 2

> Rethought and Reworked Framework

#### Getting Started

This skeleton is for using AureliaUIFramework with AureliaCli

##### 1. Create an aurelia project using `aurelia-cli`

```
$project_folder> au new --here
```

  Aurelia new app choices
    1. Platform: Web
    2. Transpiler: TypeScript
    3. CSS: None
    4. Unit Testing: any
    5. Editor: any
    6. Create: Yes
    7. Install Dependencies: Yes

##### 2. Install UI Framework and amCharts

```
npm install validate.js aurelia-validation aurelia-validatejs aurelia-ui-framework amcharts moment numeral fabric whatwg-fetch --save
```

##### 3. Modify `aurelia_project/aurelia.json`

Add the following to the  `vendor-bundle` -> `prepend` array
```
"node_modules/fabric/dist/fabric.js",
"node_modules/whatwg-fetch/fetch.js"
```

Add the following to the  `vendor-bundle` -> `dependencies` array
```
"lodash",
"moment",
"numeral",
"aurelia-validatejs",
"aurelia-fetch-client",
{
  "name": "amcharts",
  "path": "../node_modules/amcharts/dist",
  "main": "amcharts",
  "resources": [
    "amcharts/plugins/export/export.css"
  ]
},
{
  "name": "validate.js",
  "path": "../node_modules/validate.js",
  "main": "validate"
},
{
  "name": "aurelia-validation",
  "path": "../node_modules/aurelia-validation/dist/amd",
  "main": "aurelia-validation"
},
{
  "name": "aurelia-ui-framework",
  "path": "../node_modules/aurelia-ui-framework",
  "main": "aurelia-ui-framework"
}
```

Add the next line to `dtsSource` under `transpiler`

```
"./node_modules/aurelia-ui-framework/**/*.d.ts"
```
