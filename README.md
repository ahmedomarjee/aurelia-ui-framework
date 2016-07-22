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

-	Download the [skeleton project](https://github.com/adarshpastakia/aurelia-ui-framework/archive/skeleton.zip).
-	Run `init.sh` on Mac/Linux or `init.bat` on windows.
-	Incase you dont want to change the default styles, pre-compiled stylesheets are included in the skeleton project.
-	NOTE: This framework requires [Compass-SASS library](http://compass-style.org/install/) to be installed to build sass files.


### Sections

-	[Core](framework/core)
-	[Inputs](framework/inputs)
-	[Components](framework/components)
-	[Utils](framework/utils)

#### Usage `main.js`

```typescript
function configure(aurelia) {
    aurelia.use
       .standardConfiguration()
       .developmentLogging()
       .plugin('aurelia-validation')
       .plugin('aurelia-validatejs')
       .plugin('aurelia-ui-framework', function (config) {
           // AppKey for local/session storage key prefix
           config.App.Key = 'App';
           // Application Title
           config.App.Title = 'Aurelia UI Framework';
           // Application Version
           config.App.Version = '1.00';

           // HTTPClient Base API URL
           config.Http.BaseUrl = './';
           // HTTPClient Extra Headers
           config.Http.Headers = {
               'X-API-VERSION': '1'
           };
           // HTTPClient Send Basic Authorization Header
           config.Http.AuthorizationHeader = false;

           // Enable AmCharts
           config.UseCharts = true;
       });
```

---

### Changes

> For using aurelia-validation and aurelia-validatejs
>
> Read about the new [Aurelia Validation Alpha](http://blog.durandal.io/2016/06/14/new-validation-alpha-is-here/)

* Data model

```typescript
export class MyModel extends UIModel {
  @required
  name: string = '';
  @required
  @numericality({ onlyInteger: false, lessThanOrEqualTo: 90, greaterThanOrEqualTo: -90 })
  latitude: number = 0;
  @required
  @numericality({ onlyInteger: false, lessThanOrEqualTo: 180, greaterThanOrEqualTo: -180 })
  longitude: number = 0;
}
```

* Form Page

```html
<ui-form submit.trigger="onSubmit()">
    <ui-row>
        <ui-column padded>
            <ui-input value.bind="model.name & validate" required clear>Name</ui-input>
        </ui-column>
        <ui-column padded>
            <ui-input-dual required decimal prefix-icon="fi-vaadin-placeholder" prefix-text="Lat." center-text="Long." value.bind="model.latitude & validate" value-second.bind="model.longitude & validate" placeholder="-90 to 90" placeholder-second="-180 to 180">Location</ui-input-dual>
        </ui-column>
    </ui-row>
</ui-form>
```

All properties must use the `validate` binding behavior

* Form ViewModel

```typescript
export class MyFormView {
  constructor(public controller: ValidationController) {
    this.model = new MyModel();
  }
  onSubmit() {
    let errors = this.controller.validate();
    if(errors.length>0) // form has errors
    else // form is valid
  }
}
```

---

#### Core Components

-	Viewport - main app viewport
-	Page - (has page title, to be used as route viewport)
-	Section - row/column layout
-	Content - auto/fill
-	Sidebar - can collapse
-	Header
-	Toolbar
-	Statsbar
-	Grid

#### Inputs

-	BaseInput (Private) - Generic input class to handle common functionality between all input controls
-	Input - Single line input control
	-	Text
	-	Number
	-	Email
	-	Url
-	Date
-	Combo
-	List
-	Tags
-	Textarea
-	Option (Private) - Generic option control
	-	Checkbox
	-	Radio
-	Switch
-	Button
-	Markdown
-	Language
-	MultiSelect

#### Components

-	Form
-	Tree
-	Ribbon
-	Pager
-	Menu
-	Login
-	Dialog
-	Panel
-	Tabs
-	Datagrid

#### Utils

-	UIApplication
-	UIConverters - Global value converters
-	UIFormatters - Module containing common formatting methods
-	UIHttpService - HttpService extending Aurelie-Fetch
-	UIValidation - Aurelia validation strategy
-	UIEvent
-	UIUtils
-	UIModel
-	UITreeModel

### Dependencies

-	`Marked`, `Moment`, `Numeral`, `LoDash`

### Changes

-	Removed external UI dependencies.
-	Removed dependency on jQuery, instead using pure javascript DOM manipulation
