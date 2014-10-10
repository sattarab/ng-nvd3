(function (){
    'use strict';

    angular.module('ng-nvd3', [])
    /**
    * Creates a Pie Chart
    * @data - the json data to construct the pie chart
    *   eg. data is passed in view as <%= raw @data.to_json.html_safe %>
    *     var data = [
    *       {
    *        key:  "One",
    *        y: 5
    *       },
    *       {
    *        key: "Two",
    *        y: 10
    *       }
    *     ];
    */
    .directive('nvd3PieChart', function ($window){
        return{
            restrict: 'E',
            scope: {
                chartId: '@',
                colors: '=',
                data: '=',
                divClass: '@',
                donut: '@',
                duration: '@',
                half: '@',
                height: '@',
                hideLegend: '@',
                labelType: '@',
                responsive: '@',
                width: '@'
            },
            link: function (scope, element, attrs){
                scope.$watch('data', function (data){
                    if (data){
                        nv.addGraph(function (){
                            var chart = nv.models.pieChart()
                                .x(function (d) { return d.key; })
                                .y(function (d) { return d.val; })
                                .showLegend(scope.hideLegend === 'false' ? false : true)
                                .labelType(scope.labelType)
                                .donut(scope.donut === 'true' ? true : false);

                            if (scope.colors){
                                chart.color(scope.colors);
                            }

                            if (scope.half === 'true'){
                                chart.pie
                                    .startAngle(function (d) { return d.startAngle / 2 - Math.PI / 2; })
                                    .endAngle(function (d) { return d.endAngle / 2 - Math.PI / 2; });
                            }

                            d3.select('#' + scope.chartId +' svg').datum(scope.data)
                                .attr('width', scope.width)
                                .attr('height', scope.height);

                            if (scope.responsive === 'true'){
                                chart.width(Math.min(scope.width, angular.element(document.querySelector('#' + scope.chartId))[0].offsetWidth))
                                    .height(Math.min(scope.height, angular.element(document.querySelector('#' + scope.chartId))[0].offsetHeight));

                                 angular.element($window).on('resize', function (){
                                    chart.width(Math.min(scope.width, angular.element(document.querySelector('#' + scope.chartId))[0].offsetWidth))
                                        .height(Math.min(scope.height, angular.element(document.querySelector('#' + scope.chartId))[0].offsetHeight));
                                });
                            }
                            else{
                                chart.width(scope.width).height(scope.height);
                            }

                            d3.select('#' + scope.chartId +' svg').transition().duration(scope.duration == null ? 250 : scope.duration)
                                .call(chart);

                            nv.utils.windowResize(chart.update);

                            return chart;
                        });
                    }
                });
            },
            template: function (element, attrs){
                if (attrs.responsive ===  'true'){
                    element.append('<div id="'+ attrs.chartId +'"><svg></svg></div>');
                }
                else{
                    element.append('<div id="'+ attrs.chartId +'" class="'+ attrs.divClass +'"><svg></svg></div>');
                }
            }
        };
    })
    /**
    * Creates a Line Graph
    */
    .directive('nvd3LineGraph', function ($window){
        return{
            restrict: 'E',
            scope: {
                chartId: '@',
                data: '=',
                divClass: '@',
                duration: '@',
                guide: '@',
                height: '@',
                responsive: '@',
                width: '@',
                xlabel: '@',
                xformat: '&',
                ylabel: '@',
                yformat: '&'
            },
            link: function (scope, element, attrs){
                scope.$watch('data', function (data){
                    if (data){
                        nv.addGraph(function () {
                            var chart = nv.models.lineChart()
                                .useInteractiveGuideline(scope.guide === 'true' ? true : false)
                                .margin({ right: 35 });

                            if(!scope.xformat())
                                scope.xformat = function() { return d3.format() };
                            if(!scope.yformat())
                                scope.yformat = function() { return d3.format() };

                            chart.xAxis
                                .axisLabel(scope.xlabel)
                                .tickFormat(scope.xformat());

                            chart.yAxis
                                .axisLabel(scope.ylabel)
                                .axisLabelDistance(42)
                                .tickFormat(scope.yformat());

                            d3.select('#' + scope.chartId +' svg').datum(scope.data)
                                .attr('width', scope.width)
                                .attr('height', scope.height)
                                .attr('perserveAspectRatio', 'xMinYMid');

                            if (scope.responsive === 'true'){
                                chart.width(Math.min(scope.width, angular.element(document.querySelector('#' + scope.chartId))[0].offsetWidth))
                                    .height(Math.min(scope.height, angular.element(document.querySelector('#' + scope.chartId))[0].offsetHeight));

                                angular.element($window).on('resize', function (){
                                    chart.width(Math.min(scope.width, angular.element(document.querySelector('#' + scope.chartId))[0].offsetWidth))
                                        .height(Math.min(scope.height, angular.element(document.querySelector('#' + scope.chartId))[0].offsetHeight));
                                });
                            }
                            else{
                                chart.width(scope.width).height(scope.height);
                            }

                            d3.select('#' + scope.chartId +' svg').transition().duration(scope.duration == null ? 250 : scope.duration)
                                .call(chart);

                            nv.utils.windowResize(chart.update);

                            return chart;
                        });
                    }
                });
            },
            template: function (element, attrs){
                if (attrs.responsive ===  'true'){
                    element.append('<div id="'+ attrs.chartId +'"><svg></svg></div>');
                }
                else{
                    element.append('<div id="'+ attrs.chartId +'" class="'+ attrs.divClass +'"><svg></svg></div>');
                }
            }
        };
    })
    /**
    * Creates a Scatter Graph
    */
    .directive('nvd3ScatterGraph', function ($window){
        return{
            restrict: 'E',
            scope: {
                chartId: '@',
                data: '=',
                divClass: '@',
                duration: '@',
                forceLine: '@',
                height: '@',
                responsive: '@',
                width: '@',
                xformat: '&',
                yformat: '&'

            },
            link: function (scope, element, attrs){
                scope.$watch('data', function (data){
                    if (data){
                        nv.addGraph(function (){
                            var chart, idx, hasLine = true;

                            for (idx = 0; idx < data.length; idx++){
                                hasLine = hasLine && data[idx].slope && data[idx].intercept;
                            }

                            if (hasLine || scope.forceLine){
                                chart = nv.models.scatterPlusLineChart();
                            }
                            else{
                                chart = nv.models.scatterChart();
                            }

                            if(!scope.xformat())
                                scope.xformat = function() { return d3.format() };
                            if(!scope.yformat())
                                scope.yformat = function() { return d3.format() };

                            chart.showDistX(true).showDistY(true);
                            chart.xAxis.tickFormat(scope.xformat());
                            chart.yAxis.tickFormat(scope.yformat());
                            chart.tooltipContent(function (key, x, y) {
                                return "<h3>" + key + "</h3><p>" + y + " at " + x + "</p>";
                            });

                            d3.select('#' + scope.chartId +' svg').datum(scope.data)
                                .attr('width', scope.width)
                                .attr('height', scope.height)
                                .attr('perserveAspectRatio', 'xMinYMid');

                            if (scope.responsive === 'true'){
                                chart.width(Math.min(scope.width, angular.element(document.querySelector('#' + scope.chartId))[0].offsetWidth))
                                    .height(Math.min(scope.height, angular.element(document.querySelector('#' + scope.chartId))[0].offsetHeight));

                                angular.element($window).on('resize', function (){
                                    chart.width(Math.min(scope.width, angular.element(document.querySelector('#' + scope.chartId))[0].offsetWidth))
                                        .height(Math.min(scope.height, angular.element(document.querySelector('#' + scope.chartId))[0].offsetHeight));
                                });
                            }
                            else{
                                chart.width(scope.width).height(scope.height);
                            }

                            d3.select('#' + scope.chartId +' svg').transition().duration(scope.duration == null ? 250 : scope.duration)
                                .call(chart);

                            nv.utils.windowResize(chart.update);

                            return chart;
                        });
                    }
                });
            },
            template: function (element, attrs){
                if (attrs.responsive ===  'true'){
                    element.append('<div id="'+ attrs.chartId +'"><svg></svg></div>');
                }
                else{
                    element.append('<div id="'+ attrs.chartId +'" class="'+ attrs.divClass +'"><svg></svg></div>');
                }
            }
        };
    })
    /**
    * Creates a Multi-Bar Graph
    */
    .directive('nvd3BarGraph', function ($window){
        return{
            restrict: 'E',
            scope: {
                chartId: '@',
                data: '=',
                duration: '@',
                divClass: '@',
                height: '@',
                horizontal: '@',
                responsive: '@',
                showControls: '@',
                showValues: '@',
                tooltips: '@',
                width: '@',
                yformat: '&'
            },
            link: function (scope, element, attrs){
                scope.$watch('data', function (data){
                    if (data){
                        nv.addGraph(function() {
                            var chart;
                            if (scope.horizontal === 'true'){
                                chart = nv.models.multiBarHorizontalChart();
                            }
                            else{
                                chart = nv.models.multiBarChart();
                            }

                            if(!scope.yformat())
                                scope.yformat = function() { return d3.format() };

                            chart.x(function(d) { return d.label; })
                                .y(function(d) { return d.value; })
                                .tooltips(scope.tooltips === 'true' ? true : false)
                                .transitionDuration(scope.duration == null ? 250 : scope.duration)
                                .showControls(scope.showControls === 'true' ? true : false)
                                .yAxis.tickFormat(scope.yformat());

                            chart.width(scope.width).height(scope.height);

                            d3.select('#' + scope.chartId +' svg').datum(scope.data)
                                .attr('width', scope.width)
                                .attr('height', scope.height)
                                .attr('perserveAspectRatio', 'xMinYMid');

                            if (scope.responsive === 'true'){
                                chart.width(Math.min(scope.width, angular.element(document.querySelector('#' + scope.chartId))[0].offsetWidth))
                                    .height(Math.min(scope.height, angular.element(document.querySelector('#' + scope.chartId))[0].offsetHeight));

                                angular.element($window).on('resize', function (){
                                    chart.width(Math.min(scope.width, angular.element(document.querySelector('#' + scope.chartId))[0].offsetWidth))
                                        .height(Math.min(scope.height, angular.element(document.querySelector('#' + scope.chartId))[0].offsetHeight));
                                });
                            }
                            else{
                                chart.width(scope.width).height(scope.height);
                            }

                            d3.select('#' + scope.chartId +' svg').transition().duration(scope.duration == null ? 250 : scope.duration)
                                .call(chart);

                            nv.utils.windowResize(chart.update);

                            return chart;
                        });
                    }
                });
            },
            template: function (element, attrs){
                if (attrs.responsive ===  'true'){
                    element.append('<div id="'+ attrs.chartId +'"><svg></svg></div>');
                }
                else{
                    element.append('<div id="'+ attrs.chartId +'" class="'+ attrs.divClass +'"><svg></svg></div>');
                }
            }
        };
    })
    /**
    * Creates a Line Plus Bar Chart
    */
    .directive('nvd3LinePlusBarGraph', function ($window){
        return{
            restrict: 'E',
            scope: {
                chartId: '@',
                data: '=',
                divClass: '@',
                duration: '@',
                height: '@',
                responsive: '@',
                width: '@',
                xformat: '&',
                xlabel: '@',
                y1format: '&',
                y2format: '&',
                y1label: '@',
                y2label: '@'
            },
            link: function (scope, element, attrs){
                scope.$watch('data', function (data){
                    if (data){
                        nv.addGraph(function (){
                            var chart = nv.models.linePlusBarChart()
                                .x(function (d, i){ return i; })
                                .y(function (d, i){ return d[1]; })
                                .margin({ left: 75, right: 75 });

                            if(!scope.xformat())
                                scope.xformat = function() { return d3.format() };
                            if(!scope.y1format())
                                scope.y1format = function() { return d3.format() };
                            if(!scope.y2format())
                                scope.y2format = function() { return d3.format() };

                            chart.xAxis.axisLabel(scope.xlabel)
                                .tickFormat(scope.xformat());

                            chart.y1Axis.axisLabel(scope.y1label)
                                .tickFormat(scope.y1format());

                            chart.y2Axis.axisLabel(scope.y2label)
                                .tickFormat(scope.y2format());

                            chart.bars.forceY([0]).padData(false);

                            chart.width(scope.width).height(scope.height);

                            d3.select('#' + scope.chartId +' svg').datum(scope.data)
                                .attr('width', scope.width)
                                .attr('height', scope.height)
                                .attr('perserveAspectRatio', 'xMinYMid');

                            if (scope.responsive === 'true'){
                                chart.width(Math.min(scope.width, angular.element(document.querySelector('#' + scope.chartId))[0].offsetWidth))
                                    .height(Math.min(scope.height, angular.element(document.querySelector('#' + scope.chartId))[0].offsetHeight));

                                angular.element($window).on('resize', function (){
                                    chart.width(Math.min(scope.width, angular.element(document.querySelector('#' + scope.chartId))[0].offsetWidth))
                                        .height(Math.min(scope.height, angular.element(document.querySelector('#' + scope.chartId))[0].offsetHeight));
                                });
                            }
                            else{
                                chart.width(scope.width).height(scope.height);
                            }

                            d3.select('#' + scope.chartId +' svg').transition().duration(scope.duration == null ? 250 : scope.duration)
                                .call(chart);

                            nv.utils.windowResize(chart.update);

                            return chart;
                        });
                    }
                });
            },
            template: function (element, attrs){
                if (attrs.responsive ===  'true'){
                    element.append('<div id="'+ attrs.chartId +'"><svg></svg></div>');
                }
                else{
                    element.append('<div id="'+ attrs.chartId +'" class="'+ attrs.divClass +'"><svg></svg></div>');
                }
            }
        };
    });
})();
