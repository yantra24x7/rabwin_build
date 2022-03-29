import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/Nav/navbar.service';
declare var Highcharts: any;
@Component({
  selector: 'app-trendingchart',
  templateUrl: './trendingchart.component.html',
  styleUrls: ['./trendingchart.component.scss']
})
export class TrendingchartComponent implements OnInit {

  constructor(private nav:NavbarService) { 
    this.nav.show()
  }

  ngOnInit() {
    var date = new Date(1167609700000 * 1000);
    var date1 = new Date(1167609500000 * 1000);
    var date2 = new Date(1167609400000 * 1000);
    var date3 = new Date(1167609300000 * 1000);
console.log(date.toUTCString())
console.log(date1.toUTCString())
console.log(date2.toUTCString())
console.log(date3.toUTCString())
    Highcharts.chart('container', {
      chart: {
        zoomType: 'x',
        backgroundColor: '#1A1A1A',
      },
      title: {
        text: 'Spindle'
      },
      subtitle: {
        text: document.ontouchstart === undefined ?
          'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
      },
      xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: {
          // day: '%B-%d-%Y-%I:%M-%p',
          // month: '%b \'%y'
          second: '%H:%M:%S %P',
          minute: '%H:%M',
          hour: '%H:%M',
          day: '%b. %e',
          week: '%b. %e',
          month: '%b. %y',
          year: '%Y'
        }
        ,labels: {
          formatter: function() {
            return Highcharts.dateFormat('%b. %e, %H:%M:%S', this.value);
          }
        }
      },
      yAxis: {
        title: {
          text: 'Spindle Speed',
         
        }
        
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        area: {
          fillColor: {
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1
            },
            stops: [
              [0, 'rgb(255, 255, 255)'],
              [1, 'rgb(240, 240, 255)']
          ]
          },
          marker: {
            radius: 2
          },
          lineWidth: 1,
          states: {
            hover: {
              lineWidth: 1
            }
          },
          threshold: null
        }
      },

      series: [{
        type: 'area',
        name: 'Spindle max value',
        color: '#FCAF26',
        lineWidth: 5,
        data: [
          [
		1167609300000,
		0.7537
	],
  [
		1167609400000,
		0.7538
	],
  [
		1167609500000,
		0.7540
	],
  [
		1167609600000,
		0.7545
	],
	
        ]
      }]
    });

  }

}
