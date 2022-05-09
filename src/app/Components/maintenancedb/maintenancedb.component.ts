import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/Nav/navbar.service';
declare var Highcharts: any;
import { LinearGauge, Annotations, ILoadEventArgs, LinearGaugeTheme } from '@syncfusion/ej2-lineargauge';
import { reduce } from 'highcharts';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from 'src/app/Service/app/dashboard.service';
import { untilDestroyed } from 'ngx-take-until-destroy';

import { OwlOptions } from 'ngx-owl-carousel-o';
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
  lname: any;
  myLoader: boolean=false;
  fline: any;
  fname: any;
  alname: any=[];
  servoload1: any=[];
  servoloadaxis: any=[];
  
  servoload2: any=[];
  servoload3: any=[];
  maintenancedetails: any=[];
  customOptions: OwlOptions = {
    loop: true,
    autoplay: false,
    center: true,
    dots: true,
    autoHeight: true,
    autoWidth: true,
    nav: true,
    navText : ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 5,
      }
    }
  }
  loads: any;
  temp: any;
  programnumber: any;
  powerontime: any;
  runtime: any;
  timout: any;
  timeout1: any;
  partscount: any;
  cuttime: any;
  selectedmachine: any;
  previousvalue: any=[];
  partscounts: any=[];
  partscount1: any=[];
  timeout2: any;
  productname: any;
  constructor(private nav:NavbarService,private route:ActivatedRoute,private service: DashboardService) {


    this.nav.show()
    this.lname = this.route.snapshot.queryParamMap.get('line_name');
    // this.lname='VALVE'
    this.myLoader = true;
  
    this.service.form_line1(this.lname).pipe(untilDestroyed(this)).subscribe(res=>{
        this.myLoader = false;
        this.fline = res[0].line;
        this.fname = res[0].machine;
        this.myLoader = true;
        // this.service.pie(this.fline,this.fname).pipe(untilDestroyed(this)).subscribe(res=>{
         
        //   console.log(this.alname)
        // })
        
        this.alname = res;
        this.service.machinedetails(this.alname[0].machine).pipe(untilDestroyed(this)).subscribe(res=>{
          localStorage.setItem("clickmachine",this.alname[0].machine)
          this.selectedmachine=this.alname[0].machine
         this.maintenancedetails=res
         this.myLoader=false
         if(Array.isArray(this.maintenancedetails['PROGRAMNUMBER'])){
          this.programnumber=this.maintenancedetails['PROGRAMNUMBER'][0].value
         }if(Array.isArray(this.maintenancedetails['POWERONTIME'])){
          this.powerontime=this.maintenancedetails['POWERONTIME'][0].value
         }if(Array.isArray(this.maintenancedetails['RUNTIME'])){
          this.runtime=this.maintenancedetails['RUNTIME'][0].value     
         }if(Array.isArray(this.maintenancedetails['PARTSCOUNT'])){
          this.partscount=this.maintenancedetails['PARTSCOUNT'][0].value     
         }
         if(Array.isArray(this.maintenancedetails['CUTTIME'])){
          this.cuttime=this.maintenancedetails['CUTTIME'][0].value     
         }
         if(Array.isArray(this.maintenancedetails['PRODUCTNAME'])){
          this.productname=this.maintenancedetails['PRODUCTNAME'][0].value  
         }
         
         console.log(this.maintenancedetails)
          this.loads=[]
          this.temp=[]
          if(Array.isArray(this.maintenancedetails['SPINDLE'])){

            this.maintenancedetails['SPINDLE'].find(x => {
              if(x['axis'] == "Spindle Load"){
                this.loads.push(x);
              }
              else{
                this.temp.push(x);
              }
            });
           
          }

         this.servoloads()


        })
    })
   }


   



