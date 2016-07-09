import {autoinject} from "aurelia-framework";
import {UIModel, validatemap, validatephone} from "../../framework/index";
import {required, email, length, ValidationRules, numericality} from "aurelia-validatejs";
import {ValidationController} from "aurelia-validation";

@autoinject
export class ValidationTester {

  model;
  errors;
  countries = _.groupBy(window.countries, 'continent');

  constructor(public controller: ValidationController) {
    this.model = new Hotel();
  }

  onSubmit() {
    this.errors = this.controller.validate();
  }

  languageModel = null;
  changeLanguage($event) {
    if ($event.detail) this.languageModel = this.model.languages.get($event.detail);
    else this.languageModel = null;
  }

  addLanguage($event) {
    this.model.languages.set($event.detail, new HotelLanguage());
  }

  removeLanguage($event) {
    this.model.languages.delete($event.detail);
  }
}

export class Hotel extends UIModel {
  @required
  name: string = '';
  @required
  @validatephone
  phone: string = '';
  @required
  @numericality({ onlyInteger: false, lessThanOrEqualTo: 90, greaterThanOrEqualTo: -90 })
  latitude: number = 0;
  @required
  @numericality({ onlyInteger: false, lessThanOrEqualTo: 180, greaterThanOrEqualTo: -180 })
  longitude: number = 0;
  @required
  country: string = 'AE';

  @validatemap
  languages: Map<string, HotelLanguage>;

  constructor() {
    super();
    this.languages = new Map<string, HotelLanguage>();

    this.languages.set('EN', new HotelLanguage());
    this.languages.set('ES', new HotelLanguage());
  }
}

export class HotelLanguage extends UIModel {
  // @required
  // title: string = '';
  @required
  description: string = '';
  // @required
  // address: string = '';
  // @required
  // city: string = '';
  // @required
  // country: string = '';
}
