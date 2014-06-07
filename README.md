##AngularJS directive for nvd3.js charts
This is a nvd3 directive for AngularJS. It currently supports pie Chart, line Chart, scatter Chart and horizontal Bar Chart.

###Basic Setup
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
```
Angular-directive in html:
<nvd3-pie-chart ...></nvd3-pie-chart>

Attributes:
chartId(recommended): The unique id of the pie chart on that page. It is required if there are multiple pie charts on the same html page.
colors(optional): For custom color you can provide color as an array of hex or rgb values.
data(required): The data that is to be displayed on the pie chart. 
divClass(optional): For custom styling of the div that would contain the chart.
donut(optional): If provided and is true the output graph would be a donut pie chart.
duration(optional): The transition duration.  The default value is 250.
half(optional): If provided and is true the output graph is halved.
height(required): The height of the output graph
hideLegend(optional): If provided and is true the output graph does not have a legend.
width(optional): The width of the output graph.
```


####Line Chart
```
How to Use?

Angular-directive in html:
<nvd3-line-chart ...></nvd3-line-chart>

Attributes:
chartId(recommended): The unique id of the line chart on that page. It is required if there are multiple line charts on the same html page.
data(required): The data that is to be displayed on the line chart. 
divClass(optional): For custom styling of the div that would contain the chart. This can be used for setting the width and height of the div that contains the line chart.
duration(optional): The transition duration. The default value is 250.
height(required): The height of the output graph
guide(optional): If provided and is true the output graph does have a legend.
width(optional): The width of the output graph.
xlabel(optional): The x-axis label of the graph.
xformat(optional): The format of data on the x-axis.
ylabel(optional): The y-axis label of the graph.
yformat(optional): The format of data on the y-axis.
```


####Scatter Chart
```
How to Use?

Angular-directive in html:
<nvd3-scatter-chart ...></nvd3-scatter-chart>

Attributes:
chartId(recommended): The unique id of the scatter chart on that page. It is required if there are multiple scatter charts on the same html page.
data(required): The data that is to be displayed on the scatter chart. 
divClass(optional): For custom styling of the div that would contain the chart. This can be used for setting the width and height of the div that contains the scatter chart.
duration(optional): The transition duration. The default value is 250.
forceLine(optional): If provided and is true a line is drawn through the points on the scatter plot.
height(required): The height of the output graph
width(optional): The width of the output graph.
xformat(optional): The format of data on the x-axis.
yformat(optional): The format of data on the y-axis.
```

####Horizontal Bar Chart
```
How to Use?

Angular-directive in html:
<nvd3-horizontal-bar-chart ...></nvd3-horizontal-bar-chart>

Attributes:
chartId(recommended): The unique id of the chart on that page. It is required if there are multiple charts on the same html page.
data(required): The data that is to be displayed on the horizontal chart. 
divClass(optional): For custom styling of the div that would contain the chart. This can be used for setting the width and height of the div that contains the horizontal bar chart.
duration(optional): The transition duration. The default value is 250.
showControls(optional): If provided and true it would show controls for the graph.
showValues(optional): If provided and true it would show values on the graph.
tooltips(optional): If provided and true it would show tooltip when the values are hovered on the graph.
yformat(optional): The format of data on the y-axis.
```

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