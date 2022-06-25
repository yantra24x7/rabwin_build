import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material';
import * as Chart from 'chart.js';
import { NavbarService } from 'src/app/Nav/navbar.service';
import { MachineService } from 'src/app/Service/app/machine.service';
import { ReportService } from 'src/app/Service/app/report.service';
declare var Highcharts: any;
declare const CanvasJS: any;
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
  shift_response: any;
  status: any;
  chartdata: any;
  signal: any;
  chartdata1: any=[];
  fiesr_date: any;
  public maxDate: Object = new Date();
  dataSeries: any;
  chartdata2: any=[];
  chartvalues: any=[];
  constructor(private nav:NavbarService,public fb:FormBuilder,public service:ReportService,public datepipe:DatePipe,public machine:MachineService) { 
    this.nav.show()

    // var s = new Date(1651693540).toLocaleDateString("en-US")
    // console.log(s)

//     let unix_timestamp = 1651693540

// var date = new Date(unix_timestamp * 1000);
// console.log(date)

  }

  ngOnInit() {
    this.login = this.fb.group({
      line:[""],
      machine_name: [""],
      date: [""],
      signal:[""],
      shift_num:[""]

    })
   

    this.myLoader = true;

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
        localStorage.setItem('MACHINE', this.mac_response[0]);
        let hadokmac = localStorage.getItem('MACHINE');


    // this.service.getmachines().subscribe(res => {
    //   this.machine_response = res;
    //   this.login.patchValue({
    //     machine_name: this.machine_response[0],
    //   })
      this.service.getshift(this.module_response[0]).subscribe(res => {
        this.shift_response = res;
        this.login.patchValue({
          shift_num: this.shift_response[0].shift_no,
        })
        localStorage.setItem('SHHIFT', this.shift_response[0].shift_no);

        let hadok = localStorage.getItem('SHHIFT');
        this.service.first_page_loading().subscribe(res => {
          this.first_loading = res;
          this.fiesr_date = new DatePipe('en-US').transform(res.from_date, 'yyyy-MM-dd');
          this.login.patchValue({
            date : this.fiesr_date
          })
          this.machine.settingget().subscribe(res => {
                  this.values=res
                  this.login.patchValue({
                    signal: this.values[0],
                  })  
                  this.signal= this.values[0]
                })
          // this.stamps = { begin: this.datepipe.transform(begin, 'yyyy-MM-dd'), end: this.datepipe.transform(end, 'yyyy-MM-dd') };

          
          localStorage.setItem('SDATE', this.first_loading['from_date']);
          localStorage.setItem('EDATE', this.first_loading['to_date']);
          this.sdate = localStorage.getItem('SDATE');
          this.edate = localStorage.getItem('EDATE');
          this.myLoader = false;

          // this.new_date = new DatePipe('en-US').transform(this.first_loading['from_date'], 
          // 'dd/MM/yyyy');
          // this.new_date1 = new DatePipe('en-US').transform(this.first_loading['to_date'], 
          // 'dd/MM/yyyy');
          // this.login.patchValue({
          //   date : [  this.new_date,  this.new_date1]
          // })
          // this.minDate = this.first_loading['from_date']
          // this.maxDate = this.first_loading['to_date']
          this.logintest('true');
        })
      })
      //})
    })
    })
     
   

  }

  colorfucntion(i){
    if(i==0){
      return "#FCAF26"
    }else if(i==1){
      return "#067E22"
    }else if(i==2){
    return "#3A85BB"
    }else if(i==3){
      return "#DC6236"
    }else if(i==4){
      return "#13f2f2"
    }
  
  }
     // '#FCAF26'
        // #067E22
        // #3A85BB
        // #DC6236
  logintest(arg0: string) {
    this.status = arg0;
    this.myLoader = true;
    
    if (this.status == 'true') {
 
    this.chartdata1=[]
    this.chartdata2=[]
    this.service.trendchart(this.login.value.machine_name,this.login.value.line,this.login.value.shift_num,new DatePipe('en-US').transform(this.sdate, 'dd/MM/yyyy'),this.login.value.signal).subscribe(res => {
      console.log(res)
      this.chartdata=res
     for(let i=0;i<this.chartdata.length;i++){
      let data={
        type: 'area',
        name:this.signal +":"+this.chartdata[i].key +" Axis",
        color: this.colorfucntion(i),
        lineWidth: 3,
        data: this.chartdata[i].value }

        this.chartdata1.push(data)
     }
     this.chartdata1.push({
        type: 'area',
        name:"No Data",
        color: '#404047',
        lineWidth: 3,
        data: [] })
     console.log(this.chartdata1)








      this.myLoader=false
  
      Highcharts.chart('container', {
        

        chart: {
          zoomType: 'x',
          backgroundColor: '#1A1A1A',
        },
        title: {
          text: this.signal
        },
        subtitle: {
          text: document.ontouchstart === undefined ?
            'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
        },
        xAxis: {
          type: 'datetime',
          dateTimeLabelFormats: {
            
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
            //  return this.date=new Date(this.value);
            return Highcharts.dateFormat('%Y %b. %e, %H:%M:%S', this.value);
            }
          
          }
        },
        yAxis: {
          title: {
            text: this.signal,
           
          }
          
        },
        credits: {
          enabled: false
         },
        legend: {
          enabled: true
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
                
                [0, 'rgb(88 88 88)'],
                [1, 'rgb(88 88 88)']
            ]
            },
            marker: {
              // backgroundColor: '#1A1A1A',
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
  
        series: this.chartdata1
        // [
    //       {
    //       type: 'area',
    //       name: this.signal +' value',
    //       color: '#FCAF26',
        
    //       // #067E22
    //       // #3A85BB
    //       // #DC6236
    //       lineWidth: 5,
    //       data: 
  
    // this.chartdata1 },
    // {
    //   type: 'area',
    //   name:"No Data",
    //   color: '#404047',
    //   lineWidth: 5,
    //   data: [] }
  // ]
      });
  
    } )

  

  
   
    }}



  
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
      this.service.getshift(this.reportblock).subscribe(res => {
        this.shift_response = res;
        this.login.patchValue({
          shift_num: this.shift_response[0].shift_no,
        })
        localStorage.setItem('SHHIFT', this.shift_response[0].shift_no);
      })

      localStorage.setItem('MACHINE', this.mac_response[0]);
      let hadokmac = localStorage.getItem('MACHINE');
   
      })
    }

    // addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    //   console.log("triggered")
    //     this.date = event.value;
    //     this.sdate = new DatePipe('en-US').transform(this.date.begin, 'MM/dd/yyyy');
    //     this.edate= new DatePipe('en-US').transform(this.date.end, 'MM/dd/yyyy');
    //     localStorage.setItem('SDATE', this.sdate);
    //     localStorage.setItem('EDATE', this.edate);

    //   }
      addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
        this.sdate = event.value;
        // this.sdate = new DatePipe('en-US').transform(this.date, 'dd/MM/yyyy');
      }
      getsignal(val){
    this.signal=val
      }
      getshift(shift){
        localStorage.setItem('SHHIFT',shift);
    
        let hadok = localStorage.getItem('SHHIFT');
      
    
       
    }

}
 




