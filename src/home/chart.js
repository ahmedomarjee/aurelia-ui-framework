define(["require", "exports", "../../framework/index"], function (require, exports, index_1) {
    "use strict";
    var ChartExample = (function () {
        function ChartExample() {
            this.countries = ['Middle East', 'Australia/Asia', 'North America', 'Latin America', 'Africa', 'Europe'];
            this.barData = [];
            this.barGraphs = [];
            this.barData2 = [];
            this.barGraphs2 = [];
            this.barData3 = [];
            this.barGraphs3 = [];
            this.pieData1 = [];
            this.pieData2 = [];
            this.pieData3 = [];
            this.currentPeriod1 = 'Last 30 Days';
            this.__chart = index_1.UIChartStatic;
            this.profitsOptions = {
                chartTitle: 'Profits',
                valueAxisUnit: '$',
                categoryField: 'region',
                series: [{
                        title: 'Sales Value',
                        valueField: 'amount',
                        unitPrefix: '$'
                    }]
            };
            this.salesOptions = {
                chartTitle: 'Sales',
                categoryField: 'region',
                series: [{
                        title: 'Sales Qty',
                        valueField: 'amount'
                    }]
            };
            this.salesTargets = {
                chartTitle: 'Sales vs. Target',
                categoryField: 'date',
                valueAxisUnit: '$',
                series: [{
                        title: 'Profit Target',
                        clustered: false,
                        columnWidth: .85,
                        unitPrefix: '$',
                        fillColors: index_1.UIChartStatic.CHART_BLUE[5],
                        valueField: 'amountTarget'
                    }, {
                        title: 'Profit',
                        clustered: false,
                        columnWidth: .5,
                        unitPrefix: '$',
                        fillColors: index_1.UIChartStatic.CHART_BLUE[1],
                        valueField: 'amountActual'
                    }]
            };
        }
        ChartExample.prototype.attached = function () {
            var _this = this;
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
            for (var dt = 0; dt < 12; dt++) {
                var o = {
                    date: index_1.moment.monthsShort(dt) + '/2015',
                    amountActual: ((Math.random() * 100) * 2000),
                    amountTarget: ((Math.random() * 100) * 2000)
                };
                data.push(o);
            }
            this.barData = data;
        };
        ChartExample.prototype.buildChart2 = function ($event) {
            if ($event)
                this.currentPeriod1 = "Last " + $event.detail + " Days";
            var data = [];
            index_1._.forEach(this.countries, function (c, i) {
                data.push({
                    region: c,
                    amount: ((Math.random() * 5) * 1000) + 2000,
                    color: index_1.UIChartStatic.CHART_VIOLET[i]
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
                    color: index_1.UIChartStatic.CHART_SPECTRUM[i]
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
                    color: index_1.UIChartStatic.CHART_PINK[i]
                });
            });
            this.pieData3 = data;
        };
        return ChartExample;
    }());
    exports.ChartExample = ChartExample;
});
