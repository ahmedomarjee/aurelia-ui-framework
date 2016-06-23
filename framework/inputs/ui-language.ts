/**
 *    UI Input      Language Selector
 *    @author       Adarsh Pastakia
 *    @company      HMC
 *    @copyright    2015-2016, Adarsh Pastakia
 **/
import {customElement, bindable, bindingMode, autoinject} from "aurelia-framework";
import {UIInputGroup} from "./ui-input-group";
import {_, UIUtils} from "../utils/ui-utils";
import {UIEvent} from "../utils/ui-event";

@autoinject
@customElement('ui-language')
export class UILanguage extends UIInputGroup {
  __list;
  __focus;
  __options;
  __languages;
  __available;


  static LANGUAGES = [
    { id: 'AR', name: 'العربية', rtl: true },
    { id: 'DE', name: 'Deutsche' },
    { id: 'EN', name: 'English' },
    { id: 'ES', name: 'Español' },
    { id: 'FR', name: 'Français' },
    { id: 'HI', name: 'हिंदी' },
    { id: 'ID', name: 'Bahasa Indonesia' },
    { id: 'IT', name: 'Italiano' },
    { id: 'JA', name: '日本' },
    { id: 'KO', name: '한국어' },
    { id: 'MS', name: 'Malay' },
    { id: 'NL', name: 'Nederlands' },
    { id: 'PT', name: 'Português' },
    { id: 'PT-BR', name: 'Português (Brasil)' },
    { id: 'RU', name: 'Русский' },
    { id: 'TH', name: 'ภาษาไทย' },
    { id: 'TL', name: 'Tagalog' },
    { id: 'TW', name: '繁體中文' },
    { id: 'VI', name: 'Tiếng Việt' },
    { id: 'ZH', name: '简体中文' }
  ];

  constructor(element: Element) {
    super(element);
  }

	/**
	 * @property    value
	 * @type        string
	 */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  language: string = '';
	/**
	 * @property    languages
	 * @type        array | map
	 */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  languages: any = [];
	/**
	 * @property    disabled
	 * @type        boolean
	 */
  @bindable()
  disabled: boolean = false;

  attached() {
    super.attached();
    this.languagesChanged(this.languages);
    this.languageChanged(this.language);
  }

  languageChanged(newValue) {
    if (newValue === null) return this.__value = '';
    let l: any = _.find(this.__languages, ['id', newValue]) || null;
    this.__value = l === null ? '' : l.name;
  }

  languagesChanged(newValue) {
    let s = [], a = [];
    let isMap = newValue instanceof Map;
    _.forEach(UILanguage.LANGUAGES, l => {
      if (!isMap && newValue.indexOf(l.id) == -1) a.push(l);
      if (!isMap && newValue.indexOf(l.id) > -1) s.push(l);
      if (isMap && newValue.has(l.id)) s.push(l);
      if (isMap && !newValue.has(l.id)) a.push(l);
    });
    this.__languages = s;
    this.__available = a;
  }

  formatter() {
    return this.value;
  }

  __add(lang) {
    this.__languages.push(_.remove(this.__available, ['id', lang.id])[0]);
    UIEvent.fireEvent('add', this.element, lang.id);
    this.__select(lang);
    this.__focus = false;
  }

  __select(lang) {
    this.language = lang.id;
    UIEvent.fireEvent('select', this.element, lang.id);
    this.__focus = false;
  }

  __remove(lang) {
    this.__available.push(_.remove(this.__languages, ['id', lang.id])[0]);
    if (this.__languages == null) this.__languages = [];
    UIEvent.fireEvent('delete', this.element, lang.id);
    this.__select(this.__languages[0] || { id: '' });
    this.__focus = false;
  }
}
