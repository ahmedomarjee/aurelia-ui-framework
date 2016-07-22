import {_, moment, UIChart} from "../../framework/index";
export class ChartExample {

	countries = ['Middle East', 'Australia/Asia', 'North America', 'Latin America', 'Africa', 'Europe']
	barData = []
	barGraphs = [];

	barData2 = [];
	barGraphs2 = [];

	barData3 = [];
	barGraphs3 = [];

	pieData1 = [];
	pieData2 = [];
	pieData3 = [];

	currentPeriod1 = 'Last 30 Days';

	__chart = UIChart;

	profitsOptions: UIBarOptions = {
		chartTitle: 'Profits',
		valueAxisUnit: '$',
		categoryField: 'region',
		series: [<AmCharts.AmGraph>{
			title: 'Sales Value',
			valueField: 'amount',
			unitPrefix: '$'
		}]
	}
	salesOptions: UIBarOptions = {
		chartTitle: 'Sales',
		categoryField: 'region',
		series: [<AmCharts.AmGraph>{
			title: 'Sales Qty',
			valueField: 'amount'
		}]
	}

	salesTargets: UIBarOptions = {
		chartTitle: 'Sales vs. Target',
		categoryField: 'date',
		valueAxisUnit: '$',
		series: [{
			title: 'Profit Target',
			clustered: false,
			columnWidth: .85,
			unitPrefix: '$',
			fillColors: UIChart.CHART_BLUE[5],
			valueField: 'amountTarget'
		}, {
				title: 'Profit',
				clustered: false,
				columnWidth: .5,
				unitPrefix: '$',
				fillColors: UIChart.CHART_BLUE[1],
				valueField: 'amountActual'
			}]
	}

	attached() {
		setTimeout(() => {
			this.buildChart1();
			this.buildChart2();
			this.buildChart3();
			this.buildPie1();
			this.buildPie2();
			this.buildPie3();
		}, 500);
	}

	buildChart1() {
		var data = []
		for (var dt = 0; dt < 12; dt++) {
			let o = {
				date: moment.monthsShort(dt) + '/2015',
				amountActual: ((Math.random() * 100) * 2000),
				amountTarget: ((Math.random() * 100) * 2000)
			}
			// for (var nm of this.countries) {
			// 	o[nm] = ((Math.random() * 2) * 1000) + 1000;
			// }
			data.push(o);
		}
		this.barData = data;
	}

	buildChart2($event?: any) {
		if ($event) this.currentPeriod1 = `Last ${$event.detail} Days`;
		let data = [];
		_.forEach(this.countries, (c, i) => {
			data.push({
				region: c,
				amount: ((Math.random() * 5) * 1000) + 2000,
				color: UIChart.CHART_VIOLET[i]
			});
		});
		this.barData2 = data;
	}

	buildChart3() {
		let data = [];
		_.forEach(this.countries, (c, i) => {
			data.push({
				region: c,
				amount: ((Math.random() * 5) * 100) + 100,
				color: UIChart.CHART_SPECTRUM[i]
			});
		});
		this.barData3 = data;
	}


	buildPie1() {
		let data = [];
		_.forEach(this.countries, (c, i) => {
			data.push({
				region: c,
				amount: ((Math.random() * 5) * 100) + 100
			});
		});
		this.pieData1 = data;
	}
	buildPie2() {
		let data = [];
		_.forEach(this.countries, (c, i) => {
			data.push({
				region: c,
				amount: ((Math.random() * 5) * 100) + 100
			});
		});
		this.pieData2 = data;
	}
	buildPie3() {
		let data = [];
		_.forEach(this.countries, (c, i) => {
			data.push({
				region: c,
				amount: ((Math.random() * 5) * 100) + 100,
				color: UIChart.CHART_PINK[i]
			});
		});
		this.pieData3 = data;
	}
}
