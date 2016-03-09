/**
 *    UI Input      Singleline Input
 *    @author       Adarsh Pastakia
 *    @company      HMC
 *    @copyright    2015-2016, Adarsh Pastakia
 **/
import {autoinject, customElement, bindable, bindingMode} from "aurelia-framework";
import {UIEvent} from "aurelia-ui-framework";
import {UIInputGroup} from "./ui-input-group";

@customElement('ui-input')
export class UIInput extends UIInputGroup {
	/**
	 * @property    value
	 * @type        string
	 */
	@bindable({defaultBindingMode: bindingMode.twoWay})
	value:string                 = '';
	/**
	 * @property    checked
	 * @type        boolean
	 */
	@bindable({defaultBindingMode: bindingMode.twoWay})
	checked:boolean              = false;
	/**
	 * @property    disabled
	 * @type        boolean
	 */
	@bindable() disabled:boolean = false;
	/**
	 * @property    readonly
	 * @type        boolean
	 */
	@bindable() readonly:boolean = false;

	/**
	 * @property    prefix-icon
	 * @type        string
	 */
	@bindable() prefixIcon:string;
	/**
	 * @property    prefix-text
	 * @type        string
	 */
	@bindable() prefixText:string;

	/**
	 * @property    suffix-icon
	 * @type        string
	 */
	@bindable() suffixIcon:string;
	/**
	 * @property    suffix-text
	 * @type        string
	 */
	@bindable() suffixText:string;

	/**
	 * @property    button-icon
	 * @type        string
	 */
	@bindable() buttonIcon:string;
	/**
	 * @property    button-text
	 * @type        string
	 */
	@bindable() buttonText:string;

	/**
	 * @property    help-text
	 * @type        string
	 */
	@bindable() helpText:string;

	/**
	 * @property    placeholder
	 * @type        string
	 */
	@bindable() placeholder:string = '';

	bind() {
		super.bind();

		if (this.element.hasAttribute('number')) {
			//this.__type   = 'number';
			this.__format = 'number';
		}
		else if (this.element.hasAttribute('decimal')) {
			//this.__type   = 'number';
			this.__format = 'decimal';
		}
		else if (this.element.hasAttribute('capitalize')) {
			this.__format = 'title';
		}
		else if (this.element.hasAttribute('email')) {
			this.__type   = 'email';
			this.__format = 'email';
		}
		else if (this.element.hasAttribute('url')) {
			this.__type   = 'url';
			this.__format = 'url';
		}
		else if (this.element.hasAttribute('password')) {
			this.__type = 'password';
		}
		else if (this.element.hasAttribute('search')) {
			this.__type = 'search';
		}
	}

	protected format(evt) {
		let val   = isEmpty(evt.target.value) ? '' : evt.target.value;
		let start = evt.target.selectionStart;
		if (this.__format === 'title') {
			val = val.replace(new RegExp(`[${this.ALPHA}'\\-']+(?=[\\.&\\s]*)`, 'g'), (txt) => {
				if (/^[ivxlcm]+$/.test(txt.toLowerCase())) return txt.toUpperCase();
				if (txt.toLowerCase()
					   .indexOf("mc") == 0) {
					return txt.substr(0, 1)
							  .toUpperCase() +
						txt.substr(1, 1)
						   .toLowerCase() +
						txt.substr(2, 1)
						   .toUpperCase() +
						txt.substr(3);
				}
				if (txt.toLowerCase()
					   .indexOf("mac") == 0) {
					return txt.substr(0, 1)
							  .toUpperCase() +
						txt.substr(1, 2)
						   .toLowerCase() +
						txt.substr(3, 1)
						   .toUpperCase() +
						txt.substr(4);
				}
				return txt.charAt(0)
						  .toUpperCase() + txt.substr(1);
			});
		}
		else if (this.__format === 'email' || this.__format === 'url') {
			val = val.toLowerCase();
		}
		this.__value = val;
		setTimeout(()=>evt.target.selectionStart = evt.target.selectionEnd = start, 10);
		return val;
	}
}