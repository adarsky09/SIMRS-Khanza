/*
 Highcharts JS v6.1.2 (2018-08-31)
 X-range series

 (c) 2010-2017 Torstein Honsi, Lars A. V. Cabrera

 License: www.highcharts.com/license
*/
(function(g){"object"===typeof module&&module.exports?module.exports=g:"function"===typeof define&&define.amd?define(function(){return g}):g(Highcharts)})(function(g){(function(d){var g=d.addEvent,t=d.defined,q=d.seriesTypes.column,l=d.each,u=d.isNumber,r=d.isObject,m=d.merge,n=d.pick,v=d.seriesType,w=d.Axis,p=d.Point,x=d.Series;v("xrange","column",{colorByPoint:!0,dataLabels:{verticalAlign:"middle",inside:!0,formatter:function(){var a=this.point.partialFill;r(a)&&(a=a.amount);t(a)||(a=0);return 100*
a+"%"}},tooltip:{headerFormat:'\x3cspan style\x3d"font-size: 0.85em"\x3e{point.x} - {point.x2}\x3c/span\x3e\x3cbr/\x3e',pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.yCategory}\x3c/b\x3e\x3cbr/\x3e'},borderRadius:3,pointRange:0},{type:"xrange",parallelArrays:["x","x2","y"],requireSorting:!1,animate:d.seriesTypes.line.prototype.animate,cropShoulder:1,getExtremesFromAll:!0,getColumnMetrics:function(){function a(){l(c.series,function(a){var b=
a.xAxis;a.xAxis=a.yAxis;a.yAxis=b})}var b,c=this.chart;a();b=q.prototype.getColumnMetrics.call(this);a();return b},cropData:function(a,b,c,e){b=x.prototype.cropData.call(this,this.x2Data,b,c,e);b.xData=a.slice(b.start,b.end);return b},translatePoint:function(a){var b=this.xAxis,c=this.columnMetrics,e=this.options.minPointLength||0,d=a.plotX,k=n(a.x2,a.x+(a.len||0)),f=b.translate(k,0,0,0,1),k=f-d,h=this.chart.inverted,g=n(this.options.borderWidth,1)%2/2;e&&(e-=k,0>e&&(e=0),d-=e/2,f+=e/2);d=Math.max(d,
-10);f=Math.min(Math.max(f,-10),b.len+10);a.shapeArgs={x:Math.floor(Math.min(d,f))+g,y:Math.floor(a.plotY+c.offset)+g,width:Math.round(Math.abs(f-d)),height:Math.round(c.width),r:this.options.borderRadius};e=a.shapeArgs.x;f=e+a.shapeArgs.width;0>e||f>b.len?(e=Math.min(b.len,Math.max(0,e)),f=Math.max(0,Math.min(f,b.len)),b=f-e,a.dlBox=m(a.shapeArgs,{x:e,width:f-e,centerX:b?b/2:null})):a.dlBox=null;a.tooltipPos[0]+=h?0:k/2;a.tooltipPos[1]-=h?k/2:c.width/2;if(b=a.partialFill)r(b)&&(b=b.amount),u(b)||
(b=0),c=a.shapeArgs,a.partShapeArgs={x:c.x,y:c.y,width:c.width,height:c.height,r:this.options.borderRadius},a.clipRectArgs={x:c.x,y:c.y,width:Math.max(Math.round(k*b+(a.plotX-d)),0),height:c.height}},translate:function(){q.prototype.translate.apply(this,arguments);l(this.points,function(a){this.translatePoint(a)},this)},drawPoint:function(a,b){var c=this.chart.renderer,e=a.graphic,d=a.shapeType,g=a.shapeArgs,f=a.partShapeArgs,h=a.clipRectArgs;if(a.isNull)e&&(a.graphic=e.destroy());else{if(e)a.graphicOriginal[b](m(g));
else a.graphic=e=c.g("point").addClass(a.getClassName()).add(a.group||this.group),a.graphicOriginal=c[d](g).addClass(a.getClassName()).addClass("highcharts-partfill-original").add(e);f&&(a.graphicOverlay?(a.graphicOverlay[b](m(f)),a.clipRect.animate(m(h))):(a.clipRect=c.clipRect(h.x,h.y,h.width,h.height),a.graphicOverlay=c[d](f).addClass("highcharts-partfill-overlay").add(e).clip(a.clipRect)))}},drawPoints:function(){var a=this,b=a.getAnimationVerb();l(a.points,function(c){a.drawPoint(c,b)})},getAnimationVerb:function(){return this.chart.pointCount<
(this.options.animationLimit||250)?"animate":"attr"}},{init:function(){p.prototype.init.apply(this,arguments);var a=this.series.chart.options.chart.colorCount;this.y||(this.y=0);this.colorIndex=n(this.options.colorIndex,this.y%a);return this},setState:function(){p.prototype.setState.apply(this,arguments);this.series.drawPoint(this,this.series.getAnimationVerb())},getLabelConfig:function(){var a=p.prototype.getLabelConfig.call(this),b=this.series.yAxis.categories;a.x2=this.x2;a.yCategory=this.yCategory=
b&&b[this.y];return a},tooltipDateKeys:["x","x2"],isValid:function(){return"number"===typeof this.x&&"number"===typeof this.x2}});g(w,"afterGetSeriesExtremes",function(){var a=this.series,b,c;this.isXAxis&&(b=n(this.dataMax,-Number.MAX_VALUE),l(a,function(a){a.x2Data&&l(a.x2Data,function(a){a>b&&(b=a,c=!0)})}),c&&(this.dataMax=b))})})(g)});
