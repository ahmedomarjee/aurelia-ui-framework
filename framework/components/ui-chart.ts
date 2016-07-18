/**
 *    UI Component  ChartJS Component
 *    @author       Adarsh Pastakia
 *    @company      HMC
 *    @copyright    2015-2016, Adarsh Pastakia
 **/
import {autoinject, customElement, bindable, useView, bindingMode, inlineView, BindingEngine} from "aurelia-framework";
import {_} from "../utils/ui-utils";
import "amcharts/amcharts3";
import "amcharts/amcharts3/amcharts/pie";
import "amcharts/amcharts3/amcharts/serial";
import "amcharts/amcharts3/amcharts/themes/light";
import "amcharts/amcharts3/amcharts/plugins/export/export";
import "amcharts/amcharts3/amcharts/plugins/export/export.css!";
// import "amcharts/amcharts3/amcharts/plugins/export/libs/blob.js/blob";
// import "amcharts/amcharts3/amcharts/plugins/export/libs/fabric.js/fabric";
// import "amcharts/amcharts3/amcharts/plugins/export/libs/jszip/jszip";
// import "amcharts/amcharts3/amcharts/plugins/export/libs/pdfmake/pdfmake";
// import "amcharts/amcharts3/amcharts/plugins/export/libs/xlsx/xlsx";
import "fabric";

export class UIChart {
	static CHART_RED = ["#7C2722", "#A73A21", "#DA3926", "#DE4834", "#E46A6A", "#EB898C", "#ED969B"];
	static CHART_PINK = ["#80364B", "#AA2D52", "#C8235D", "#DE2265", "#E66395", "#EB7FA5", "#EF96B2"];
	static CHART_BLUE = ["#127BB3", "#2094C6", "#68B7DC", "#7EC1DC", "#B0D9E4", "#B8DEE5", "#DCEBE6"];
	static CHART_GREEN = ["#0A4D44", "#118173", "#179987", "#1CB4A1", "#3BBCAD", "#67C4B8", "#96D5CC"];
	static CHART_ORANGE = ["#6F3610", "#944216", "#BD521B", "#F56B23", "#FC954F", "#FDB27E", "#FBCEA8"];
	static CHART_VIOLET = ["#4E2354", "#602A82", "#732F97", "#86509F", "#9B65A7", "#BA87BD", "#CBA2CA"];
	static CHART_SPECTRUM = ["#850509", "#CB2515", "#E2491A", "#FE7722", "#FE9C27", "#FFCD42", "#FFEE54"];
	static CHART_DEFAULT = ["#D53530", "#EF6B28", "#9D6E4B", "#EDEC47", "#5DAF43", "#38D046", "#279F79", "#5AC5C4", "#338EBD", "#375FA7", "#7C53A2", "#A6216A", "#DF8097"];
	static CHART_PIE = ["#B52F30", "#F68F31", "#8FC649", "#A0C4C8", "#A54797", "#977E6D", "#954D43", "#FBCC2E", "#5C8158", "#5D86A3", "#B10D5F", "#0E6BA8", "#0B6848"];

	static init() {
		let colors = { red: 'CHART_RED', pink: 'CHART_PINK', blue: 'CHART_BLUE', green: 'CHART_GREEN', orange: 'CHART_ORANGE', violet: 'CHART_VIOLET', spectrum: 'CHART_SPECTRUM', default: 'CHART_DEFAULT', pie: 'CHART_PIE' }
		_.forEach(colors, (v, k) => {
			AmCharts['themes'][k] = Object.assign({}, AmCharts['themes'].light, {
				themeName: k,
				AmCoordinateChart: {
					colors: UIChart[v]
				},
				AmStockChart: {
					colors: UIChart[v]
				}
			});
		});
		AmCharts['theme'] = AmCharts['themes'].default;
	}
}

@autoinject()
@customElement('ui-bar')
@useView('./ui-chart.html')
export class UIBar extends UIChart {
	/**
	   * @property    chart-title
	   * @type        string
	   */
	@bindable()
	chartTitle: string = '';
	/**
	   * @property    chart-data
	   * @type        Array
	   */
	@bindable()
	chartData: Array<any> = [];
	/**
	   * @property    chart-data
	   * @type        Array
	   */
	@bindable()
	chartGraphs: Array<any> = [];
	/**
		 * @property    width
		 * @type        number
		 */
	@bindable()
	width: number = 600;
	/**
		 * @property    height
		 * @type        number
		 */
	@bindable()
	height: number = 400;

	/**
		 * @property    x-axis
		 * @type        string
		 */
	@bindable()
	xAxis: string = '';
	/**
	   * @property    y-axis
	   * @type        string
	   */
	@bindable()
	yAxis: string = '';
	/**
	   * @property    series
	   * @type        string
	   */
	@bindable()
	series: string = '';

	@bindable()
	legend: string = 'right';
	@bindable()
	theme: string = 'default';


	private __chart;
	private __canvas;
	private isColumn = false;
	private canExport = false;
	private showLegend = false;

	constructor(element: Element) {
		super();
		this.isColumn = element.hasAttribute('column');
		this.canExport = element.hasAttribute('export');
		this.showLegend = element.hasAttribute('legend');

		if (element.hasAttribute('stretch')) element.classList.add('ui-stretch');
	}

	attached() {
		// this.__buildChart();
	}

	chartDataChanged(newValue) {
		if (_.isEmpty(newValue)) return;
		this.__buildChart();
	}

