/**
 *    UI Component: Switch
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {UIEvent} from "aurelia-ui-framework";
import {autoinject, customElement, bindable, bindingMode, useShadowDOM} from "aurelia-framework";

@autoinject()
@useShadowDOM()
@customElement('ui-switch')
export class UISwitch {
	private __id = `auf-${seed++}`;
	private __input:Element;
	private __switch:Element;
	private __label:Element;
	private __theme:string;

	/**
	 * @property    label-on
	 * @type        string
	 */
	@bindable() labelOn:string   = 'On';
	/**
	 * @property    label-off
	 * @type        string
	 */
	@bindable() labelOff:string  = 'Off';
	/**
	 * @property    disabled
	 * @type        boolean
	 */
	@bindable() disabled:boolean = false;
	/**
	 * @property    width
	 * @type        number
	 */
	@bindable() width:any        = 56;
	/**
	 * @property    checked
	 * @type        boolean
	 */
	@bindable({defaultBindingMode: bindingMode.twoWay})
	private checked:boolean      = false;

	constructor(public element:Element) {

	}

	bind() {
		// check theme attributes
		if (this.element.hasAttribute('primary'))   this.__theme = 'primary';
		if (this.element.hasAttribute('info'))      this.__theme = 'info';
		if (this.element.hasAttribute('danger'))    this.__theme = 'danger';
		if (this.element.hasAttribute('success'))   this.__theme = 'success';
		if (this.element.hasAttribute('warning'))   this.__theme = 'warning';
		if (this.element.hasAttribute('ampm'))      this.__theme = 'ampm';
		if (this.element.hasAttribute('gender'))    this.__theme = 'gender';

		this.checked  = isTrue(this.checked);
		this.disabled = isTrue(this.disabled);
		this.width    = isNaN(this.width) ? 56 : parseInt(this.width);
	}

	attached() {
		this.__switch.classList.add(`ui-switch-${this.__theme}`);
		this.disable();
	}

	disable(disabled?) {
		if (this.__input.attributes.getNamedItem('disabled') !== null) {
			this.__input.attributes.removeNamedItem('disabled');
		}
		if (this.__label.attributes.getNamedItem('disabled') !== null) {
			this.__label.attributes.removeNamedItem('disabled');
		}
		if (disabled === true || this.disabled === true) {
			this.__input.attributes.setNamedItem(document.createAttribute('disabled'));
			this.__label.attributes.setNamedItem(document.createAttribute('disabled'));
		}
	}

	disabledChanged(newValue) {
		this.disabled = isTrue(newValue);
		this.disable();
	}

	valueChanged($event) {
		$event.detail = this.checked;
	}

	onFocus() {
		this.__switch.classList.add('ui-focus');
	}

	onBlur() {
		this.__switch.classList.remove('ui-focus');
	}
}