//offline code for chart
// for(let i=0;i<this.chartdata.length;i++){

//   for(let k=0;k<this.chartdata[i].value.length;k++){
//  this.chartvalues.push({
//   "x":this.chartdata[i].value[k][0],"y":this.chartdata[i].value[k][1]
//     })
//   }
// let data=
//   {
//     label: this.signal +":"+this.chartdata[i].key +" Axis",
//     data: this.chartvalues,
//     showLine: true,
//     fill: false,
//     borderColor: this.colorfucntion(i)
//   }
//   this.chartdata2.push(data)
//   this.chartvalues=[];
//   console.log(i)
// }
// this.chartdata2.push({
//     label: "No Data",
//     data: [],
//     showLine: true,
//     fill: false,
//     borderColor: "#404047"
// })
// console.log(this.chartdata2)



//   new Chart('myChart', {
//     type: 'scatter',
//     data: {
//       datasets: 
//         this.chartdata2
      
      
//     },
    
//     options: {
//       title: {
//         display: true,
//         text: this.signal
//     },
//       tooltips: {
//         mode: 'index',
//         intersect: false,
//       },
//       hover: {
//         mode: 'nearest',
//         intersect: true
//       },
//       scales: {
//         yAxes: [{
//           ticks: {
//             beginAtZero:false
//           },
//           scaleLabel: {
//             display: true,
//             labelString: this.signal
//           }
//         }],
//         xAxes:[{
//           type: 'time',
//           display: true,
          
//         }],
//       },
      
//         plugins: {
//           responsive: true,
//           maintainAspectRatio: false,
//           zoom: {
//             zoom: {
//               wheel: {
//                 enabled: true
//               },
//               pinch: {
//                 enabled: true
//               },
//               mode: 'xy'
//             }
//           }
    
//         }
//     }
//   });



//end code for chart