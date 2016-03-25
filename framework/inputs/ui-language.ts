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
		{id: 'AR', text: 'العربية', rtl: true},
		{id: 'DE', text: 'Deutsche'},
		{id: 'EN', text: 'English'},
		{id: 'ES', text: 'Español'},
		{id: 'FR', text: 'Français'},
		{id: 'HI', text: 'हिंदी'},
		{id: 'IT', text: 'Italiano'},
		{id: 'JA', text: '日本'},
		{id: 'KO', text: '한국어'},
		{id: 'MS', text: 'Malay'},
		{id: 'NL', text: 'Nederlands'},
		{id: 'PT', text: 'Português'},
		{id: 'RU', text: 'Русский'},
		{id: 'TH', text: 'ภาษาไทย'},
		{id: 'TL', text: 'Tagalog'},
		{id: 'TW', text: '漢語'},
		{id: 'VI', text: 'Tiếng Việt'},
		{id: 'ZH', text: '中文'}
	];

	constructor(element:Element) {
		super(element);
	}

	/**
	 * @property    value
	 * @type        string
	 */
	@bindable({defaultBindingMode: bindingMode.twoWay})
	language:string  = '';
	/**
	 * @property    languages
	 * @type        array
	 */
	@bindable({defaultBindingMode: bindingMode.twoWay})
	languages        = [];
	/**
	 * @property    disabled
	 * @type        boolean
	 */
	@bindable()
	disabled:boolean = false;

	attached() {
		super.attached();
		this.languagesChanged(this.languages);
		this.languageChanged(this.language);
	}

	languageChanged(newValue) {
		if (newValue === null) return this.__value = '';
		let l:any    = _.find(this.__languages, ['id', newValue]);
		this.__value = l === null ? '' : l.text;
	}

	languagesChanged(newValue) {
		let s = [], a = [];
		_.forEach(UILanguage.LANGUAGES, l=> {
			if (newValue.indexOf(l.id) == -1)a.push(l);
			if (newValue.indexOf(l.id) > -1)s.push(l);
		});
		this.__languages = s;
		this.__available = a;
	}

	formatter() {
		return this.value;
	}

	__add(lang) {
		this.languages.push(lang);
		this.__languages.push(_.remove(this.__available, ['id', lang.id])[0]);
		this.__select(lang);
		this.__focus = false;
	}

	__select(lang) {
		this.language = lang.id;
		UIEvent.fireEvent('select', this.element, lang);
		this.__focus = false;
	}

	__remove(lang) {
		_.remove(this.languages, ['id', lang.id]);
		this.__available.push(_.remove(this.__languages, ['id', lang.id])[0]);
		this.__select(this.__languages[0] || {id: ''});
		this.__focus = false;
	}
}