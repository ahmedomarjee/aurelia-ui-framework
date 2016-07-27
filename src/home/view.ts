import {autoinject} from "aurelia-framework";
import {_, moment, UIApplication, UITreeOptions, UIDialogService, UIHttpService, UIUtils} from "aurelia-ui-framework";
import {MyDialog} from "./my-dialog";

@autoinject()
export class Home {
	optVal = 2;
	enabled = true;
	months = [
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
	countries = _.groupBy(window.countries, 'continent');
	countryList = _.clone(window.countries);
	myCountries = 'UAE,QAT';
	model = {
		email: '', lat: null, long: null, ctry: 'AE'
	};

	getDisplay() {
		return JSON.stringify(this.model, null, 4);
	}

	reorderList = [
		'Alfa Romeo', 'Ferrari', 'Maseratti', 'Lamborghini', 'Lancia', 'Fiat', 'Aprilia', 'Vespa', 'Piaggio'
	]

	permissions = [
		{ id: 5, name: 'Admin' },
		{ id: 1, name: 'Change Password' },
		{ id: 2, name: 'Update Profile' },
		{ id: 3, name: 'Add User' },
		{ id: 4, name: 'Delete User' }
	];
	permitted = '';

	supplies = [
		{ id: 3, name: 'Stationary' },
		{ id: 1, name: 'Printer Toner' },
		{ id: 2, name: 'Printer Paper' }
	];
	supplied = '';

	__page;
	__content;
	__bgToggle;

	md;

	__tree;
	checked;
	treeModel;
	treeSelected = 'UAE';
	treeOpts = new UITreeOptions({
		showCheckbox: true,
		selectionLevel: 0
	});
	treeOpts2 = new UITreeOptions({
		showCheckbox: false,
		selectionLevel: 1
	});

	lang = 'en';
	langs = ['en', 'es', 'fr', 'de']
	content = {
		en: 'Do you speak english?',
		es: 'Hablas español?',
		fr: 'Parlez-vous français?',
		de: 'Sprechen sie deutsch?'
	}

	dgMenu = [
		{ id: 'view', text: "View Details", icon: 'fi-ui-preview-light' },
		{ id: 'edit', text: "Edit", icon: 'fi-ui-edit-light' },
		{ id: 'delete', text: "Delete", icon: 'fi-ui-delete-white' },
		'-',
		{ id: 'export', text: "Export Details", icon: 'fi-vaadin-download-symbol' }
	]
	data = [
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

	addRecord() {
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
	}

	constructor(public appState: UIApplication,
		public dialogService: UIDialogService, public httpClient: UIHttpService) {


		var ct = [];
		_.forEach(_.groupBy(window.countries, 'continent'), (v: any, k: string) => {
			let c = {
				id: _.camelCase(k),
				name: k,
				expanded: k == 'Asia',
				children: []
			}
			_.forEach(v, (o: any) => {
				c.children.push({
					id: o.iso3,
					name: o.name,
					leaf: true,
					checked: (o.iso3 == 'UAE' || o.iso3 == 'IND'),
					iconGlyph: `ui-flag ${o.iso3}`
				})
			});
			ct.push(c);
		});
		this.treeModel = ct;

	}

	canActivate(model) {
		return this.httpClient
			.text('./src/home/example.md')
			.then(resp => this.md = resp);
	}

	onSubmit() {
	}

	autoCompWords = 'Alfa Romeo, Audi, Accura, Aston Martin, Bentley, Porsche, BMW, Bugatti, Chevrolet, Cadillac, Citrëon, Daimler, Opel, Ford, Toyota, Honda, Mitsubushi, Kia, Hyundai, Renault, Ferrari, Masseratti, Lamborghini, FIAT, Lancia, SEAT, Daihatsu, MINI, Rolls Royce, Nissan';

	attached() {
		this.checked = this.__tree.getChecked();
		setTimeout(() => this.__content.scrollTop = 0, 20);
	}

	formatName($event) {
		return `${$event.model.FName} <strong>${$event.model.LName}</strong>`;
	}

	change($event) {
		console.log($event.target, $event.detail);
	}

	changeTheme($event) {
		let theme = $event.detail.label.toLowerCase();
		this.__bgToggle.className = `ui-button-group ui-button-group-${theme}`;
	}

	showDialog(modal) {
		this.dialogService.show(MyDialog, { modal: modal });
	}

	linkClicked($event) {
		this.appState.toast({
			message: $event.detail.dataId + ':' + $event.detail.model.LName
		});
	}

	checkAge($event): any {
		if (moment()
			.diff($event.model.SDate, 'years', true) > 50) {
			return { theme: 'warning' };
		}
		if (moment()
			.diff($event.model.SDate, 'years', true) < 40) {
			return 'No Preview';
		}
		return { theme: 'info' };
	}

	toastMe(pos, theme) {
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
	}

	rowSelect($event) {
		this.appState.toast({
			message: `${$event.detail.id} :: ${$event.detail.FName} ${$event.detail.LName}`
		});
	}

	showAlert() {
		this.appState.alert('Hello World');
	}

	showConfirm() {
		this.appState.confirm('Hello World?')
			.then(() => this.appState.toast({ theme: 'success', icon: 'fi-vaadin-bell', message: 'You clicked OK' }))
			.catch(() => this.appState.toast({ theme: 'danger', icon: 'fi-vaadin-bell', message: 'You clicked Cancel' }));
	}

	__menuclicked($event) {
		this.appState.toast({ icon: 'fi-vaadin-bell', message: 'Menu clicked::' + $event.detail });
	}
}
