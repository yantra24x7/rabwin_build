function _inherits(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&_setPrototypeOf(n,t)}function _setPrototypeOf(n,t){return(_setPrototypeOf=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function _createSuper(n){var t=_isNativeReflectConstruct();return function(){var e,a=_getPrototypeOf(n);if(t){var l=_getPrototypeOf(this).constructor;e=Reflect.construct(a,arguments,l)}else e=a.apply(this,arguments);return _possibleConstructorReturn(this,e)}}function _possibleConstructorReturn(n,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(n):t}function _assertThisInitialized(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}function _getPrototypeOf(n){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function _defineProperties(n,t){for(var e=0;e<t.length;e++){var a=t[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),n}function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{WXiH:function(n,t,e){"use strict";e.r(t);var a=e("8Y7J"),l=function n(){_classCallCheck(this,n)},i=e("NcP4"),c=e("xYTU"),o=e("t68o"),_=e("zbXB"),g=e("9AJC"),r=e("fo5T"),u=e("XePT"),s=e("pMnS"),p=e("ITXy"),h=e("B0QU"),m=e("SVse"),C=e("G0yt"),O=e("6n/F"),P=function(){function n(t,e,a,l){_classCallCheck(this,n),this.nav=e,this.http=a,this.service=l,this.change=0,this.itemList=[],this.Highcharts=O,this.data=[],this.data1=[],this.myLoader=!1,this.customOptions={loop:!0,mouseDrag:!1,touchDrag:!1,pullDrag:!1,dots:!1,navSpeed:10,autoplay:!0,animateOut:"slideOutUp",animateIn:"slideInUp",navText:["",""],responsive:{0:{items:1},400:{items:2},740:{items:3},940:{items:4}},nav:!0},this.nav.show(),t.interval=2e3,t.keyboard=!0,t.pauseOnHover=!0}return _createClass(n,[{key:"scrollToTop",value:function(n){n.scrollTop=this.change}},{key:"ngOnInit",value:function(){var n=this;this.myLoader=!0,console.log(this.change),this.service.god().subscribe((function(t){for(var e in n.machine_response=t,console.log(n.change),n.ltime=n.machine_response[0].up_time,n.myLoader=!1,n.machine_response){for(var a in n.chart_loop=n.machine_response[e].data,n.data=[],n.data1=[],n.machine_response[e].data)n.data.push(n.machine_response[e].data[a].time),n.data1.push(n.machine_response[e].data[a].count),n.reflect=n.machine_response[e].status;O.chart("partcycle"+e,{chart:{renderTo:"container"+e,zoomType:"xy",height:120},exporting:{enabled:!1},credits:{enabled:!1},title:{text:""},subtitle:{text:""},xAxis:[{categories:n.data,crosshair:!1,labels:{enabled:!0}}],yAxis:[{gridLineColor:"#45B734",labels:{enabled:!1},title:{text:""}},{title:{text:""},opposite:!1}],tooltip:{shared:!0},series:[{showInLegend:!1,name:"Count",type:"column",yAxis:1,data:n.data1,color:"OPERATE"===n.reflect?"#1EAD55":"DISCONNECT"===n.reflect?"#6D6D6D":"#F81301",tooltip:{valueSuffix:" "}},{showInLegend:!1,name:"Parts",type:"spline",data:n.data1,color:"OPERATE"===n.reflect?"#1EAD55":"DISCONNECT"===n.reflect?"#6D6D6D":"#F81301",tooltip:{valueSuffix:""}}]})}})),setInterval((function(){n.service.god().subscribe((function(t){n.machine_response=t,n.ltime=n.machine_response[0].up_time})),n.change=n.change+400,console.log(n.change),n.change>=1200&&(n.change=0),n.scrollToBottom()}),1e5)}},{key:"ngAfterViewChecked",value:function(){this.scrollToBottom()}},{key:"scrollToBottom",value:function(){this.scrollBottom.nativeElement.scrollTop=this.change}}]),n}(),M=e("cXjN"),b=e("IheW"),d=e("xjKI"),f=a.rb({encapsulation:0,styles:[['rect.highcharts-background{opacity:.3}.carousel-caption[_ngcontent-%COMP%]{background-color:#11d525}.frame[_ngcontent-%COMP%]{height:95%;position:absolute;width:100%;top:0;margin-top:10px;background-color:gray;overflow:scroll}.owl-carousel[_ngcontent-%COMP%]   .owl-item[_ngcontent-%COMP%]{min-height:1px;float:left;-webkit-backface-visibility:hidden;-webkit-touch-callout:none;color:#9acd32}.owl-item.ng-tns-c11-20.active.ng-trigger.ng-trigger-autoHeight.ng-star-inserted[_ngcontent-%COMP%]{color:violet}button.test123[_ngcontent-%COMP%]{position:fixed;bottom:40px;right:5px;font-size:20px;text-align:center;border-radius:5px;outline:0;z-index:1}  circle-progress tspan{font-weight:600;fill:#3f3f3f}  .highcharts-yaxis-labels text{fill:#fff!important}  .highcharts-yaxis-grid .highcharts-grid-line{stroke:#d5d5d5}h2.sub_title[_ngcontent-%COMP%]{width:35%}#page_area.page[_ngcontent-%COMP%]{background-color:#fafafa}#page_area.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #dedede;margin-bottom:15px}#page_area.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   .sub_title[_ngcontent-%COMP%]{font-size:18px;font-weight:600;color:#1a1f3d;margin-bottom:15px}#page_area.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   .machine_identifier[_ngcontent-%COMP%]{list-style:none;display:flex}#page_area.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   .machine_identifier[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;align-items:center;margin-left:5px}#page_area.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   .machine_identifier[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::after{content:"|";padding-left:5px;color:#aeaeae}#page_area.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   .machine_identifier[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child::after{display:none}#page_area.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   .machine_identifier[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:16px;padding-right:4px}#page_area.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   .machine_identifier[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px;text-transform:capitalize}#page_area.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   .machine_identifier[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#11d525}#page_area.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   .machine_identifier[_ngcontent-%COMP%]   li.idle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#646262}#page_area.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   .machine_identifier[_ngcontent-%COMP%]   li.stop[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#ba1d11}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]{width:19%;margin:0 10px 20px 0}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_header[_ngcontent-%COMP%]{display:flex;align-items:flex-end;padding:10px 5px;justify-content:space-between}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_header[_ngcontent-%COMP%]   .machine_title[_ngcontent-%COMP%]{display:flex;align-items:center}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_header[_ngcontent-%COMP%]   .machine_title[_ngcontent-%COMP%]   .machine_name[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:14px;text-transform:uppercase;margin-bottom:0}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_header[_ngcontent-%COMP%]   .machine_title[_ngcontent-%COMP%]   .machine_name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;margin:0}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_header[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{margin:0;display:flex;align-items:center}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_header[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#34e31a;font-size:16px;padding-right:4px}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_header[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .progress_bar[_ngcontent-%COMP%]{display:flex;justify-content:center;padding-top:0}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .metrics[_ngcontent-%COMP%]{list-style:none;display:flex;align-items:center;justify-content:space-between;padding:15px}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .metrics[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:10px;text-transform:uppercase}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .metrics[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:14px;font-weight:600}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .parts_sec[_ngcontent-%COMP%]{text-align:center}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .parts_sec[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:14px;text-transform:uppercase;font-weight:600}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .machine_values[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;text-align:center;padding:5px 0;margin:0}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .machine_values[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:700}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .graph[_ngcontent-%COMP%]   figure.highcharts-figure[_ngcontent-%COMP%]{margin:0}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .graph_text[_ngcontent-%COMP%]{font-size:12px;text-align:center;padding:5px 0}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .graph_text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.active[_ngcontent-%COMP%]{border:1px solid #16a500}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.active[_ngcontent-%COMP%]   .machine_header[_ngcontent-%COMP%]{color:#fff;background:#16a500}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.active[_ngcontent-%COMP%]   .machine_header[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#34e31a}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.active[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]{background:#16a5002e}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.active[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .parts_sec[_ngcontent-%COMP%]{background:#16a5004f;color:#fff}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.active[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .parts_sec[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#056b2d}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.active[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .machine_values[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{background:#16a500;color:#fff;border-bottom:1px solid #056b2d}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.active[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .graph_text[_ngcontent-%COMP%]{background:#16a500;color:#fff}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.idle[_ngcontent-%COMP%]{border:1px solid #888}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.idle[_ngcontent-%COMP%]   .machine_header[_ngcontent-%COMP%]{color:#fff;background:#888}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.idle[_ngcontent-%COMP%]   .machine_header[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#646262}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.idle[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]{background:#8888883b}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.idle[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .parts_sec[_ngcontent-%COMP%]{background:#88888885;color:#fff}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.idle[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .machine_values[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{background:#888;color:#fff;border-bottom:1px solid #646262}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.idle[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .graph[_ngcontent-%COMP%]{height:120px;min-height:120px}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.idle[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .graph_text[_ngcontent-%COMP%]{background:#888;color:#fff}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.stop[_ngcontent-%COMP%]{border:1px solid #f81301}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.stop[_ngcontent-%COMP%]   .machine_header[_ngcontent-%COMP%]{color:#fff;background:#f81301}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.stop[_ngcontent-%COMP%]   .machine_header[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#ba1d11}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.stop[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]{background:#daa5a159}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.stop[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .parts_sec[_ngcontent-%COMP%]{background:#f81301ab;color:#fff}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.stop[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .machine_values[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{background:#f81301;color:#fff;border-bottom:1px solid #ba1d11}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.stop[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .graph_text[_ngcontent-%COMP%]{background:#f81301;color:#fff}@media only screen and (min-width:834px) and (max-width:1112px){#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]{width:31%;margin:0 6px 14px}}@media only screen and (min-width:834px) and (max-width:1112px) and (orientation:landscape){#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]{width:22%;margin:0 11px 17px 12px}}@media only screen and (min-width:768px) and (max-width:1024px) and (orientation:landscape){#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]{margin:0 11px 17px 12px}}@media only screen and (max-width:768px){#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]{width:31%;margin:0 10px 20px 0}}@media only screen and (max-width:600px){#page_area.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   .machine_identifier[_ngcontent-%COMP%]{margin-bottom:10px}#page_area.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   .machine_identifier[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:10px}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]{width:100%;margin:0 0 20px}}@media only screen and (min-device-width:320px) and (max-device-width:768px) and (orientation:landscape){#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]{width:48%;margin:0 10px 20px 0}ng-deep.highcharts-container[_ngcontent-%COMP%]{width:100%!important}}.highcharts-data-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], .highcharts-figure[_ngcontent-%COMP%]{min-width:310px;max-width:800px;margin:1em auto}#container[_ngcontent-%COMP%]{height:400px}.highcharts-data-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{font-family:Verdana,sans-serif;border-collapse:collapse;border:1px solid #ebebeb;margin:10px auto;text-align:center;width:100%;max-width:500px}.highcharts-data-table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%]{font-size:1.2em;color:#555}.highcharts-data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-weight:600}.highcharts-data-table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%], .highcharts-data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .highcharts-data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:.5em}.highcharts-data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], .highcharts-data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even){background:#f8f8f8}.highcharts-data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background:#f1f7ff}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.stop[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .metrics[_ngcontent-%COMP%]{color:#f81301;font-weight:600}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.active[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .metrics[_ngcontent-%COMP%]{color:#16a500;font-weight:600}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.idle[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .metrics[_ngcontent-%COMP%]{color:#646262;font-weight:600}@media only screen and (min-width:1920px){#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .metrics[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;-webkit-margin-after:-.5em;margin-block-end:-.5em}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .metrics[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:40px}.activemenu[_ngcontent-%COMP%]   #page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_header[_ngcontent-%COMP%]   .machine_title[_ngcontent-%COMP%]   .machine_name[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:67px}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_header[_ngcontent-%COMP%]   .machine_title[_ngcontent-%COMP%]   .machine_name[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:65px}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .machine_values[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:30px;padding:0;font-weight:500}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .parts_sec[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:50px}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]{width:32%;margin:0 11px 20px}  circle-progress tspan:nth-child(1){font-size:54px}  circle-progress tspan:nth-child(2){font-size:50px}  circle-progress tspan:nth-child(3){font-size:47px}.machine_item[_ngcontent-%COMP%]   .machine_header[_ngcontent-%COMP%]   .machine_title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:66px;margin-top:6px}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_header[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:40px}#page_area.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   .sub_title[_ngcontent-%COMP%]{font-size:25px}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_header[_ngcontent-%COMP%]{align-items:center}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .progress_bar[_ngcontent-%COMP%]{padding-top:20px}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .metrics[_ngcontent-%COMP%]{padding:5px 15px 15px}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_header[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{margin:0 -7px}}']],data:{}});function x(n){return a.Pb(0,[(n()(),a.tb(0,0,null,null,1,"div",[["class","spinner"]],null,null,null,null,null)),(n()(),a.tb(1,0,null,null,0,"img",[["src","assets/images/spinner.gif"]],null,null,null,null,null))],null,null)}function D(n){return a.Pb(0,[(n()(),a.tb(0,0,null,null,1,"circle-progress",[["animation","true"],["animationDuration","300"],["innerStrokeColor","#f2f2f2"],["outerStrokeColor","#1EAD55"],["radius","80"]],null,null,null,p.b,p.a)),a.sb(1,770048,null,0,h.a,[h.b,a.k,m.d],{radius:[0,"radius"],percent:[1,"percent"],outerStrokeColor:[2,"outerStrokeColor"],innerStrokeColor:[3,"innerStrokeColor"],animation:[4,"animation"],animationDuration:[5,"animationDuration"]},null)],(function(n,t){n(t,1,0,"80",a.xb(1,"",null==t.parent.context.$implicit?null:t.parent.context.$implicit.oee,""),"#1EAD55","#f2f2f2","true","300")}),null)}function y(n){return a.Pb(0,[(n()(),a.tb(0,0,null,null,1,"circle-progress",[["animation","true"],["animationDuration","300"],["innerStrokeColor","#f2f2f2"],["outerStrokeColor","#F81301"],["radius","80"]],null,null,null,p.b,p.a)),a.sb(1,770048,null,0,h.a,[h.b,a.k,m.d],{radius:[0,"radius"],percent:[1,"percent"],outerStrokeColor:[2,"outerStrokeColor"],innerStrokeColor:[3,"innerStrokeColor"],animation:[4,"animation"],animationDuration:[5,"animationDuration"]},null)],(function(n,t){n(t,1,0,"80",a.xb(1,"",null==t.parent.context.$implicit?null:t.parent.context.$implicit.oee,""),"#F81301","#f2f2f2","true","300")}),null)}function v(n){return a.Pb(0,[(n()(),a.tb(0,0,null,null,1,"circle-progress",[["animation","true"],["animationDuration","300"],["innerStrokeColor","#f2f2f2"],["outerStrokeColor","#6D6D6D"],["radius","80"]],null,null,null,p.b,p.a)),a.sb(1,770048,null,0,h.a,[h.b,a.k,m.d],{radius:[0,"radius"],percent:[1,"percent"],outerStrokeColor:[2,"outerStrokeColor"],innerStrokeColor:[3,"innerStrokeColor"],animation:[4,"animation"],animationDuration:[5,"animationDuration"]},null)],(function(n,t){n(t,1,0,"80",a.xb(1,"",null==t.parent.context.$implicit?null:t.parent.context.$implicit.oee,""),"#6D6D6D","#f2f2f2","true","300")}),null)}function w(n){return a.Pb(0,[(n()(),a.tb(0,0,null,null,42,"div",[["class","machine_item"]],[[2,"stop",null],[2,"active",null],[2,"idle",null]],null,null,null,null)),(n()(),a.tb(1,0,null,null,9,"div",[["class","machine_header"]],null,null,null,null,null)),(n()(),a.tb(2,0,null,null,5,"div",[["class","machine_title"]],null,null,null,null,null)),(n()(),a.tb(3,0,null,null,1,"span",[["class","material-icons"]],null,null,null,null,null)),(n()(),a.Nb(-1,null,[" check_circle_outline "])),(n()(),a.tb(5,0,null,null,2,"div",[["class","machine_name pl-2"]],null,null,null,null,null)),(n()(),a.tb(6,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),a.Nb(7,null,["",""])),(n()(),a.tb(8,0,null,null,2,"p",[["class","status"]],null,null,null,null,null)),(n()(),a.tb(9,0,null,null,1,"i",[["class","material-icons"]],null,null,null,null,null)),(n()(),a.Nb(-1,null,[" fiber_manual_record "])),(n()(),a.tb(11,0,null,null,31,"div",[["class","machine_body"]],null,null,null,null,null)),(n()(),a.tb(12,0,null,null,6,"div",[["class","progress_bar"]],null,null,null,null,null)),(n()(),a.ib(16777216,null,null,1,null,D)),a.sb(14,16384,null,0,m.n,[a.O,a.L],{ngIf:[0,"ngIf"]},null),(n()(),a.ib(16777216,null,null,1,null,y)),a.sb(16,16384,null,0,m.n,[a.O,a.L],{ngIf:[0,"ngIf"]},null),(n()(),a.ib(16777216,null,null,1,null,v)),a.sb(18,16384,null,0,m.n,[a.O,a.L],{ngIf:[0,"ngIf"]},null),(n()(),a.tb(19,0,null,null,15,"ul",[["class","metrics list-unstyle"]],null,null,null,null,null)),(n()(),a.tb(20,0,null,null,4,"li",[],null,null,null,null,null)),(n()(),a.tb(21,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),a.Nb(-1,null,["Availability"])),(n()(),a.tb(23,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),a.Nb(24,null,["","%"])),(n()(),a.tb(25,0,null,null,4,"li",[],null,null,null,null,null)),(n()(),a.tb(26,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),a.Nb(-1,null,["Performance"])),(n()(),a.tb(28,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),a.Nb(29,null,["","%"])),(n()(),a.tb(30,0,null,null,4,"li",[],null,null,null,null,null)),(n()(),a.tb(31,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),a.Nb(-1,null,["Quality"])),(n()(),a.tb(33,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),a.Nb(34,null,["","%"])),(n()(),a.tb(35,0,null,null,2,"div",[["class","parts_sec d-none"]],null,null,null,null,null)),(n()(),a.tb(36,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),a.Nb(-1,null,["Parts"])),(n()(),a.tb(38,0,null,null,4,"div",[["class","machine_values"]],null,null,null,null,null)),(n()(),a.tb(39,0,null,null,3,"p",[],null,null,null,null,null)),(n()(),a.Nb(-1,null,["Actual / Plan : "])),(n()(),a.tb(41,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),a.Nb(42,null,[""," /",""]))],(function(n,t){n(t,14,0,"OPERATE"===(null==t.context.$implicit?null:t.context.$implicit.status)),n(t,16,0,"STOP"===(null==t.context.$implicit?null:t.context.$implicit.status)),n(t,18,0,"DISCONNECT"===(null==t.context.$implicit?null:t.context.$implicit.status))}),(function(n,t){n(t,0,0,"STOP"===t.context.$implicit.status,"OPERATE"===t.context.$implicit.status,"DISCONNECT"===t.context.$implicit.status),n(t,7,0,null==t.context.$implicit?null:t.context.$implicit.machine),n(t,24,0,null==t.context.$implicit?null:t.context.$implicit.run),n(t,29,0,null==t.context.$implicit?null:t.context.$implicit.efficiency),n(t,34,0,null==t.context.$implicit?null:t.context.$implicit.quality),n(t,42,0,null==t.context.$implicit?null:t.context.$implicit.actual,null==t.context.$implicit?null:t.context.$implicit.tar)}))}function k(n){return a.Pb(0,[a.Hb(0,m.e,[a.t]),a.Lb(671088640,1,{scrollBottom:0}),(n()(),a.tb(2,0,[[1,0],["scrollBottom",1]],null,20,"section",[["class","page kpi"],["id","page_area"]],null,null,null,null,null)),(n()(),a.ib(16777216,null,null,1,null,x)),a.sb(4,16384,null,0,m.n,[a.O,a.L],{ngIf:[0,"ngIf"]},null),(n()(),a.tb(5,0,null,null,16,"div",[["class","section_top_padding"]],null,null,null,null,null)),(n()(),a.tb(6,0,null,null,15,"div",[["class","container-fluid"]],null,null,null,null,null)),(n()(),a.tb(7,0,null,null,11,"div",[["class","page_title_sec"]],null,null,null,null,null)),(n()(),a.tb(8,0,null,null,1,"h2",[["class","sub_title"]],null,null,null,null,null)),(n()(),a.Nb(-1,null,[" OEE Dashboard "])),(n()(),a.tb(10,0,null,null,8,"div",[["class","d-flex justify-content-end"]],null,null,null,null,null)),(n()(),a.tb(11,0,null,null,1,"h2",[["class","sub_title"]],null,null,null,null,null)),(n()(),a.Nb(-1,null,[" Last Update Time & Date "])),(n()(),a.tb(13,0,null,null,5,"h2",[["class","sub_title"]],null,null,null,null,null)),(n()(),a.Nb(14,null,[" ",""])),a.Jb(15,2),(n()(),a.tb(16,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),a.Nb(17,null,[" "," "])),a.Jb(18,2),(n()(),a.tb(19,0,null,null,2,"div",[["class","machine_list"]],null,null,null,null,null)),(n()(),a.ib(16777216,null,null,1,null,w)),a.sb(21,278528,null,0,m.m,[a.O,a.L,a.r],{ngForOf:[0,"ngForOf"]},null),(n()(),a.tb(22,0,null,null,0,"div",[],null,null,null,null,null))],(function(n,t){var e=t.component;n(t,4,0,e.myLoader),n(t,21,0,e.machine_response)}),(function(n,t){var e=t.component,l=a.Ob(t,14,0,n(t,15,0,a.Fb(t,0),e.ltime,"h:mm:ss a"));n(t,14,0,l);var i=a.Ob(t,17,0,n(t,18,0,a.Fb(t,0),e.ltime,"dd-MM-yyyy"));n(t,17,0,i)}))}var z=a.pb("app-kpi-dashboard",P,(function(n){return a.Pb(0,[(n()(),a.tb(0,0,null,null,2,"app-kpi-dashboard",[],null,null,null,k,f)),a.Kb(512,null,C.j,C.j,[]),a.sb(2,8503296,null,0,P,[C.j,M.a,b.c,d.a],null,null)],(function(n,t){n(t,2,0)}),null)}),{},{},[]),S=(e("mrSG"),e("XNiG"));e("VRyK"),e("LRne"),e("Cfvw"),e("vkgz"),e("pLZG"),e("eIep"),e("SxV6"),e("IzEk"),e("zP0r"),e("lJxs"),e("128B"),e("3E0/");var E=e("iInd"),j=function(){function n(t){_classCallCheck(this,n),this.eventManager=t,this.resizeSubject=new S.a,this.eventManager.addGlobalEventListener("window","resize",this.onResize.bind(this)),this.eventManager.addGlobalEventListener("window","onload",this.onLoaded.bind(this))}return _createClass(n,[{key:"onResize$",get:function(){return this.resizeSubject.asObservable()}},{key:"onResize",value:function(n){this.resizeSubject.next(n.target)}},{key:"onLoaded",value:function(n){this.windowWidth=n.target}}]),n}(),T=function(){function n(t){_classCallCheck(this,n),this.errorHandler=t}return _createClass(n,[{key:"log",value:function(n){for(var t,e=arguments.length,l=new Array(e>1?e-1:0),i=1;i<e;i++)l[i-1]=arguments[i];Object(a.X)()&&(t=console).log.apply(t,[n].concat(l))}},{key:"error",value:function(n){this.errorHandler.handleError(n)}},{key:"warn",value:function(n){for(var t,e=arguments.length,a=new Array(e>1?e-1:0),l=1;l<e;l++)a[l-1]=arguments[l];(t=console).warn.apply(t,[n].concat(a))}}]),n}(),N=new a.p("WindowToken"),I=function(){function n(){_classCallCheck(this,n)}return _createClass(n,[{key:"nativeWindow",get:function(){throw new Error("Not implemented.")}}]),n}(),$=function(n){_inherits(e,n);var t=_createSuper(e);function e(){return _classCallCheck(this,e),t.call(this)}return _createClass(e,[{key:"nativeWindow",get:function(){return window}}]),e}(I);function L(n,t){return Object(m.E)(t)?n.nativeWindow:{setTimeout:function(n,t){},clearTimeout:function(n){}}}var A=new a.p("DocumentToken"),R=function(){function n(){_classCallCheck(this,n)}return _createClass(n,[{key:"nativeDocument",get:function(){throw new Error("Not implemented.")}}]),n}(),B=function(n){_inherits(e,n);var t=_createSuper(e);function e(){return _classCallCheck(this,e),t.call(this)}return _createClass(e,[{key:"nativeDocument",get:function(){return document}}]),e}(R);function F(n,t){return Object(m.E)(t)?n.nativeDocument:{hidden:!1,visibilityState:"visible"}}var J=function n(){_classCallCheck(this,n)},H=e("cUpR"),W=e("s7LF"),q=e("QQfA"),V=e("IP0z"),X=e("gavF"),G=e("POq0"),U=e("Xd0L"),Z=e("/Co4"),Q=e("JjoW"),K=e("/HVE"),Y=e("qJ5m"),nn=e("Mz6y"),tn=e("5GAg"),en=e("DkaU"),an=e("s6ns"),ln=e("821u"),cn=e("OIZN"),on=e("Wc//"),_n=e("Fwaw"),gn=e("zMNK"),rn=e("hOhj"),un=e("Gi4r"),sn=e("oapL"),pn=e("HsOI"),hn=e("ZwOa"),mn=e("igqZ"),Cn=e("02hT"),On=e("Q+lL"),Pn=e("pBi1"),Mn=e("lT8R"),bn=e("BV1i"),dn=e("elxJ"),fn=e("5Bek"),xn=e("c9fC"),Dn=e("FVPZ"),yn=e("qJ50"),vn=e("AaDx"),wn=e("mkRZ"),kn=e("dFDH"),zn=e("rWV4"),Sn=e("zQui"),En=e("8rEH"),jn=e("r0V8"),Tn=e("10VE"),Nn=e("BzsH"),In=e("cw5Z"),$n=e("hfXE"),Ln=e("ECJv"),An=e("EApP"),Rn=e("1Q6g"),Bn=function n(){_classCallCheck(this,n)};e.d(t,"KpiDashboardModuleNgFactory",(function(){return Fn}));var Fn=a.qb(l,[],(function(n){return a.Cb([a.Db(512,a.j,a.bb,[[8,[i.a,c.a,c.b,o.a,_.b,_.a,g.a,g.b,g.h,g.i,g.e,g.f,g.g,r.a,u.a,s.a,z]],[3,a.j],a.w]),a.Db(4608,m.p,m.o,[a.t,[2,m.L]]),a.Db(4608,I,$,[]),a.Db(5120,N,L,[I,a.A]),a.Db(4608,j,j,[H.d]),a.Db(4608,R,B,[]),a.Db(5120,A,F,[R,a.A]),a.Db(4608,T,T,[a.l]),a.Db(4608,W.D,W.D,[]),a.Db(4608,W.g,W.g,[]),a.Db(4608,q.c,q.c,[q.i,q.e,a.j,q.h,q.f,a.q,a.y,m.d,V.b,[2,m.j]]),a.Db(5120,q.j,q.k,[q.c]),a.Db(5120,X.a,X.d,[q.c]),a.Db(4608,G.c,G.c,[]),a.Db(4608,U.b,U.b,[]),a.Db(5120,Z.a,Z.b,[q.c]),a.Db(5120,Q.a,Q.b,[q.c]),a.Db(4608,H.e,U.c,[[2,U.g],[2,U.l]]),a.Db(4608,U.a,U.w,[[2,U.f],K.a]),a.Db(5120,Y.b,Y.a,[[3,Y.b]]),a.Db(5120,nn.b,nn.c,[q.c]),a.Db(135680,tn.h,tn.h,[a.y,K.a]),a.Db(4608,en.e,en.e,[a.L]),a.Db(5120,an.c,an.d,[q.c]),a.Db(135680,an.e,an.e,[q.c,a.q,[2,m.j],[2,an.b],an.c,[3,an.e],q.e]),a.Db(4608,ln.i,ln.i,[]),a.Db(5120,ln.a,ln.b,[q.c]),a.Db(5120,cn.c,cn.a,[[3,cn.c]]),a.Db(4608,C.v,C.v,[a.j,a.q,C.jb,C.w]),a.Db(4608,on.a,on.a,[]),a.Db(1073742336,m.c,m.c,[]),a.Db(1073742336,J,J,[]),a.Db(1073742336,W.C,W.C,[]),a.Db(1073742336,W.m,W.m,[]),a.Db(1073742336,W.z,W.z,[]),a.Db(1073742336,V.a,V.a,[]),a.Db(1073742336,U.l,U.l,[[2,U.d],[2,H.f]]),a.Db(1073742336,K.b,K.b,[]),a.Db(1073742336,U.v,U.v,[]),a.Db(1073742336,_n.c,_n.c,[]),a.Db(1073742336,gn.g,gn.g,[]),a.Db(1073742336,rn.c,rn.c,[]),a.Db(1073742336,q.g,q.g,[]),a.Db(1073742336,X.c,X.c,[]),a.Db(1073742336,X.b,X.b,[]),a.Db(1073742336,un.c,un.c,[]),a.Db(1073742336,sn.c,sn.c,[]),a.Db(1073742336,G.d,G.d,[]),a.Db(1073742336,pn.e,pn.e,[]),a.Db(1073742336,hn.c,hn.c,[]),a.Db(1073742336,mn.e,mn.e,[]),a.Db(1073742336,U.m,U.m,[]),a.Db(1073742336,U.t,U.t,[]),a.Db(1073742336,Cn.a,Cn.a,[]),a.Db(1073742336,On.a,On.a,[]),a.Db(1073742336,U.q,U.q,[]),a.Db(1073742336,Z.c,Z.c,[]),a.Db(1073742336,Q.d,Q.d,[]),a.Db(1073742336,Pn.b,Pn.b,[]),a.Db(1073742336,Pn.a,Pn.a,[]),a.Db(1073742336,Mn.a,Mn.a,[]),a.Db(1073742336,bn.a,bn.a,[]),a.Db(1073742336,U.x,U.x,[]),a.Db(1073742336,U.n,U.n,[]),a.Db(1073742336,dn.a,dn.a,[]),a.Db(1073742336,fn.c,fn.c,[]),a.Db(1073742336,xn.a,xn.a,[]),a.Db(1073742336,Dn.a,Dn.a,[]),a.Db(1073742336,yn.e,yn.e,[]),a.Db(1073742336,Y.c,Y.c,[]),a.Db(1073742336,tn.a,tn.a,[]),a.Db(1073742336,nn.e,nn.e,[]),a.Db(1073742336,en.c,en.c,[]),a.Db(1073742336,vn.a,vn.a,[]),a.Db(1073742336,wn.a,wn.a,[]),a.Db(1073742336,kn.d,kn.d,[]),a.Db(1073742336,zn.j,zn.j,[]),a.Db(1073742336,an.k,an.k,[]),a.Db(1073742336,Sn.p,Sn.p,[]),a.Db(1073742336,En.m,En.m,[]),a.Db(1073742336,ln.j,ln.j,[]),a.Db(1073742336,jn.d,jn.d,[]),a.Db(1073742336,jn.c,jn.c,[]),a.Db(1073742336,Tn.i,Tn.i,[]),a.Db(1073742336,Nn.b,Nn.b,[]),a.Db(1073742336,cn.d,cn.d,[]),a.Db(1073742336,C.c,C.c,[]),a.Db(1073742336,C.f,C.f,[]),a.Db(1073742336,C.g,C.g,[]),a.Db(1073742336,C.k,C.k,[]),a.Db(1073742336,C.l,C.l,[]),a.Db(1073742336,C.r,C.r,[]),a.Db(1073742336,C.t,C.t,[]),a.Db(1073742336,C.x,C.x,[]),a.Db(1073742336,C.z,C.z,[]),a.Db(1073742336,C.D,C.D,[]),a.Db(1073742336,C.G,C.G,[]),a.Db(1073742336,C.J,C.J,[]),a.Db(1073742336,C.M,C.M,[]),a.Db(1073742336,C.P,C.P,[]),a.Db(1073742336,C.U,C.U,[]),a.Db(1073742336,C.X,C.X,[]),a.Db(1073742336,C.Y,C.Y,[]),a.Db(1073742336,C.Z,C.Z,[]),a.Db(1073742336,C.y,C.y,[]),a.Db(1073742336,In.h,In.h,[]),a.Db(1073742336,$n.b,$n.b,[]),a.Db(1073742336,Ln.b,Ln.b,[]),a.Db(1073742336,An.i,An.i,[]),a.Db(1073742336,Rn.a,Rn.a,[]),a.Db(1073742336,E.p,E.p,[[2,E.u],[2,E.l]]),a.Db(1073742336,Bn,Bn,[]),a.Db(1073742336,h.c,h.c,[]),a.Db(1073742336,l,l,[]),a.Db(256,U.e,U.i,[]),a.Db(256,In.p,"en-US",[]),a.Db(256,An.b,{default:An.a,config:{timeOut:2e3,positionClass:"toast-top-center",preventDuplicates:!0}},[]),a.Db(1024,E.j,(function(){return[[{path:"",component:P}]]}),[]),a.Db(256,h.b,{radius:50,space:-12,outerStrokeWidth:12,innerStrokeWidth:12,showSubtitle:!0,subtitle:"OEE"},[])])}))}}]);