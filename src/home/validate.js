var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "../../framework/index", "aurelia-validatejs", "aurelia-validation"], function (require, exports, aurelia_framework_1, index_1, aurelia_validatejs_1, aurelia_validation_1) {
    "use strict";
    var ValidationTester = (function () {
        function ValidationTester(controller) {
            this.controller = controller;
            this.countries = _.groupBy(window.countries, 'continent');
            this.languageModel = null;
            this.model = new Hotel();
        }
        ValidationTester.prototype.onSubmit = function () {
            this.errors = this.controller.validate();
        };
        ValidationTester.prototype.changeLanguage = function ($event) {
            if ($event.detail)
                this.languageModel = this.model.languages.get($event.detail);
            else
                this.languageModel = null;
        };
        ValidationTester.prototype.addLanguage = function ($event) {
            this.model.languages.set($event.detail, new HotelLanguage());
        };
        ValidationTester.prototype.removeLanguage = function ($event) {
            this.model.languages.delete($event.detail);
        };
        ValidationTester = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [aurelia_validation_1.ValidationController])
        ], ValidationTester);
        return ValidationTester;
    }());
    exports.ValidationTester = ValidationTester;
    var Hotel = (function (_super) {
        __extends(Hotel, _super);
        function Hotel() {
            _super.call(this);
            this.name = '';
            this.phone = '';
            this.latitude = 0;
            this.longitude = 0;
            this.country = 'AE';
            this.languages = new Map();
            this.languages.set('en', new HotelLanguage());
            this.languages.set('es', new HotelLanguage());
        }
        __decorate([
            aurelia_validatejs_1.required, 
            __metadata('design:type', String)
        ], Hotel.prototype, "name", void 0);
        __decorate([
            aurelia_validatejs_1.required,
            index_1.validatephone, 
            __metadata('design:type', String)
        ], Hotel.prototype, "phone", void 0);
        __decorate([
            aurelia_validatejs_1.required,
            aurelia_validatejs_1.numericality({ onlyInteger: false, lessThanOrEqualTo: 90, greaterThanOrEqualTo: -90 }), 
            __metadata('design:type', Number)
        ], Hotel.prototype, "latitude", void 0);
        __decorate([
            aurelia_validatejs_1.required,
            aurelia_validatejs_1.numericality({ onlyInteger: false, lessThanOrEqualTo: 180, greaterThanOrEqualTo: -180 }), 
            __metadata('design:type', Number)
        ], Hotel.prototype, "longitude", void 0);
        __decorate([
            aurelia_validatejs_1.required, 
            __metadata('design:type', String)
        ], Hotel.prototype, "country", void 0);
        __decorate([
            index_1.validatemap, 
            __metadata('design:type', Map)
        ], Hotel.prototype, "languages", void 0);
        return Hotel;
    }(index_1.UIModel));
    exports.Hotel = Hotel;
    var HotelLanguage = (function (_super) {
        __extends(HotelLanguage, _super);
        function HotelLanguage() {
            _super.apply(this, arguments);
            this.description = '';
        }
        __decorate([
            aurelia_validatejs_1.required, 
            __metadata('design:type', String)
        ], HotelLanguage.prototype, "description", void 0);
        return HotelLanguage;
    }(index_1.UIModel));
    exports.HotelLanguage = HotelLanguage;
});
