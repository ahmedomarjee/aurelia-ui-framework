define(["require", "exports", "../../framework/index"], function (require, exports, index_1) {
    "use strict";
    var ChartExample = (function () {
        function ChartExample() {
            this.names = ['Bob', 'John', 'David', 'Nick', 'Bruce'];
            this.barData = [];
            this.barGraphs = [];
            this.barData2 = [];
            this.barGraphs2 = [];
            this.barData3 = [];
            this.barGraphs3 = [];
            this.pieData1 = [];
            this.pieData2 = [];
            this.pieData3 = [];
            this.countries = ['Middle East', 'Australia/Asia', 'North America', 'Latin America', 'Africa', 'Europe'];
        }
        ChartExample.prototype.attached = function () {
            var _this = this;
            index_1._.forEach(this.names, function (nm, i) {
                _this.barGraphs.push({
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
            this.barGraphs.push({
                type: "line",
                bullet: 'bubble',
                bulletColor: '#FFFFFF',
                bulletSize: 9,
                bulletBorderAlpha: 1,
                bulletBorderThickness: 2,
                bulletBorderColor: index_1.UIChart.CHART_DEFAULT[0],
                balloonText: "[[title]]: <b>[[value]]</b>",
                lineAlpha: 0.8,
                lineColor: index_1.UIChart.CHART_DEFAULT[0],
                lineThickness: 2,
                valueField: 'avg',
                title: 'Avg. Sales'
            });
            this.barGraphs2 = [{
                    type: "column",
                    columnWidth: .85,
                    balloonText: "[[category]]:<br/><b>[[value]]</b>",
                    fillAlphas: 0.8,
                    lineAlpha: 0.2,
                    fillColorsField: 'color',
                    valueField: 'amount'
                }];
            this.barGraphs3 = [{
                    type: "column",
                    balloonText: "[[category]]:<br/><b>[[value]]</b>",
                    columnWidth: .85,
                    fillAlphas: 0.8,
                    lineAlpha: 0.2,
                    fillColorsField: 'color',
                    valueField: 'amount'
                }];
            setTimeout(function () {
                _this.buildChart1();
                _this.buildChart2();
                _this.buildChart3();
                _this.buildPie1();
                _this.buildPie2();
                _this.buildPie3();
            }, 500);
        };
        ChartExample.prototype.buildChart1 = function () {
            var data = [];
            for (var dt = 6; dt < 12; dt++) {
                var o = {
                    date: index_1.moment.monthsShort(dt) + '/2015',
                    avg: ((Math.random() * 2) * 2000) + 2000
                };
                for (var _i = 0, _a = this.names; _i < _a.length; _i++) {
                    var nm = _a[_i];
                    o[nm] = ((Math.random() * 2) * 1000) + 1000;
                }
                data.push(o);
            }
            this.barData = data;
        };
        ChartExample.prototype.buildChart2 = function () {
            var data = [];
            index_1._.forEach(this.countries, function (c, i) {
                data.push({
                    region: c,
                    amount: ((Math.random() * 5) * 1000) + 2000,
                    color: index_1.UIChart.CHART_VIOLET[i]
                });
            });
            this.barData2 = data;
        };
        ChartExample.prototype.buildChart3 = function () {
            var data = [];
            index_1._.forEach(this.countries, function (c, i) {
                data.push({
                    region: c,
                    amount: ((Math.random() * 5) * 100) + 100,
                    color: index_1.UIChart.CHART_BLUE[i]
                });
            });
            this.barData3 = data;
        };
        ChartExample.prototype.buildPie1 = function () {
            var data = [];
            index_1._.forEach(this.countries, function (c, i) {
                data.push({
                    region: c,
                    amount: ((Math.random() * 5) * 100) + 100
                });
            });
            this.pieData1 = data;
        };
        ChartExample.prototype.buildPie2 = function () {
            var data = [];
            index_1._.forEach(this.countries, function (c, i) {
                data.push({
                    region: c,
                    amount: ((Math.random() * 5) * 100) + 100
                });
            });
            this.pieData2 = data;
        };
        ChartExample.prototype.buildPie3 = function () {
            var data = [];
            index_1._.forEach(this.countries, function (c, i) {
                data.push({
                    region: c,
                    amount: ((Math.random() * 5) * 100) + 100,
                    color: index_1.UIChart.CHART_PINK[i]
                });
            });
            this.pieData3 = data;
        };
        return ChartExample;
    }());
    exports.ChartExample = ChartExample;
});
