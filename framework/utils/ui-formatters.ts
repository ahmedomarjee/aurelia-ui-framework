/**
 *    UI Utils      Formatters
 *    @author       Adarsh Pastakia
 *    @company      HMC
 *    @copyright    2015-2016, Adarsh Pastakia
 **/
import {_, moment, numeral} from "./ui-utils";

export module UIFormat {
	export function toHTML(md) {
		return marked(md);
	}

	export function mdHilight(md) {
		return marked(md || '', {
			highlight: function(code) {
				return hljs.highlightAuto(code).value;
			}
		});
	}

	// Dates
	export function date(dt: any, ft: string = 'DD MMM YYYY hh:mm A') {
		let x;
		return dt === null || !(x = moment(dt)).isValid() ? null : x.format(ft);
	}

	export function dateToISO(dt) {
		let x;
		return dt === null || !(x = moment(dt)).isValid() ? null : x.toISOString();
	}

	export function fromNow(dt: any): string {
		let x;
		return dt === null || !(x = moment(dt)).isValid() ? '' : x.fromNow(false);
	}

	// Numbers
	export function number(nm: any, fm: string = '0,0[.]00'): string {
		return nm === null || isNaN(nm) ? '' :
			numeral(nm)
				.format(fm)
				.replace(/[^\d\.]+/g, (txt) => {
					return `<small>${txt.toUpperCase()}</small>`;
				});
	}

	export function currency(nm: any, sy: string = '$', fm: string = '$ 0,0[.]00'): string {
		return nm === null || isNaN(nm) ? '' :
			numeral(nm)
				.format(fm)
				.replace('$', sy)
				.replace(/[^\d\.]+/g, (txt) => {
					return `<small>${txt.toUpperCase()}</small>`;
				});
	}

	export function percent(nm: any): string {
		return nm === null || isNaN(nm) ? '' :
			numeral(nm > 1 ? nm / 100 : nm)
				.format('0.00 %');
	}

	export function exRate(nm: any): string {
		return nm === null || isNaN(nm) ? '' :
			numeral(nm > 0 ? 1 / nm : nm)
				.format('0.0000[a]');
	}
}
