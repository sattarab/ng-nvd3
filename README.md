##AngularJS directive for nvd3.js charts
This is a lightweight directive for nvd3 AngularJS with built in support for building responsive and custom styled graphs/charts. It currently supports pie chart, line chart, scatter chart, bar chart(both horizontal and vertical) and line-plus-bar graph with more charts on the way.

###Project
Project page at: http://sattarab.github.io/ng-nvd3

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
4. Add the dependency of the directive in the angular app

  Note: I have added d3.v3.min.js as a direct link in the script tag above. You can either download the d3.v3.js from this repository provided in lib folder or use the direct link as shown above
```

###API
####Pie Chart
![Pie Chart](https://github.com/sattarab/ng-nvd3/raw/master/img/pie-chart.png "Pie Chart")
#####How to use?

```
**Angular-directive in html:**
<nvd3-pie-chart ...></nvd3-pie-chart>
```

**Important Note:**
Setting specific values for width or height in div-class would not make the graph responsive anymore.<br>

**Attributes:**

**chartId(*recommended*):** The unique id of the pie chart on that page. It is required if there are multiple pie charts on the same html page.<br>
**colors(*optional*):** For custom color you can provide color as an array of hex or rgb values.<br>
**data(*required*):** The data that is to be displayed on the pie chart. <br>
**div-class(*optional*):** For custom styling of the div that would contain the chart. If the div-class contains the specific values for width and height of the graph this would override the responsive property even if the property is set to true.<br>
**donut(*optional*):** If provided and is true the output graph would be a donut pie chart.<br>
**duration(*optional*):** The transition duration.  The default value is 250.<br>
**half(*optional*):** If provided and is true the output graph is halved.<br>
**height(*required*):** The height of the output graph.<br>
**hideLegend(*optional*):** If provided and is true the output graph does not have a legend.<br>
**responsive(*optional*):** If provided and is true the output graph is responsive.<br>
**width(*optional*):** The width of the output graph.<br>

####Line Graph
![Line Chart](https://github.com/sattarab/ng-nvd3/raw/master/img/line-chart.png "Line Chart")
#####How to use?

```
**Angular-directive in html:**
<nvd3-line-graph ...></nvd3-line-graph>
```

**Important Note:**
Setting specific values for width or height in div-class would not make the graph responsive anymore.<br>

**Attributes:**

**chartId(*recommended*):** The unique id of the line chart on that page. It is required if there are multiple line charts on the same html page.<br>
**data(*required*):** The data that is to be displayed on the line chart. <br>
**div-class(*optional*):** For custom styling of the div that would contain the chart. This can be used for setting the width and height of the div that contains the line chart.<br>
**duration(*optional*):** The transition duration. The default value is 250.<br>
**guide(*optional*):** If provided and is true the output graph does have a legend.<br>
**height(*required*):** The height of the output graph.<br>
**responsive(*optional*):** If provided and is true the output graph is responsive.<br>
**width(*optional*):** The width of the output graph.<br>
**xlabel(*optional*):** The x-axis label of the graph.<br>
**xformat(*optional*):** The format of data on the x-axis.<br>
**ylabel(*optional*):** The y-axis label of the graph.<br>
**yformat(*optional*):** The format of data on the y-axis.<br>

####Scatter Graph
#####How to use?

```
**Angular-directive in html:**
<nvd3-scatter-graph ...></nvd3-scatter-graph>
```

**Important Note:**
Setting specific values for width or height in div-class would not make the graph responsive anymore.<br>

**Attributes:**

**chartId(*recommended*):** The unique id of the scatter chart on that page. It is required if there are multiple scatter charts on the same html page.<br>
**data(*required*):** The data that is to be displayed on the scatter chart. <br>
**div-class(*optional*):** For custom styling of the div that would contain the chart. This can be used for setting the width and height of the div that contains the scatter chart.<br>
**duration(*optional*):** The transition duration. The default value is 250.<br>
**forceLine(*optional*):** If provided and is true a line is drawn through the points on the scatter plot.<br>
**height(*required*):** The height of the output graph.<br>
**responsive(*optional*):** If provided and is true the graph is responsive.<br>
**width(*optional*):** The width of the output graph.<br>
**xformat(*optional*):** The format of data on the x-axis.<br>
**yformat(*optional*):** The format of data on the y-axis.<br>

####Bar Graph
![Bar Chart](https://github.com/sattarab/ng-nvd3/raw/master/img/horizontal-bar.png "Horizontal Bar Chart")
#####How to use?

```
**Angular-directive in html:**
<nvd3-bar-graph ...></nvd3-bar-graph>
```

**Important Note:**
Setting specific values for width or height in div-class would not make the graph responsive anymore.<br>

**Attributes:**

**chartId(*recommended*):** The unique id of the chart on that page. It is required if there are multiple charts on the same html page.<br>
**data(*required*):** The data that is to be displayed on the chart. <br>
**div-class(*optional*):** For custom styling of the div that would contain the chart. This can be used for setting the width and height of the div that contains the horizontal bar chart.<br>
**duration(*optional*):** The transition duration. The default value is 250.<br>
**height(*required*):** The height of the output graph.<br>
**horizontal(*optional*):** Default false.If provided and is true the resultant output graph is a horizontal bar graph.<br>
**responsive(*optional*):** If provided and is true the output graph is responsive.<br>
**showControls(*optional*):** If provided and true it would show controls for the graph.<br>
**showValues(*optional*):** If provided and true it would show values on the graph.<br>
**tooltips(*optional*):** If provided and true it would show tooltip when the values are hovered on the graph.<br>
**width(*optional*):** The width of the output graph.<br>
**yformat(*optional*):** The format of data on the y-axis.<br>


####Line Plus Bar Graph
![Line Plus Bar Graph](https://github.com/sattarab/ng-nvd3/raw/master/img/line-plus-bar-chart.png "Line Plus Bar Graph")
#####How to use?

```
**Angular-directive in html:**
<nvd3-line-plus-bar-graph ...></nvd3-line-plus-bar-graph>
```

**Important Note:**
Setting specific values for width or height in div-class would not make the graph responsive anymore.<br>

**Attributes:**

**chartId(*recommended*):** The unique id of the chart on that page. It is required if there are multiple charts on the same html page.<br>
**data(*required*):** The data that is to be displayed on the chart. <br>
**div-class(*optional*):** For custom styling of the div that would contain the chart. This can be used for setting the width and height of the div that contains the horizontal bar chart.<br>
**duration(*optional*):** The transition duration. The default value is 250.<br>
**height(*required*):** The height of the output graph.<br>
**responsive(*optional*):** If provided and is true the output graph is responsive.<br>
**width(*optional*):** The width of the output graph.<br>
**xformat(*optional*):** The format of data on the x-axis.<br>
**xlabel(*optional*):** The x-axis label of the graph.<br>
**y1format(*optional*):** The format of data on the y1-axis.<br>
**y2format(*optional*):** The format of data on the y2-axis.<br>
**y1label(*optional*):** The y1-axis label of the graph.<br>
**y2label(*optional*):** The y2-axis label of the graph.<br>


####Contributor(s)
sattarab (c2sattara1@gmail.com)
RenatoUtsch (https://github.com/RenatoUtsch)

####Issues
If you find any issues please log it with a little description of how to re-produce it. I will try to resolve as soon as possible.

####Version
0.0.3 (Current latest stable version)

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