servoloads(){
  setTimeout(() => {
    if(Array.isArray(this.maintenancedetails['SERVOLOAD'])){
      for(let j=0;j<this.maintenancedetails['SERVOLOAD'].length;j++){
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
              ctx.lineTo(ch - 40, 0);
              ctx.lineTo(0, 3);
              ctx.fillStyle = 'rgb(256, 256, 256)';
              ctx.fill();
              ctx.rotate(-angle);
              ctx.translate(-cx, -cy);
              ctx.beginPath();
              ctx.arc(cx, cy, 5, 0, Math.PI * 2);
              ctx.fill();
              Chart.defaults.global.defaultFontSize = 0;
            }
          }],
          data: {
            labels: [
       
            ],
            borderWidth: 0,
            datasets: [{
              data: this.maintenancedetails['SERVOLOAD'][j].color_code,
              borderWidth: 0,
              needleValue: this.maintenancedetails['SERVOLOAD'][j].value,
              backgroundColor: [
                '#96d617',
                '#f2f207',
                '#f21a07'
              ],
              
              
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
          },
          plotOptions: {
            pie: {
              dataLabels: {
                enabled: false
              },
              shadow: false,
              center: ['50%', '50%'],
              borderWidth: 0 // < set this option
            }
          }
          
        });
      }
    }
  
    }, 1000);

    setTimeout(() => {
      if(Array.isArray(this.maintenancedetails['PULSECODETEMPERATURE'])){
        for(let i=0;i<this.maintenancedetails['PULSECODETEMPERATURE'].length;i++){
          let gauge: LinearGauge = new LinearGauge(this.chart(this.maintenancedetails['PULSECODETEMPERATURE'][i].value,this.maintenancedetails['PULSECODETEMPERATURE'][i].color_code[0],this.maintenancedetails['PULSECODETEMPERATURE'][i].color_code[1],this.maintenancedetails['PULSECODETEMPERATURE'][i].color_code[2]));
          gauge.appendTo('#rangeContainer'+i);
        }
      }
      if(Array.isArray(this.maintenancedetails['SERVOTEMPERATURE'])){
        for(let i=0;i<this.maintenancedetails['SERVOTEMPERATURE'].length;i++){
          let gauge: LinearGauge = new LinearGauge(this.chart(this.maintenancedetails['SERVOTEMPERATURE'][i].value,this.maintenancedetails['SERVOTEMPERATURE'][i].color_code[0],this.maintenancedetails['SERVOTEMPERATURE'][i].color_code[1],this.maintenancedetails['SERVOTEMPERATURE'][i].color_code[2]));
          gauge.appendTo('#rangeContainers'+i);
        }
      }
    
    }, 1000);



    setTimeout(() => {
      if(Array.isArray(this.temp)){
        for(let j=0;j<this.temp.length;j++){
          new Chart('oilCharts'+j, {
            type: 'doughnut',
            plugins: [{
              afterDraw: chart => {
                Chart.defaults.global.defaultFontSize = 0;
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
              ctx.lineTo(ch - 40, 0);
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
              
              datasets: [{
                data: this.temp[j].color_code,
                borderWidth: 0,
                needleValue: this.temp[j].value,
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
            //   scale: {
            //     ticks: {
            //         min: 0,
            //         max: 0
            //     }
            // },
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
      }
   
      }, 1000);

     
}

  ngOnInit() {  
    // this.partscount1=0
    // this.previousvalue=[]
    this.timout=setInterval(() => {
      this.service.form_line1(this.lname).pipe(untilDestroyed(this)).subscribe(res=>{
        this.alname = res;
      })
      
    },180000)
this.timeout1=setInterval(()=>{
  this.getmachinedet(localStorage.getItem("clickmachine"))
  // this.method()
},180000)


  }

  datashow(value){

if(value.includes("Speed")==true){
  return "rpm"
}else if(value.includes("Feed")==true){
  return "mm"
}else if(value.includes("Temp")==true){
  return "°C"
}


console.log(value.includes("Spindle Speed"));
  }

  colorcode(value1,value2){

    if(value1[0]>=value2){

     return '#16a300'

    }else if(value1[0]+value1[1]>=value2){

      return '#ffdf00'

    }else{
      return '#ff0f0f'
    }
   
  }
  getmachinedet(machinename){
    // machinedetails
    this.myLoader=true
    localStorage.setItem("clickmachine",machinename)
    this.selectedmachine=machinename
    this.service.machinedetails(machinename).pipe(untilDestroyed(this)).subscribe(res=>{
      this.maintenancedetails=[]
      this.loads=[]
      this.temp=[]
    this.maintenancedetails=res  
    if(Array.isArray(this.maintenancedetails['PROGRAMNUMBER'])){
      this.programnumber=this.maintenancedetails['PROGRAMNUMBER'][0].value
     }if(Array.isArray(this.maintenancedetails['POWERONTIME'])){
      this.powerontime=this.maintenancedetails['POWERONTIME'][0].value
     }if(Array.isArray(this.maintenancedetails['RUNTIME'])){
      this.runtime=this.maintenancedetails['RUNTIME'][0].value     
     }
     if(Array.isArray(this.maintenancedetails['PARTSCOUNT'])){
      this.partscount=this.maintenancedetails['PARTSCOUNT'][0].value     
     }
     if(Array.isArray(this.maintenancedetails['CUTTIME'])){
      this.cuttime=this.maintenancedetails['CUTTIME'][0].value     
     }
     if(Array.isArray(this.maintenancedetails['PRODUCTNAME'])){
      this.productname=this.maintenancedetails['PRODUCTNAME'][0].value  
     }
     
   if(Array.isArray(this.maintenancedetails['SPINDLE'])){

        this.maintenancedetails['SPINDLE'].find(x => {
          if(x['axis'] == "Spindle Load"){
            this.loads.push(x);
          }
          else{
            this.temp.push(x);
          }
        });
       
      }
  


    //  console.log(this.loads)
    this.myLoader=false
   
    this.servoloads()
    
    })
  }
  // method() {
  //   this.partscount1= this.partscount1+1
  // if(!this.previousvalue.length && !this.partscounts.length){
  //   this.previousvalue=this.cuttime
  //   this.partscounts=this.partscount1
  //   console.log("called1",this.previousvalue,this.partscounts)
  //  }
  //  else if(this.partscount1>this.partscounts){
  //   console.log("called2")
   
  //  console.log(this.previousvalue,this.cuttime)
  //  this.previousvalue=[]
  //  this.partscounts=[]
  //  }
  
  // }
  chart(val,val1,val2,val3){

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
              end: val1,
              color: '#30B32D',
              startWidth: 15,
              endWidth: 15
          },
          {
              start:val1,
              end:this.addition(val1,val2),
              startWidth: 15,
              endWidth: 15,
              color: '#FFDF00'
          },
          {
              start:this.addition(val1,val2),
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

  ngOnDestroy(){
    clearInterval(this.timout)
    clearInterval(this.timeout1)
  }

  addition(x,y)
  {
    return x+y
  }
 
   secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    // var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes ") : "";
    // var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return hDisplay + mDisplay 
    // + sDisplay; 
}
}
