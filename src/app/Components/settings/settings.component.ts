import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { ToastrService } from 'ngx-toastr';
import { NavbarService } from 'src/app/Nav/navbar.service';
import { MachineService } from 'src/app/Service/app/machine.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  myLoader: boolean=false;
  values: any=[];
  machinename: any;
  settingsform0: FormGroup;
  settingsform1: FormGroup;
  settingsform2: FormGroup;
  settingsform3: FormGroup;
  settingsform4: FormGroup;
  settingsform5: FormGroup;
  settingsform6: FormGroup;
  settingsform7: FormGroup;
  settingsform8: FormGroup;  
  settingsform9: FormGroup;
  aray: any=[];
  getdetails: any=[];
  processdone: boolean=false;


  constructor(private nav:NavbarService, private machine: MachineService,private fb: FormBuilder,public toaster:ToastrService) { 
    this.nav.show()
    this.myLoader=true;

    this.machinename=localStorage.getItem("machine-name")
    this.machine.settingget().pipe(untilDestroyed(this)).subscribe(res => {
     
        console.log(res)
        this.values=res
        this.settingsform0 = this.fb.group({
          setting: this.fb.array([]),
         });
         this.settingsform1 = this.fb.group({
          setting: this.fb.array([]),
         });
         this.settingsform2 = this.fb.group({
          setting: this.fb.array([]),
         });
         this.settingsform3 = this.fb.group({
          setting: this.fb.array([]),
         });
         this.settingsform4 = this.fb.group({
          setting: this.fb.array([]),
         });
         this.settingsform5 = this.fb.group({
          setting: this.fb.array([]),
         });
         this.settingsform6 = this.fb.group({
          setting: this.fb.array([]),
         });
         this.settingsform7 = this.fb.group({
          setting: this.fb.array([]),
         });
         this.settingsform8 = this.fb.group({
          setting: this.fb.array([]),
         });
         this.settingsform9 = this.fb.group({
          setting: this.fb.array([]),
         });
         this.getdetails=[]
       for(let i=0;i<this.values.length;i++){
        this.machine.getsets(this.machinename,this.values[i]).pipe(untilDestroyed(this)).subscribe(res => {
           this.getdetails.push(res)
        
     
        })
        
       
         
       
       }
   

       for(let j=0;j<this.getdetails.length;j++){
        for(let k=0;k<this.getdetails[j].length;k++){
            if(this.getdetails[j].length){
              this.processdone=true
            }
        }
       }

       this.callmethod()
   this.myLoader = false;
    })

  }
  callmethod() {
    console.log(this.getdetails)
    console.log(this.processdone)
if(this.processdone===false){
this.addNewInputField0(this.machinename,0,'','','','','','')
      this.addNewInputField1(this.machinename,1,'','','','','','')
           

      this.addNewInputField2(this.machinename,2,'','','','','','')
      this.addNewInputField3(this.machinename,3,'','','','','','')
           

      this.addNewInputField4(this.machinename,4,'','','','','','')
      this.addNewInputField5(this.machinename,5,'','','','','','')
           

      this.addNewInputField6(this.machinename,6,'','','','','','')
      this.addNewInputField7(this.machinename,7,'','','','','','')
           

      this.addNewInputField8(this.machinename,8,'','','','','','')
      this.addNewInputField9(this.machinename,9,'','','','','','')
       }else{
         
    for(let k=0;k<this.getdetails.length;k++){
        if(this.getdetails[k].length){

         if(k===0){
           alert("called")
           this.addNewInputField0(this.machinename,0,this.getdetails[k].mt_signal,this.getdetails[k].mt_value,this.getdetails[k].normal,this.getdetails[k].warning,this.getdetails[k].critical,this.getdetails[k].active)
         }else if(k===1){
           this.addNewInputField1(this.machinename,1,this.getdetails[k].mt_signal,this.getdetails[k].mt_value,this.getdetails[k].normal,this.getdetails[k].warning,this.getdetails[k].critical,this.getdetails[k].active)
         }else if(k===2){
           this.addNewInputField2(this.machinename,2,this.getdetails[k].mt_signal,this.getdetails[k].mt_value,this.getdetails[k].normal,this.getdetails[k].warning,this.getdetails[k].critical,this.getdetails[k].active)
         }else if(k===3){
           this.addNewInputField3(this.machinename,3,this.getdetails[k].mt_signal,this.getdetails[k].mt_value,this.getdetails[k].normal,this.getdetails[k].warning,this.getdetails[k].critical,this.getdetails[k].active)
         }else if(k===4){
           this.addNewInputField4(this.machinename,4,this.getdetails[k].mt_signal,this.getdetails[k].mt_value,this.getdetails[k].normal,this.getdetails[k].warning,this.getdetails[k].critical,this.getdetails[k].active)
         }
         else if(k===5){
           this.addNewInputField5(this.machinename,5,this.getdetails[k].mt_signal,this.getdetails[k].mt_value,this.getdetails[k].normal,this.getdetails[k].warning,this.getdetails[k].critical,this.getdetails[k].active)
         }
         else if(k===6){
           this.addNewInputField6(this.machinename,6,this.getdetails[k].mt_signal,this.getdetails[k].mt_value,this.getdetails[k].normal,this.getdetails[k].warning,this.getdetails[k].critical,this.getdetails[k].active)
         }
         else if(k===7){
           this.addNewInputField7(this.machinename,7,this.getdetails[k].mt_signal,this.getdetails[k].mt_value,this.getdetails[k].normal,this.getdetails[k].warning,this.getdetails[k].critical,this.getdetails[k].active)
         }
         else if(k===8){
           this.addNewInputField8(this.machinename,8,this.getdetails[k].mt_signal,this.getdetails[k].mt_value,this.getdetails[k].normal,this.getdetails[k].warning,this.getdetails[k].critical,this.getdetails[k].active)
         }
         else if(k===9){
           this.addNewInputField9(this.machinename,9,this.getdetails[k].mt_signal,this.getdetails[k].mt_value,this.getdetails[k].normal,this.getdetails[k].warning,this.getdetails[k].critical,this.getdetails[k].active)
         }

        }else{
         
           if(k===0){
             alert("notcalled")
             this.addNewInputField0(this.machinename,0,'','','','','','')
           }else if(k===1){
             this.addNewInputField1(this.machinename,1,'','','','','','')
           }else if(k===2){
             this.addNewInputField2(this.machinename,2,'','','','','','')
           }else if(k===3){
             this.addNewInputField3(this.machinename,3,'','','','','','')
           }else if(k===4){
             this.addNewInputField4(this.machinename,4,'','','','','','')
           }
           else if(k===5){
             this.addNewInputField5(this.machinename,5,'','','','','','')
           }
           else if(k===6){
             this.addNewInputField6(this.machinename,6,'','','','','','')
           }
           else if(k===7){
             this.addNewInputField7(this.machinename,7,'','','','','','')
           }
           else if(k===8){
             this.addNewInputField8(this.machinename,8,'','','','','','')
           }
           else if(k===9){
             this.addNewInputField9(this.machinename,9,'','','','','','')
           }
        }


      }
         
       }
  }
 
    select(i:any){
      var acc = document.getElementsByClassName("accordion");
      acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    })
  }


