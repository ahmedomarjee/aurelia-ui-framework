var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "../utils/ui-utils", "amcharts/amcharts3", "amcharts/amcharts3/amcharts/pie", "amcharts/amcharts3/amcharts/serial", "amcharts/amcharts3/amcharts/themes/light", "amcharts/amcharts3/amcharts/plugins/export/export", "amcharts/amcharts3/amcharts/plugins/export/export.css!", "fabric"], function (require, exports, aurelia_framework_1, ui_utils_1) {
    "use strict";
    var UIChart = (function () {
        function UIChart() {
        }
        UIChart.init = function () {
            var colors = { red: 'CHART_RED', pink: 'CHART_PINK', blue: 'CHART_BLUE', green: 'CHART_GREEN', orange: 'CHART_ORANGE', violet: 'CHART_VIOLET', spectrum: 'CHART_SPECTRUM', default: 'CHART_DEFAULT', pie: 'CHART_PIE' };
            ui_utils_1._.forEach(colors, function (v, k) {
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
        };
        UIChart.CHART_RED = ["#7C2722", "#A73A21", "#DA3926", "#DE4834", "#E46A6A", "#EB898C", "#ED969B"];
        UIChart.CHART_PINK = ["#80364B", "#AA2D52", "#C8235D", "#DE2265", "#E66395", "#EB7FA5", "#EF96B2"];
        UIChart.CHART_BLUE = ["#127BB3", "#2094C6", "#68B7DC", "#7EC1DC", "#B0D9E4", "#B8DEE5", "#DCEBE6"];
        UIChart.CHART_GREEN = ["#0A4D44", "#118173", "#179987", "#1CB4A1", "#3BBCAD", "#67C4B8", "#96D5CC"];
        UIChart.CHART_ORANGE = ["#6F3610", "#944216", "#BD521B", "#F56B23", "#FC954F", "#FDB27E", "#FBCEA8"];
        UIChart.CHART_VIOLET = ["#4E2354", "#602A82", "#732F97", "#86509F", "#9B65A7", "#BA87BD", "#CBA2CA"];
        UIChart.CHART_SPECTRUM = ["#850509", "#CB2515", "#E2491A", "#FE7722", "#FE9C27", "#FFCD42", "#FFEE54"];
        UIChart.CHART_DEFAULT = ["#D53530", "#EF6B28", "#9D6E4B", "#EDEC47", "#5DAF43", "#38D046", "#279F79", "#5AC5C4", "#338EBD", "#375FA7", "#7C53A2", "#A6216A", "#DF8097"];
        UIChart.CHART_PIE = ["#B52F30", "#F68F31", "#8FC649", "#A0C4C8", "#A54797", "#977E6D", "#954D43", "#FBCC2E", "#5C8158", "#5D86A3", "#B10D5F", "#0E6BA8", "#0B6848"];
        return UIChart;
    }());
    exports.UIChart = UIChart;
    var UIBar = (function (_super) {
        __extends(UIBar, _super);
        function UIBar(element) {
            _super.call(this);
            this.chartTitle = '';
            this.chartData = [];
            this.chartGraphs = [];
            this.width = 600;
            this.height = 400;
            this.xAxis = '';
            this.yAxis = '';
            this.series = '';
            this.legend = 'right';
            this.theme = 'default';
            this.isColumn = false;
            this.canExport = false;
            this.showLegend = false;
            this.isColumn = element.hasAttribute('column');
            this.canExport = element.hasAttribute('export');
            this.showLegend = element.hasAttribute('legend');
            if (element.hasAttribute('stretch'))
                element.classList.add('ui-stretch');
        }
        UIBar.prototype.attached = function () {
        };
        UIBar.prototype.chartDataChanged = function (newValue) {
            if (ui_utils_1._.isEmpty(newValue))
                return;
            this.__buildChart();
        };
        UIBar.prototype.__buildChart = function () {
            var ds = {};
            ds.type = "serial";
            ds.theme = this.theme;
            ds.precision = .5;
            ds.usePrefixes = true;
            ds.marginRight = this.canExport ? 70 : 30;
            ds.startDuration = 2;
            ds.rotate = !this.isColumn;
            ds.chartCursor = {
                cursorPosition: "middle"
            };
            ds.export = {
                enabled: this.canExport,
                libs: { autoLoad: false },
                menu: [{
                        class: "export-main",
                        menu: ["PNG", "JPG", "CSV", "JSON"]
                    }]
            };
            ds.balloon = {
                fillAlpha: .95
            };
            if (this.showLegend) {
                ds.legend = {
                    horizontalGap: 10,
                    maxColumns: this.legend == 'bottom' ? 10 : 1,
                    position: this.legend,
                    useGraphSettings: true,
                    markerSize: 10
                };
            }
            ds.categoryField = this.xAxis;
            ds.categoryAxis = {};
            ds.graphs = ui_utils_1._.cloneDeep(this.chartGraphs);
            ds.dataProvider = ui_utils_1._.cloneDeep(this.chartData);
            this.__chart = AmCharts.makeChart(this.__canvas, ds);
        };
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], UIBar.prototype, "chartTitle", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Array)
        ], UIBar.prototype, "chartData", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Array)
        ], UIBar.prototype, "chartGraphs", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Number)
        ], UIBar.prototype, "width", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Number)
        ], UIBar.prototype, "height", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], UIBar.prototype, "xAxis", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], UIBar.prototype, "yAxis", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], UIBar.prototype, "series", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], UIBar.prototype, "legend", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], UIBar.prototype, "theme", void 0);
        UIBar = __decorate([
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.customElement('ui-bar'),
            aurelia_framework_1.useView('./ui-chart.html'), 
            __metadata('design:paramtypes', [Element])
        ], UIBar);
        return UIBar;
    }(UIChart));
    exports.UIBar = UIBar;
    var UIPie = (function (_super) {
        __extends(UIPie, _super);
        function UIPie(element) {
            _super.call(this);
            this.chartTitle = '';
            this.chartData = [];
            this.width = 600;
            this.height = 400;
            this.valueProperty = '';
            this.titleProperty = '';
            this.innerRadius = '0%';
            this.legend = 'right';
            this.theme = 'pie';
            this.colorProperty = '';
            this.canExport = false;
            this.groupExtras = false;
            this.innerRadius = element.hasAttribute('donut') ? '30%' : '0%';
            this.canExport = element.hasAttribute('export');
            this.groupExtras = element.hasAttribute('group');
            if (element.hasAttribute('stretch'))
                element.classList.add('ui-stretch');
        }
        UIPie.prototype.attached = function () {
        };
        UIPie.prototype.chartDataChanged = function (newValue) {
            if (ui_utils_1._.isEmpty(newValue))
                return;
            this.__buildChart();
        };
        UIPie.prototype.__buildChart = function () {
            var ds = {};
            ds.type = "pie";
            switch (this.theme) {
                case 'red':
                    ds.colors = UIChart.CHART_RED;
                    break;
                case 'pink':
                    ds.colors = UIChart.CHART_PINK;
                    break;
                case 'blue':
                    ds.colors = UIChart.CHART_BLUE;
                    break;
                case 'green':
                    ds.colors = UIChart.CHART_GREEN;
                    break;
                case 'orange':
                    ds.colors = UIChart.CHART_ORANGE;
                    break;
                case 'violet':
                    ds.colors = UIChart.CHART_VIOLET;
                    break;
                case 'spectrum':
                    ds.colors = UIChart.CHART_SPECTRUM;
                    break;
                default:
                    ds.colors = UIChart.CHART_PIE;
                    break;
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
            ds.export = {
                enabled: this.canExport,
                libs: { autoLoad: false },
                menu: [{
                        class: "export-main",
                        menu: ["PNG", "JPG", "CSV", "JSON"]
                    }]
            };
            if (this.colorProperty)
                ds.colorField = this.colorProperty;
            ds.balloon = {
                fillAlpha: .95
            };
            ds.legend = {
                horizontalGap: 10,
                valueText: '[[percents]]%',
                maxColumns: this.legend == 'bottom' ? 10 : 1,
                position: this.legend || 'right',
                markerSize: 10
            };
            ds.valueField = this.valueProperty;
            ds.titleField = this.titleProperty;
            ds.dataProvider = ui_utils_1._.cloneDeep(this.chartData);
            this.__chart = AmCharts.makeChart(this.__canvas, ds);
        };
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], UIPie.prototype, "chartTitle", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Array)
        ], UIPie.prototype, "chartData", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Number)
        ], UIPie.prototype, "width", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Number)
        ], UIPie.prototype, "height", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], UIPie.prototype, "valueProperty", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], UIPie.prototype, "titleProperty", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], UIPie.prototype, "innerRadius", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], UIPie.prototype, "legend", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], UIPie.prototype, "theme", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], UIPie.prototype, "colorProperty", void 0);
        UIPie = __decorate([
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.customElement('ui-pie'),
            aurelia_framework_1.useView('./ui-chart.html'), 
            __metadata('design:paramtypes', [Element])
        ], UIPie);
        return UIPie;
    }(UIChart));
    exports.UIPie = UIPie;
});
