var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "../../framework/index", "./my-dialog"], function (require, exports, aurelia_framework_1, index_1, my_dialog_1) {
    "use strict";
    var Home = (function () {
        function Home(appState, dialogService, httpClient) {
            this.appState = appState;
            this.dialogService = dialogService;
            this.httpClient = httpClient;
            this.optVal = 2;
            this.enabled = true;
            this.months = [
                { id: 0, name: 'January' },
                { id: 1, name: 'February' },
                { id: 2, name: 'March' },
                { id: 3, name: 'April' },
                { id: 4, name: 'May' },
                { id: 5, name: 'June' },
                { id: 6, name: 'July' },
                { id: 7, name: 'August' },
                { id: 8, name: 'September' },
                { id: 9, name: 'October' },
                { id: 10, name: 'November' },
                { id: 11, name: 'December' }
            ];
            this.countries = index_1._.groupBy(window.countries, 'continent');
            this.countryList = index_1._.clone(window.countries);
            this.myCountries = 'UAE,QAT';
            this.model = {
                email: '', lat: null, long: null, ctry: 'AE'
            };
            this.reorderList = [
                'Alfa Romeo', 'Ferrari', 'Maseratti', 'Lamborghini', 'Lancia', 'Fiat', 'Aprilia', 'Vespa', 'Piaggio'
            ];
            this.permissions = [
                { id: 5, name: 'Admin' },
                { id: 1, name: 'Change Password' },
                { id: 2, name: 'Update Profile' },
                { id: 3, name: 'Add User' },
                { id: 4, name: 'Delete User' }
            ];
            this.permitted = '';
            this.supplies = [
                { id: 3, name: 'Stationary' },
                { id: 1, name: 'Printer Toner' },
                { id: 2, name: 'Printer Paper' }
            ];
            this.supplied = '';
            this.treeSelected = 'UAE';
            this.treeOpts = new index_1.UITreeOptions({
                showCheckbox: true,
                selectionLevel: 0
            });
            this.treeOpts2 = new index_1.UITreeOptions({
                showCheckbox: false,
                selectionLevel: 1
            });
            this.lang = 'en';
            this.langs = ['en', 'es', 'fr', 'de'];
            this.content = {
                en: 'Do you speak english?',
                es: 'Hablas español?',
                fr: 'Parlez-vous français?',
                de: 'Sprechen sie deutsch?'
            };
            this.dgMenu = [
                { id: 'view', text: "View Details", icon: 'fi-ui-preview-light' },
                { id: 'edit', text: "Edit", icon: 'fi-ui-edit-light' },
                { id: 'delete', text: "Delete", icon: 'fi-ui-delete-white' },
                '-',
                { id: 'export', text: "Export Details", icon: 'fi-vaadin-download-symbol' }
            ];
            this.data = [
                {
                    id: 1,
                    FName: 'Leroy',
                    LName: 'Gibbs',
                    Gender: 'MALE',
                    SDate: '1951-09-02',
                    Amount: Math.random() * 100000,
                    Count: Math.random() * 10000000,
                    Currency: 'USD'
                }, {
                    id: 2,
                    FName: 'Tony',
                    LName: 'DiNozzo',
                    Gender: 'MALE',
                    SDate: '1968-07-08',
                    Amount: Math.random() * 100000,
                    Count: Math.random() * 10000000,
                    Currency: 'USD'
                }, {
                    id: 3,
                    FName: 'Tim',
                    LName: 'McGee',
                    Gender: 'MALE',
                    SDate: '1977-11-15',
                    Amount: Math.random() * 100000,
                    Count: Math.random() * 10000000,
                    Currency: 'USD'
                }, {
                    id: 4,
                    FName: 'Eleanor',
                    LName: 'Bishop',
                    Gender: 'FEMALE',
                    SDate: '1984-04-26',
                    Amount: Math.random() * 100000,
                    Count: Math.random() * 10000000,
                    Currency: 'USD'
                }, {
                    id: 5,
                    FName: 'Abigail',
                    LName: 'Scuitto',
                    Gender: 'FEMALE',
                    SDate: '1969-03-27',
                    Amount: Math.random() * 100000,
                    Count: Math.random() * 10000000,
                    Currency: 'USD'
                }, {
                    id: 6,
                    FName: 'Donald',
                    LName: 'Mallard',
                    SDate: '1933-09-19',
                    Gender: 'MALE',
                    Amount: Math.random() * 100000,
                    Count: Math.random() * 10000000,
                    Currency: 'USD'
                }, {
                    id: 7,
                    FName: 'Jimmy',
                    LName: 'Palmer',
                    Gender: 'MALE',
                    SDate: '1977-11-14',
                    Amount: Math.random() * 100000,
                    Count: Math.random() * 10000000,
                    Currency: 'USD'
                }, {
                    id: 8,
                    FName: 'Leon',
                    LName: 'Vance',
                    Gender: 'MALE',
                    SDate: '1963-07-08',
                    Amount: Math.random() * 100000,
                    Count: Math.random() * 10000000,
                    Currency: 'USD'
                }, {
                    id: 9,
                    FName: 'Ziva',
                    LName: 'David',
                    Gender: 'FEMALE',
                    SDate: '1979-11-12',
                    Amount: Math.random() * 100000,
                    Count: Math.random() * 10000000,
                    Currency: 'USD'
                }, {
                    id: 10,
                    FName: 'Jenny',
                    LName: 'Shepard',
                    Gender: 'FEMALE',
                    SDate: '1963-10-28',
                    Amount: Math.random() * 100000,
                    Count: Math.random() * 10000000,
                    Currency: 'USD'
                }, {
                    id: 11,
                    FName: 'Caitlin',
                    LName: 'Todd',
                    Gender: 'FEMALE',
                    SDate: '1973-05-17',
                    Amount: Math.random() * 100000,
                    Count: Math.random() * 10000000,
                    Currency: 'USD'
                }];
            this.autoCompWords = 'Alfa Romeo, Audi, Accura, Aston Martin, Bentley, Porsche, BMW, Bugatti, Chevrolet, Cadillac, Citrëon, Daimler, Opel, Ford, Toyota, Honda, Mitsubushi, Kia, Hyundai, Renault, Ferrari, Masseratti, Lamborghini, FIAT, Lancia, SEAT, Daihatsu, MINI, Rolls Royce, Nissan';
            var ct = [];
            index_1._.forEach(index_1._.groupBy(window.countries, 'continent'), function (v, k) {
                var c = {
                    id: index_1._.camelCase(k),
                    name: k,
                    expanded: k == 'Asia',
                    children: []
                };
                index_1._.forEach(v, function (o) {
                    c.children.push({
                        id: o.iso3,
                        name: o.name,
                        leaf: true,
                        checked: (o.iso3 == 'UAE' || o.iso3 == 'IND'),
                        iconGlyph: "ui-flag " + o.iso3
                    });
                });
                ct.push(c);
            });
            this.treeModel = ct;
        }
        Home.prototype.getDisplay = function () {
            return JSON.stringify(this.model, null, 4);
        };
        Home.prototype.addRecord = function () {
            this.data.push({
                id: 11,
                FName: 'New',
                LName: 'Record',
                Gender: '',
                SDate: '',
                Amount: Math.random() * 100000,
                Count: Math.random() * 10000000,
                Currency: 'USD'
            });
            console.log('add', this.data);
        };
        Home.prototype.canActivate = function (model) {
            var _this = this;
            return this.httpClient
                .text('./markdown/example.md')
                .then(function (resp) { return _this.md = resp; });
        };
        Home.prototype.onSubmit = function () {
        };
        Home.prototype.attached = function () {
            var _this = this;
            this.checked = this.__tree.getChecked();
            setTimeout(function () { return _this.__content.scrollTop = 0; }, 20);
        };
        Home.prototype.formatName = function ($event) {
            return $event.model.FName + " <strong>" + $event.model.LName + "</strong>";
        };
        Home.prototype.change = function ($event) {
            console.log($event.target, $event.detail);
        };
        Home.prototype.changeTheme = function ($event) {
            var theme = $event.detail.label.toLowerCase();
            this.__bgToggle.className = "ui-button-group ui-button-group-" + theme;
        };
        Home.prototype.showDialog = function (modal) {
            this.dialogService.show(my_dialog_1.MyDialog, { modal: modal });
        };
        Home.prototype.linkClicked = function ($event) {
            this.appState.toast({
                message: $event.detail.dataId + ':' + $event.detail.model.LName
            });
        };
        Home.prototype.checkAge = function ($event) {
            if (index_1.moment()
                .diff($event.model.SDate, 'years', true) > 50) {
                return { theme: 'warning' };
            }
            if (index_1.moment()
                .diff($event.model.SDate, 'years', true) < 40) {
                return 'No Preview';
            }
            return { theme: 'info' };
        };
        Home.prototype.toastMe = function (pos, theme) {
            if (pos == 'page') {
                this.__page.toast({
                    icon: 'fi-vaadin-bell',
                    autoHide: false,
                    theme: 'danger',
                    message: 'Toasted message for the page'
                });
            }
            else {
                this.appState.toast({ theme: theme, icon: 'fi-vaadin-bell', message: 'Toasted message' });
            }
        };
        Home.prototype.rowSelect = function ($event) {
            this.appState.toast({
                message: $event.detail.id + " :: " + $event.detail.FName + " " + $event.detail.LName
            });
        };
        Home.prototype.showAlert = function () {
            this.appState.alert('Hello World');
        };
        Home.prototype.showConfirm = function () {
            var _this = this;
            this.appState.confirm('Hello World?')
                .then(function () { return _this.appState.toast({ theme: 'success', icon: 'fi-vaadin-bell', message: 'You clicked OK' }); })
                .catch(function () { return _this.appState.toast({ theme: 'danger', icon: 'fi-vaadin-bell', message: 'You clicked Cancel' }); });
        };
        Home.prototype.__menuclicked = function ($event) {
            this.appState.toast({ icon: 'fi-vaadin-bell', message: 'Menu clicked::' + $event.detail });
        };
        Home = __decorate([
            aurelia_framework_1.autoinject(), 
            __metadata('design:paramtypes', [index_1.UIApplication, index_1.UIDialogService, index_1.UIHttpService])
        ], Home);
        return Home;
    }());
    exports.Home = Home;
});
