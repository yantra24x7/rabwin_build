import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/Nav/navbar.service';
declare var Highcharts: any;
import { LinearGauge, Annotations, ILoadEventArgs, LinearGaugeTheme } from '@syncfusion/ej2-lineargauge';
import { reduce } from 'highcharts';
LinearGauge.Inject(Annotations);
declare var Chart
@Component({
  selector: 'app-maintenancedb',
  templateUrl: './maintenancedb.component.html',
  styleUrls: ['./maintenancedb.component.scss']
})
export class MaintenancedbComponent implements OnInit {
  pulsecodevalue: any=[];
  servotemperature:any=[]
  servoload: any=[];
  servoload1: any=[];
  constructor(private nav:NavbarService) {
    this.nav.show()
   }

  ngOnInit(): void {  
    this.pulsecodevalue=[10,20,30,40,50]
    this.servotemperature=[10,20,30,40,50]
    this.servoload=[10,20,30,40,50]
    this.servoload1=[10,20]
    setTimeout(() => {
      for(let i=0;i<this.pulsecodevalue.length;i++){
        let gauge: LinearGauge = new LinearGauge(this.chart(this.pulsecodevalue[i]));
        gauge.appendTo('#rangeContainer'+i);
      }
      for(let i=0;i<this.servotemperature.length;i++){
        let gauge: LinearGauge = new LinearGauge(this.chart(this.servotemperature[i]));
        gauge.appendTo('#rangeContainers'+i);
      }
    }, 1000);

    setTimeout(() => {
for(let j=0;j<this.servoload.length;j++){
  new Chart('oilChart'+j, {
    type: 'doughnut',
    plugins: [{
      afterDraw: chart => {
        var needleValue = chart.chart.config.data.datasets[0].needleValue;
        var dataTotal = chart.chart.config.data.datasets[0].data.reduce((a, b) => a + b, 0);
        var angle = Math.PI + (1 / dataTotal * needleValue * Math.PI);
        var ctx = chart.chart.ctx;
        var cw = chart.chart.canvas.offsetWidth;
        var ch = chart.chart.canvas.offsetHeight;
        var cx = cw / 2;
        var cy = ch - 6;
  
        ctx.translate(cx, cy);
        ctx.rotate(angle);
        ctx.beginPath();
        ctx.moveTo(0, -3);
        ctx.lineTo(ch - 60, 0);
        ctx.lineTo(0, 3);
        ctx.fillStyle = 'rgb(256, 256, 256)';
        ctx.fill();
        ctx.rotate(-angle);
        ctx.translate(-cx, -cy);
        ctx.beginPath();
        ctx.arc(cx, cy, 5, 0, Math.PI * 2);
        ctx.fill();
      }
    }],
    data: {
      labels: [
 
      ],
      borderWidth: 0,
      datasets: [{
        data: [25, 25, 50],
        needleValue: this.servoload[j],
        backgroundColor: [
          '#96d617',
          '#f2f207',
          '#f21a07'
        ]
      }]
    },
    options: {
      layout: {
        padding: {
          bottom: 3
        },
      },
      tooltips: {
        enabled: false,
      },
      
      rotation: -Math.PI,
      cutoutPercentage: 50,
      circumference: Math.PI,
      legend: {
        display:false,
        position: 'left'
      },
      animation: {
        animateRotate: false,
        animateScale: true
      }
    }
  });
}
}, 1000);
setTimeout(() => {
  for(let j=0;j<this.servoload1.length;j++){
    new Chart('oilCharts'+j, {
      type: 'doughnut',
      plugins: [{
        afterDraw: chart => {
          var needleValue = chart.chart.config.data.datasets[0].needleValue;
          var dataTotal = chart.chart.config.data.datasets[0].data.reduce((a, b) => a + b, 0);
          var angle = Math.PI + (1 / dataTotal * needleValue * Math.PI);
          var ctx = chart.chart.ctx;
          var cw = chart.chart.canvas.offsetWidth;
          var ch = chart.chart.canvas.offsetHeight;
          var cx = cw / 2;
          var cy = ch - 6;
    
          ctx.translate(cx, cy);
          ctx.rotate(angle);
          ctx.beginPath();
          ctx.moveTo(0, -3);
          ctx.lineTo(ch - 20, 0);
          ctx.lineTo(0, 3);
          ctx.fillStyle = 'rgb(0, 0, 0)';
          ctx.fill();
          ctx.rotate(-angle);
          ctx.translate(-cx, -cy);
          ctx.beginPath();
          ctx.arc(cx, cy, 5, 0, Math.PI * 2);
          ctx.fill();
        }
      }],
      data: {
        labels: [
   
        ],
        
        datasets: [{
          data: [25, 25, 50],
          needleValue: this.servoload1[j],
          backgroundColor: [
            '#96d617',
            '#f2f207',
            '#f21a07'
          ]
        }]
      },
      options: {
        layout: {
          padding: {
            bottom: 3
          }
        },
        tooltips: {
          enabled: false,
        },
        rotation: -Math.PI,
        cutoutPercentage: 30,
        circumference: Math.PI,
        legend: {
          display:false,
          position: 'left'
        },
        animation: {
          animateRotate: false,
          animateScale: true
        }
      }
    });
  }
  }, 1000);

var gaugeOptions = {
  chart: {
      type: 'solidgauge'
  },

  title: null,

  pane: {
      center: ['50%', '85%'],
      size: '100%',
      startAngle: -90,
      endAngle: 90,
      background: {
        // borderWidth: 5,
          backgroundColor:
              Highcharts.defaultOptions.legend.backgroundColor || '#000',
          innerRadius: '60%',
          outerRadius: '80%',
          shape: 'arc',
          borderColor: 'red'
      }
  },

  exporting: {
      enabled: false
  },

  tooltip: {
      enabled: false
  },

  // the value axis
  yAxis: {
      stops: [
          [0.1, '#55BF3B'], // green
          [0.5, '#DDDF0D'], // yellow
          [0.9, '#DF5353'] // red
      ],
      lineWidth: 0,
      tickWidth: 0,
      minorTickInterval: null,
      tickAmount: 0,
      title: {
          y: -70
      },
      labels: {
          y: 16
      }
  },

  plotOptions: {
      solidgauge: {
        innerRadius: '75%',
          dataLabels: {
            y: -45,
              borderWidth: 0,
              useHTML: true
          }
      }
  }
};

// The speed gauge
Highcharts.chart('container-speed', Highcharts.merge(gaugeOptions, {
  yAxis: {
    lineWidth: 0,
      min: 0,
      max: 200,
      title: {
          text: 'Speed'
      }
  },

  credits: {
      enabled: false
  },

  series: [{
      name: 'Speed',
      data: [80],
      dataLabels: {
          format:
              '<div style="text-align:center">' +
              '<span style="font-size:25px">{y}</span><br/>' +
              '<span style="font-size:12px;opacity:0.4">km/h</span>' +
              '</div>'
      },
      tooltip: {
          valueSuffix: ' km/h'
      }
  }]

}));

// The RPM gauge
Highcharts.chart('container-rpm', Highcharts.merge(gaugeOptions, {
  yAxis: {
    lineWidth: 0,
      min: 0,
      max: 5,
      title: {
          text: 'RPM'
      }
  },

  series: [{
      name: 'RPM',
      data: [1],
      dataLabels: {
          format:
              '<div style="text-align:center">' +
              '<span style="font-size:25px">{y:.1f}</span><br/>' +
              '<span style="font-size:12px;opacity:0.4">' +
              '* 1000 / min' +
              '</span>' +
              '</div>'
      },
      tooltip: {
          valueSuffix: ' revolutions/min'
      }
  }]

}));
  }

