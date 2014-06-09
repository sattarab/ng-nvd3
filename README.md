##AngularJS directive for nvd3.js charts
This is a nvd3 directive for AngularJS. It currently supports pie chart, line chart, scatter chart, bar chart and line-plus-bar graph. This is a lightweight directive which has the ability to allow the output graph to be responsive.

###Basic Setup
Using bower:
bower install ng-nvd3 --save

```
Note: This directive module is dependent on angular, d3 and nvd3
1. Install the directive using bower install ng-nvd3 --save
2. This would add install the dependencies required for this directive and the directive itself
3. Include the dependencies in the <head> tag of the html document. For example
  <link rel="stylesheet" href="bower_components/nvd3/nv.d3.css"/>
  <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular.min.js"></script>
  <script type="text/javascript" src="http://d3js.org/d3.v3.min.js"></script>
  <script src="bower_components/nvd3/nv.d3.js"></script>
  <script src="bower_components/angularjs-nvd3-directives/dist/angularjs-nvd3-directives.js"></script>
  
  Note: I have added d3.v3.min.js as a direct link in the script tag above. You can either download the d3.v3.js from this repository provided in lib folder or use the direct link as shown above
```

###API
####Pie Chart
![Pie Chart](https://github.com/sattarab/ng-nvd3/raw/master/img/pie-chart.png "Pie Chart")
#####How to use?

```
Angular-directive in html:
<nvd3-pie-chart ...></nvd3-pie-chart>

Attributes:
chartId(recommended): The unique id of the pie chart on that page. It is required if there are multiple pie charts on the same html page.
colors(optional): For custom color you can provide color as an array of hex or rgb values.
data(required): The data that is to be displayed on the pie chart. 
div-class(optional): For custom styling of the div that would contain the chart.
donut(optional): If provided and is true the output graph would be a donut pie chart.
duration(optional): The transition duration.  The default value is 250.
half(optional): If provided and is true the output graph is halved.
height(required): The height of the output graph
hideLegend(optional): If provided and is true the output graph does not have a legend.
responsive(optional): If provided and is true the output graph is responsive.
width(optional): The width of the output graph.
```


####Line Graph
![Line Chart](https://github.com/sattarab/ng-nvd3/raw/master/img/line-chart.png "Line Chart")
#####How to use?

```
Angular-directive in html:
<nvd3-line-graph ...></nvd3-line-graph>

Attributes:
chartId(recommended): The unique id of the line chart on that page. It is required if there are multiple line charts on the same html page.
data(required): The data that is to be displayed on the line chart. 
div-class(optional): For custom styling of the div that would contain the chart. This can be used for setting the width and height of the div that contains the line chart.
duration(optional): The transition duration. The default value is 250.
guide(optional): If provided and is true the output graph does have a legend.
height(required): The height of the output graph
responsive(optional): If provided and is true the output graph is responsive.
width(optional): The width of the output graph.
xlabel(optional): The x-axis label of the graph.
xformat(optional): The format of data on the x-axis.
ylabel(optional): The y-axis label of the graph.
yformat(optional): The format of data on the y-axis.
```


####Scatter Graph
#####How to use?

```
Angular-directive in html:
<nvd3-scatter-graph ...></nvd3-scatter-graph>

Attributes:
chartId(recommended): The unique id of the scatter chart on that page. It is required if there are multiple scatter charts on the same html page.
data(required): The data that is to be displayed on the scatter chart. 
div-class(optional): For custom styling of the div that would contain the chart. This can be used for setting the width and height of the div that contains the scatter chart.
duration(optional): The transition duration. The default value is 250.
forceLine(optional): If provided and is true a line is drawn through the points on the scatter plot.
height(required): The height of the output graph.
responsive(optional): If provided and is true the graph is responsive.
width(optional): The width of the output graph.
xformat(optional): The format of data on the x-axis.
yformat(optional): The format of data on the y-axis.
```

####Bar Graph
![Bar Chart](https://github.com/sattarab/ng-nvd3/raw/master/img/horizontal-bar.png "Horizontal Bar Chart")
#####How to use?

```
Angular-directive in html:
<nvd3-bar-graph ...></nvd3-bar-graph>

Attributes:
chartId(recommended): The unique id of the chart on that page. It is required if there are multiple charts on the same html page.
data(required): The data that is to be displayed on the chart. 
div-class(optional): For custom styling of the div that would contain the chart. This can be used for setting the width and height of the div that contains the horizontal bar chart.
duration(optional): The transition duration. The default value is 250.
height(required): The height of the output graph.
horizontal(optional): Default false.If provided and is true the resultant output graph is a horizontal bar graph.
responsive(optional): If provided and is true the output graph is responsive.
showControls(optional): If provided and true it would show controls for the graph.
showValues(optional): If provided and true it would show values on the graph.
tooltips(optional): If provided and true it would show tooltip when the values are hovered on the graph.
width(optional): The width of the output graph.
yformat(optional): The format of data on the y-axis.
```

####Line Plus Bar Graph
![Line Plus Bar Graph](https://github.com/sattarab/ng-nvd3/raw/master/img/line-plus-bar-chart.png "Line Plus Bar Graph")
#####How to use?

```
Angular-directive in html:
<nvd3-line-plus-bar-graph ...></nvd3-line-plus-bar-graph>
Attributes:
chartId(recommended): The unique id of the chart on that page. It is required if there are multiple charts on the same html page.
data(required): The data that is to be displayed on the chart. 
div-class(optional): For custom styling of the div that would contain the chart. This can be used for setting the width and height of the div that contains the horizontal bar chart.
duration(optional): The transition duration. The default value is 250.
height(required): The height of the output graph.
responsive(optional): If provided and is true the output graph is responsive.
width(optional): The width of the output graph.
xformat(optional): The format of data on the x-axis.
xlabel(optional): The x-axis label of the graph.
y1format(optional): The format of data on the y1-axis.
y2format(optional): The format of data on the y2-axis.
y1label(optional): The y1-axis label of the graph.
y2label(optional): The y2-axis label of the graph.

###License
The MIT License

Copyright (c) sattarab email: c2sattara1@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.