	__buildChart() {
		let ds: AmCharts.AmSerialChart = <AmCharts.AmSerialChart>{};
		ds.type = "serial";
		ds.theme = this.theme;
		ds.precision = .5;
		ds.usePrefixes = true;
		ds.marginRight = this.canExport ? 70 : 30;
		ds.startDuration = 2;
		ds.rotate = !this.isColumn;
		ds.chartCursor = <AmCharts.ChartCursor>{
			cursorPosition: "middle"
		};
		ds.export = <AmCharts.ExportSettings>{
			enabled: this.canExport,
			libs: { autoLoad: false },
			menu: [{
				class: "export-main",
				menu: ["PNG", "JPG", "CSV", "JSON"]
			}]
		};
		// ds.valueAxes = [{
		// 	stackType: "regular",
		// 	axisAlpha: 0.3,
		// 	gridAlpha: 0
		// }];
		ds.balloon = <AmCharts.AmBalloon>{
			fillAlpha: .95
		}
		if (this.showLegend) {
			ds.legend = <AmCharts.AmLegend>{
				horizontalGap: 10,
				maxColumns: this.legend == 'bottom' ? 10 : 1,
				position: this.legend,
				useGraphSettings: true,
				markerSize: 10
			}
		}
		ds.categoryField = this.xAxis;
		ds.categoryAxis = <AmCharts.CategoryAxis>{
			// parseDates: true
		}
		ds.graphs = _.cloneDeep(this.chartGraphs);
		ds.dataProvider = _.cloneDeep(this.chartData);

		this.__chart = AmCharts.makeChart(this.__canvas, ds);
	}
}


@autoinject()
@customElement('ui-pie')
@useView('./ui-chart.html')
export class UIPie extends UIChart {
	/**
	   * @property    chart-title
	   * @type        string
	   */
	@bindable()
	chartTitle: string = '';
	/**
	   * @property    chart-data
	   * @type        Array
	   */
	@bindable()
	chartData: Array<any> = [];
	/**
		 * @property    width
		 * @type        number
		 */
	@bindable()
	width: number = 600;
	/**
		 * @property    height
		 * @type        number
		 */
	@bindable()
	height: number = 400;

	/**
		 * @property    value-property
		 * @type        string
		 */
	@bindable()
	valueProperty: string = '';
	/**
	   * @property    title-property
	   * @type        string
	   */
	@bindable()
	titleProperty: string = '';

	@bindable()
	innerRadius: string = '0%';
	@bindable()
	legend: string = 'right';
	@bindable()
	theme: string = 'pie';
	@bindable()
	colorProperty: string = '';


	private __chart;
	private __canvas;
	private canExport = false;
	private groupExtras = false;

	constructor(element: Element) {
		super();
		this.innerRadius = element.hasAttribute('donut') ? '30%' : '0%';
		this.canExport = element.hasAttribute('export');
		this.groupExtras = element.hasAttribute('group');

		if (element.hasAttribute('stretch')) element.classList.add('ui-stretch');
	}

	attached() {
		// this.__buildChart();
	}

	chartDataChanged(newValue) {
		if (_.isEmpty(newValue)) return;
		this.__buildChart();
	}

	__buildChart() {
		let ds: AmCharts.AmPieChart = <AmCharts.AmPieChart>{};
		ds.type = "pie";
		//ds.theme = this.theme;
		switch (this.theme) {
			case 'red': ds.colors = UIChart.CHART_RED; break;
			case 'pink': ds.colors = UIChart.CHART_PINK; break;
			case 'blue': ds.colors = UIChart.CHART_BLUE; break;
			case 'green': ds.colors = UIChart.CHART_GREEN; break;
			case 'orange': ds.colors = UIChart.CHART_ORANGE; break;
			case 'violet': ds.colors = UIChart.CHART_VIOLET; break;
			case 'spectrum': ds.colors = UIChart.CHART_SPECTRUM; break;
			default: ds.colors = UIChart.CHART_PIE; break;
		}
		ds.addClassNames = true;
		ds.precision = 2;
		ds.groupPercent = this.groupExtras ? 10 : 0;
		ds.radius = "40%";
		ds.startRadius = "90%";
		ds.startEffect = "easeOutSine";
		ds.labelsEnabled = false;
		ds.gradientRatio = [0, 0.2];
		ds.startDuration = .5;
		ds.usePrefixes = true;
		ds.balloonText = "[[title]]:<br/><b>[[value]]</b>";
		ds.innerRadius = this.innerRadius;
		ds.export = <AmCharts.ExportSettings>{
			enabled: this.canExport,
			libs: { autoLoad: false },
			menu: [{
				class: "export-main",
				menu: ["PNG", "JPG", "CSV", "JSON"]
			}]
		};
		// ds.valueAxes = [{
		// 	stackType: "regular",
		// 	axisAlpha: 0.3,
		// 	gridAlpha: 0
		// }];
		if (this.colorProperty) ds.colorField = this.colorProperty;
		ds.balloon = <AmCharts.AmBalloon>{
			fillAlpha: .95
		}
		ds.legend = <AmCharts.AmLegend>{
			horizontalGap: 10,
			valueText: '[[percents]]%',
			maxColumns: this.legend == 'bottom' ? 10 : 1,
			position: this.legend || 'right',
			// useGraphSettings: true,
			markerSize: 10
		}
		ds.valueField = this.valueProperty;
		ds.titleField = this.titleProperty;
		ds.dataProvider = _.cloneDeep(this.chartData);

		this.__chart = AmCharts.makeChart(this.__canvas, ds);
	}
}