  chart(val){
    let gauge: LinearGauge = new LinearGauge({
      load: (args: ILoadEventArgs) => {
          // custom code start
          let selectedTheme: string = location.hash.split('/')[1];
          selectedTheme = selectedTheme ? selectedTheme : 'Material';
          args.gauge.theme = <LinearGaugeTheme>(selectedTheme.charAt(0).toUpperCase() +
          selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i,  'Contrast');
      },
      // custom code end
      allowMargin: false,
      orientation: 'Horizontal',
      
      axes: [{
          labelStyle: {
              format: '{value}',
              offset: 20,
              font: {
                  fontFamily: 'Segoe UI'
              }
          },
          
          line: {
              width: 0
          },
          pointers: [
              {
                  value: val,
                  height: 10,
                  width: 10,
                  markerType: 'Triangle',
                  placement: 'Near',
                  offset: -20,
                  color:'white',
              }
          ],
          majorTicks: {
              height: 0
          },
          minorTicks: {
              height: 0
          },
          ranges: [{
              start: 0,
              end: 32,
              color: '#30B32D',
              startWidth: 15,
              endWidth: 15
          },
          {
              start: 32,
              end: 68,
              startWidth: 15,
              endWidth: 15,
              color: '#FFDF00'
          },
          {
              start: 68,
              end: 100,
              startWidth: 15,
              endWidth: 15,
              color: '#F03E3E'
          }]
      }],
      annotations: [{
          
          axisIndex: 0, zIndex: '1',
          axisValue: 40,
          y: -100
      }]
  });
  return gauge;
  }
}