//   "L1Name": "ELECTRICAL-C30", 
//  "group_signal": "SERVOLOAD",  
//  "mt_signal": "Y", 
//  "mt_value": "ServoLoad_0_path1_ELECTRICAL-C30", 
//  "normal": 40,
//  "warning": 70,
//  "critical": 90,
//  "active": true
// }
  addNewInputField0(val,i,mtsignal,signalval,normal,warning,critical,active) {
    (<FormArray>this.settingsform0.controls.setting).push(
        this.initTechnologyFields(val,i,mtsignal,signalval,normal,warning,critical,active)
      );
    }
   removeInputField0(i: any) {
    const control = <FormArray>this.settingsform0.controls['setting'];
    control.removeAt(i);
   
   }

   initTechnologyFields(val,i,mtsignal,signalval,normal,warning,critical,active) {
    return this.fb.group({
      L1Name: [val,Validators.required],
      group_signal: [this.values[i]],
      mt_signal:[mtsignal],
      mt_value:[signalval],
      normal: [normal],
      warning:[warning],
      critical:[critical],
      active:[active]
    });
   }



   addNewInputField1(val,i,mtsignal,signalval,normal,warning,critical,active) {
    (<FormArray>this.settingsform1.controls.setting).push(
        this.initTechnologyFields(val,i,mtsignal,signalval,normal,warning,critical,active)
      );
    }
   removeInputField1(i: any) {
    const control = <FormArray>this.settingsform1.controls['setting'];
    control.removeAt(i);
   
   }

   addNewInputField2(val,i,mtsignal,signalval,normal,warning,critical,active) {
    (<FormArray>this.settingsform2.controls.setting).push(
        this.initTechnologyFields(val,i,mtsignal,signalval,normal,warning,critical,active)
      );
    }
   removeInputField2(i: any) {
    const control = <FormArray>this.settingsform2.controls['setting'];
    control.removeAt(i);
   
   }

   addNewInputField3(val,i,mtsignal,signalval,normal,warning,critical,active) {
    (<FormArray>this.settingsform3.controls.setting).push(
        this.initTechnologyFields(val,i,mtsignal,signalval,normal,warning,critical,active)
      );
    }
   removeInputField3(i: any) {
    const control = <FormArray>this.settingsform3.controls['setting'];
    control.removeAt(i);
   
   }

   
   addNewInputField4(val,i,mtsignal,signalval,normal,warning,critical,active) {
    (<FormArray>this.settingsform4.controls.setting).push(
        this.initTechnologyFields(val,i,mtsignal,signalval,normal,warning,critical,active)
      );
    }
   removeInputField4(i: any) {
    const control = <FormArray>this.settingsform4.controls['setting'];
    control.removeAt(i);
   
   }

   
   addNewInputField5(val,i,mtsignal,signalval,normal,warning,critical,active) {
    (<FormArray>this.settingsform5.controls.setting).push(
        this.initTechnologyFields(val,i,mtsignal,signalval,normal,warning,critical,active)
      );
    }
   removeInputField5(i: any) {
    const control = <FormArray>this.settingsform5.controls['setting'];
    control.removeAt(i);
   
   }

   
   addNewInputField6(val,i,mtsignal,signalval,normal,warning,critical,active) {
    (<FormArray>this.settingsform6.controls.setting).push(
        this.initTechnologyFields(val,i,mtsignal,signalval,normal,warning,critical,active)
      );
    }
   removeInputField6(i: any) {
    const control = <FormArray>this.settingsform6.controls['setting'];
    control.removeAt(i);
   
   }

   addNewInputField7(val,i,mtsignal,signalval,normal,warning,critical,active) {
    (<FormArray>this.settingsform7.controls.setting).push(
        this.initTechnologyFields(val,i,mtsignal,signalval,normal,warning,critical,active)
      );
    }
   removeInputField7(i: any) {
    const control = <FormArray>this.settingsform7.controls['setting'];
    control.removeAt(i);
   
   }

   addNewInputField8(val,i,mtsignal,signalval,normal,warning,critical,active) {
    (<FormArray>this.settingsform8.controls.setting).push(
        this.initTechnologyFields(val,i,mtsignal,signalval,normal,warning,critical,active)
      );
    }
   removeInputField8(i: any) {
    const control = <FormArray>this.settingsform8.controls['setting'];
    control.removeAt(i);
   
   }

   addNewInputField9(val,i,mtsignal,signalval,normal,warning,critical,active) {
    (<FormArray>this.settingsform9.controls.setting).push(
        this.initTechnologyFields(val,i,mtsignal,signalval,normal,warning,critical,active)
      );
    }
   removeInputField9(i: any) {
    const control = <FormArray>this.settingsform9.controls['setting'];
    control.removeAt(i);
   
   }

   submit(val){
console.log(val)
// 192.168.0.237:3005/api/v1/settings

this.machine.addsetting(val.value).pipe(untilDestroyed(this)).subscribe(res => {
console.log(res)
this.toaster.success("Added Successfully")
})
   }

  ngOnInit() {
  }
  ngOnDestroy(){}
}
