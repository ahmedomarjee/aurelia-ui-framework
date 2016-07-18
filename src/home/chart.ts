import {_, moment, UIChart} from "../../framework/index";
export class ChartExample {

	names = ['Bob', 'John', 'David', 'Nick', 'Bruce'];
	barData = []
	barGraphs = [];

	barData2 = [];
	barGraphs2 = [];

	barData3 = [];
	barGraphs3 = [];

	pieData1 = [];
	pieData2 = [];
	pieData3 = [];

	attached() {
		_.forEach(this.names, (nm, i) => {
			this.barGraphs.push(<AmCharts.AmGraph>{
				type: "column",
				balloonText: "[[title]]: <b>[[value]]</b>",
				fillAlphas: 0.8,
				lineAlpha: 0.2,
				valueField: nm,
				gradientOrientation: 'horizontal',
				cornerRadiusTop: 9,
				title: nm
			});
		});
		this.barGraphs.push(<AmCharts.AmGraph>{
			type: "line",
			bullet: 'bubble',
			bulletColor: '#FFFFFF',
			bulletSize: 9,
			bulletBorderAlpha: 1,
			bulletBorderThickness: 2,
			bulletBorderColor: UIChart.CHART_DEFAULT[0],
			balloonText: "[[title]]: <b>[[value]]</b>",
			lineAlpha: 0.8,
			lineColor: UIChart.CHART_DEFAULT[0],
			lineThickness: 2,
			valueField: 'avg',
			title: 'Avg. Sales'
		});
		this.barGraphs2 = [<AmCharts.AmGraph>{
			type: "column",
			columnWidth: .85,
			balloonText: "[[category]]:<br/><b>[[value]]</b>",
			fillAlphas: 0.8,
			lineAlpha: 0.2,
			fillColorsField: 'color',
			valueField: 'amount'
		}];
		this.barGraphs3 = [<AmCharts.AmGraph>{
			type: "column",
			balloonText: "[[category]]:<br/><b>[[value]]</b>",
			columnWidth: .85,
			fillAlphas: 0.8,
			lineAlpha: 0.2,
			fillColorsField: 'color',
			valueField: 'amount'
		}];

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
		for (var dt = 6; dt < 12; dt++) {
			let o = {
				date: moment.monthsShort(dt) + '/2015',
				avg: ((Math.random() * 2) * 2000) + 2000
			}
			for (var nm of this.names) {
				o[nm] = ((Math.random() * 2) * 1000) + 1000;
			}
			data.push(o);
		}
		this.barData = data;
	}

	countries = ['Middle East', 'Australia/Asia', 'North America', 'Latin America', 'Africa', 'Europe']
	buildChart2() {
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
				color: UIChart.CHART_BLUE[i]
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
