'use strict';

angular.module('ng-nvd3', [])
.directive('nvd3PieChart', function (){
    return{
        restrict: 'E',
        scope: {
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
                            .showLegend(scope.hideLegend)
                            .labelType(scope.labelType)
                            .donut(scope.donut);

                        if (scope.colors){
                            chart.color(scope.colors);
                        }

                        if (scope.half == 'true' ? true : false){
                            chart.pie
                                .startAngle(function (d) { return d.startAngle / 2 - Math.PI / 2; })
                                .endAngle(function (d) { return d.endAngle / 2 - Math.PI / 2; });
                        }

                        if (!(scope.responsive == 'true' ? true : false)){
                            chart.width(scope.width).height(scope.height);
                        }

                        d3.select("#pieChart svg").datum(scope.data)
                            .attr('width', scope.width)
                            .attr('height', scope.height)
                            .transition().duration(scope.duration)
                            .call(chart);

                        nv.utils.windowResize(chart.update);
                        return chart;
                    });   
                }
            });   
        },
        template: function (element, attrs){
            element.append('<div id="pieChart" class="'+ attrs.divClass +'"><svg></svg></div>');
        }
    }
})
.directive('nvd3LineChart', function (){
    return{
        restrict: 'E',
        scope: {
            data: '=',
            divClass: '@',
            duration: '@',
            guide: '@',
            height: '@',
            responsive: '@',
            width: '@',
            xlabel: '@',
            xformat: '@',
            ylabel: '@',
            yformat: '@'
        },
        link: function (scope, element, attrs){
            scope.$watch('data', function (data){
                if (data){
                    nv.addGraph(function () {
                        var chart = nv.models.lineChart()
                            .useInteractiveGuideline(scope.guide == 'true' ? true : false)
                            .margin({ right: 35 });

                        chart.xAxis
                            .axisLabel(scope.xlabel)
                            .tickFormat(d3.format(scope.xformat));
                        
                        chart.yAxis
                            .axisLabel(scope.ylabel)
                            .axisLabelDistance(42)
                            .tickFormat(d3.format(scope.yformat));

                        if (!(scope.responsive == 'true' ? true : false)) {
                            chart.width(scope.width).height(scope.height);
            
                            d3.select('#lineChart svg')
                                .attr('viewBox', '0 0 ' + scope.width + ' ' + scope.height);
                        }

                        d3.select('#lineChart svg').datum(scope.data)
                            .attr('width', scope.width)
                            .attr('height', scope.height)
                            .attr('perserveAspectRatio', 'xMinYMid')
                            .transition().duration(scope.duration)
                            .call(chart);

                        nv.utils.windowResize(chart.update);
                        return chart;
                    });
                }
            });
        },
        template: function (element, attrs){
            element.append('<div id="lineChart" class="'+ attrs.divClass +'"><svg></svg></div>');
        }
    }
})
.directive('nvd3ScatterChart', function (){
    return{
        restrict: 'E',
        scope: {
            data: '=',
            divClass: '@',
            duration: '@',
            forceLine: '@',
            responsive: '@',
            xformat: '@',
            yformat: '@'
            
        },
        link: function (scope, element, attrs){
            scope.$watch('data', function (data){
                if (data){
                    nv.addGraph(function () {
                        var chart, idx, hasLine = true;
          
                        for (idx = 0; idx < data.length; idx++) {
                            hasLine = hasLine && data[idx].slope && data[idx].intercept;
                        }
          
                        if (hasLine || scope.forceLine) {
                            chart = nv.models.scatterPlusLineChart();
                        } else {
                            chart = nv.models.scatterChart();
                        }
        
                        chart.showDistX(true).showDistY(true);
                        chart.xAxis.tickFormat(d3.format(scope.xformat));
                        chart.yAxis.tickFormat(d3.format(scope.yformat));
                        chart.tooltipContent(function (key, x, y) {
                            return "<h3>" + key + "</h3><p>" + y + " at " + x + "</p>";
                        });
          
                        if (!(scope.responsive == 'true' ? true : false)) {
                            chart.width(scope.width).height(scope.height);
                        }
          
                        d3.select('#scatterChart svg').datum(scope.data)
                            .attr('width', scope.width)
                            .attr('height', scope.height)
                            .transition().duration(scope.duration)
                            .call(chart);
          
                        nv.utils.windowResize(chart.update);
                        return chart;
                    });
                }
            })
        },
        template: function (element, attrs){
            element.append('<div id="scatterChart" class="'+ attrs.divClass +'"><svg></svg></div>');
        }
    }
})
.directive('nvd3HorizontalBarChart', function (){
    return{
        restrict: 'E',
        scope: {
            data: '=',
            duration: '@',
            divClass: '@',
            showControls: '@',
            showValues: '@',
            tooltips: '@',
            yformat: '@'
        
        },
        link: function (scope, element, attrs){
            scope.$watch('data', function (data){
                if (data){
                    nv.addGraph(function() {
                        var chart = nv.models.multiBarHorizontalChart()
                            .x(function(d) { return d.label })
                            .y(function(d) { return d.value })
                            .showValues(scope.showValues == 'true' ? true : false)
                            .tooltips(scope.tooltips == 'true' ? true : false) 
                            .transitionDuration(scope.duration)
                            .showControls(scope.showControls == 'true' ? true : false);
                    
                        chart.yAxis.tickFormat(d3.format(scope.yformat));

                        d3.select('#horizontalBarChart svg')
                            .datum(scope.data)
                            .call(chart);

                        nv.utils.windowResize(chart.update);

                        return chart;
                    });
                }
            })
        },
        template: function (element, attrs){
            element.append('<div id="horizontalBarChart" class="'+ attrs.divClass +'"><svg></svg></div>');
        }
    }
});