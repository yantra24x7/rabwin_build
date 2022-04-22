import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material';
import { NavbarService } from 'src/app/Nav/navbar.service';
import { MachineService } from 'src/app/Service/app/machine.service';
import { ReportService } from 'src/app/Service/app/report.service';
declare var Highcharts: any;
@Component({
  selector: 'app-trendingchart',
  templateUrl: './trendingchart.component.html',
  styleUrls: ['./trendingchart.component.scss']
})
export class TrendingchartComponent implements OnInit {
  login: FormGroup;
  reportblock: any;
  mac_response: any;
  sdate: any;
  date: any;
  edate: any;
  module_response: any;
  first_loading: any;
  dat1: string;
  dat2: string;
  myLoader: boolean;
  values: any;

  constructor(private nav:NavbarService,public fb:FormBuilder,public service:ReportService,public datepipe:DatePipe,public machine:MachineService) { 
    this.nav.show()
  }

  ngOnInit() {
    this.login = this.fb.group({
      line:[""],
      machine_name: [""],
      date: [""],
      signal:['']

    })
     this.myLoader=true
    this.service.getmodule().subscribe(res => {
      this.module_response = res;
      this.login.patchValue({
        line: this.module_response[0],

      })
      localStorage.setItem('MODULELOG', this.module_response[0]);
      let hadokmodule = localStorage.getItem('MODULELOG');
      this.service.line(this.module_response[0]).subscribe(res => {
        this.mac_response=res;
        // let data =  this.mac_response;
        // console.log(data)
        this.login.patchValue({
          machine_name: this.mac_response[0],
        })
      })

      if(Array.isArray(this.mac_response)){
        localStorage.setItem('MACHINE', this.mac_response[0]);
      }
       
      })
      this.machine.settingget().subscribe(res => {
        this.values=res
        this.login.patchValue({
          signal: this.values[0],
        })  
      })

        this.service.first_page_loading().subscribe(res => {
          this.first_loading = res; 
          this.dat1 = new DatePipe('en-US').transform(this.first_loading.from_date, 'yyyy-MM-dd');
          this.dat2 = new DatePipe('en-US').transform(this.first_loading.to_date, 'yyyy-MM-dd');
          this.login.patchValue({
         


            date: {begin: this.datepipe.transform(this.dat1, 'yyyy-MM-dd'), end: this.datepipe.transform(this.dat2, 'yyyy-MM-dd')}
          })

          // this.stamps = { begin: this.datepipe.transform(begin, 'yyyy-MM-dd'), end: this.datepipe.transform(end, 'yyyy-MM-dd') };

          
          localStorage.setItem('SDATE', this.first_loading['from_date']);
          localStorage.setItem('EDATE', this.first_loading['to_date']);
          this.sdate = localStorage.getItem('SDATE');
          this.edate = localStorage.getItem('EDATE');
          this.myLoader = false;

        
          this.logintest('true');
        })
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
            return Highcharts.dateFormat('%Y %b. %e, %H:%M:%S', this.value);
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
  logintest(arg0: string) {
   
  }
  getm(val){
    
    localStorage.setItem('MACHINE', val);

    
    let hadokmac = localStorage.getItem('MACHINE');

  }
  getsplit(val){
    
    this.reportblock = val;
    
    
    localStorage.setItem('MODULELOG', this.reportblock);

    this.service.line(this.reportblock).subscribe(res => {
      this.mac_response=res;
      this.login.patchValue({
        machine_name: this.mac_response[0],
      })
      localStorage.setItem('MACHINE', this.mac_response[0]);
      let hadokmac = localStorage.getItem('MACHINE');
   
      })
    }

    addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
      console.log("triggered")
        this.date = event.value;
        this.sdate = new DatePipe('en-US').transform(this.date.begin, 'MM/dd/yyyy');
        this.edate= new DatePipe('en-US').transform(this.date.end, 'MM/dd/yyyy');
        localStorage.setItem('SDATE', this.sdate);
        localStorage.setItem('EDATE', this.edate);

      }
      getsignal(val){

      }
}
