import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material';
import { NavbarService } from 'src/app/Nav/navbar.service';
import { MachineService } from 'src/app/Service/app/machine.service';
import { ReportService } from 'src/app/Service/app/report.service';
import Swal from 'sweetalert2';
import { ExportService } from '../shared/export.service';

@Component({
  selector: 'app-maintenancereport',
  templateUrl: './maintenancereport.component.html',
  styleUrls: ['./maintenancereport.component.scss']
})
export class MaintenancereportComponent implements OnInit {
  login:FormGroup;
  myLoader: boolean=false;
  module_response: any;
  mac_response: any;
  shift_response: any;
  first_loading: any;
  fiesr_date: any;
  values: any=[];
  sdate: any;
  edate: any;
  reportblock: any;
  date: any;
  signal: any;
  alarmreports:any=[]
  status: any;
  maintenancereport: any=[];
  export_excel: any=[];
  public maxDate: Object = new Date();
  constructor(private nav:NavbarService,public fb:FormBuilder,public service:ReportService,public datepipe:DatePipe,
    public machine:MachineService, private exportService: ExportService) { 
    this.nav.show()
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
                  this.signal= this.values[0]
                  this.login.patchValue({
                    signal: this.values[0],
                  })  
                   
          localStorage.setItem('SDATE', this.first_loading['from_date']);
          localStorage.setItem('EDATE', this.first_loading['to_date']);
          this.sdate = localStorage.getItem('SDATE');
          this.edate = localStorage.getItem('EDATE');
          this.myLoader = false;

          
          this.logintest('true');
                })
          // this.stamps = { begin: this.datepipe.transform(begin, 'yyyy-MM-dd'), end: this.datepipe.transform(end, 'yyyy-MM-dd') };

        
        })
      })
      //})
    })
    })
     
   
  }
  logintest(arg0: string) {
    this.status = arg0;
    this.myLoader = true;
    
    if (this.status == 'true') {
      this.sdate=new DatePipe('en-US').transform(this.login.value.date, 'dd/MM/yyyy')
      this.service.maintenancereport(this.login.value.machine_name,this.login.value.line,this.login.value.shift_num,this.sdate,this.login.value.signal).subscribe(res => {
        console.log(res)
       this.alarmreports=res

      this.myLoader=false
      })
    }
   
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

    addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
      this.sdate = new DatePipe('en-US').transform(this.login.value.date, 'dd/MM/yyyy');
      // = event.value;
    }
      getsignal(val){
    this.signal=val
      }

      export(){
        if(this.alarmreports.length==0){
          Swal.fire('Exporting!, No Data Found')
        }else{
          this.export_excel=[]
          Swal.fire('Download Successfully')
          for(var i=0;i<this.alarmreports.length;i++){
            this.export_excel.push({
              "S.No": i+1,
              "Date": this.alarmreports[i].date || '---',
              "Shift":this.alarmreports[i].shift_num || '---',
              "Machine Name":this.alarmreports[i].machine_name || '---',
              "Group Signal":this.alarmreports[i].group_signal || '---',
              "MT Signal":this.alarmreports[i].mt_signal || '---',
             
              "Value":this.alarmreports[i].value || '---',
           });
            
          }
          this.exportService.exportAsExcelFile(this.export_excel, 'Maintenance Report Details');
       }
       
     }

     getshift(shift){
      localStorage.setItem('SHHIFT',shift);
  
      let hadok = localStorage.getItem('SHHIFT');
    
  
     
  }

        }
