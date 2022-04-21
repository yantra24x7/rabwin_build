import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
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


  settingsformss: FormGroup;
  aray: any=[];
  getdetails: any=[];
  processdone: boolean=false;
  datas: any=[];


  constructor(private nav:NavbarService, private machine: MachineService,private fb: FormBuilder,public toaster:ToastrService,public dialog:MatDialog) { 
    this.nav.show()
    
  
  
  }
  ngOnInit() {
     this.getdata();
  }

  getdata(){
     //new concept
     this.settingsformss = this.fb.group({
      setting: this.fb.array([]),
     });

console.log(this.settingsformss.value)
     //new concept
   
    this.machinename=localStorage.getItem("machine-name")
    this.myLoader=true;
    this.machine.settingget().pipe(untilDestroyed(this)).subscribe(res => {
     
        console.log(res)
        this.values=res
        this.myLoader = false;
         this.getdetails=[]
         for(let i=0;i<this.values.length;i++){
          this.add()
          // this.adds()
         }
    
        this.machine.getsets(this.machinename).pipe(untilDestroyed(this)).subscribe(res => {
          this.myLoader=false
           this.getdetails=res
           console.log(this.getdetails)
           for(let i=0;i<this.values.length;i++){
          //  for(let j=0;j<this.getdetails.length;j++){
                if(Array.isArray(this.getdetails[this.values[i]]) && this.getdetails[this.values[i]].length){
                  for(let k=0;k<this.getdetails[this.values[i]].length;k++){
                    this.adds(this.machinename,i,this.values[i],this.getdetails[this.values[i]][k].mt_signal,this.getdetails[this.values[i]][k].mt_value,this.getdetails[this.values[i]][k].normal,
                      this.getdetails[this.values[i]][k].warning,this.getdetails[this.values[i]][k].critical,this.getdetails[this.values[i]][k].active,this.getdetails[this.values[i]][k]._id.$oid) 
                  }
                  
                 }else{
                  this.adds(this.machinename,i,this.values[i],'','','','','','','')
                }
          //  }
          }
          console.log(this.settingsformss.value)
          //  this.callmethod()
        })     
        
   })
   
   
  }

  add() {
    (<FormArray>this.settingsformss.controls.setting).push(
        this.init()
      );
    }
   remove(i,j) {
     console.log(j)
    const control = <FormArray>this.settingsformss.get(['setting',i,'setting'])['controls'].splice(j,1)
    
   }
   adds(machinename,i,group_signal,mtsignal,mt_value,normal,warning,critical,active,id){
    (<FormArray>this.settingsformss.get(['setting',i,'setting'])).push(
      this.initTechnology(i,machinename,group_signal,mtsignal,mt_value,normal,warning,critical,active,id)
    );
   }
init(){
  return this.fb.group({
  setting: this.fb.array([]),
  })
}

   initTechnology(i,machinename,group_signal,mtsignal,mt_value,normal,warning,critical,active,id) {
    return this.fb.group({
      L1Name: [machinename,Validators.required],
      group_signal: [group_signal],
      mt_signal:[mtsignal],
      mt_value:[mt_value],
      normal: [normal],
      warning:[warning],
      critical:[critical],
      active:[active],
      id:[id]
    });
   }

      
//    disabling(id,id1){
//      if((<HTMLInputElement>document.getElementById("L1Name"+id+id1)).value.length !=0 && (<HTMLInputElement>document.getElementById("group_signal"+id+id1)).value.length !=0 &&
//      (<HTMLInputElement>document.getElementById("mt_signal"+id+id1)).value.length !=0 && (<HTMLInputElement>document.getElementById("mt_value"+id+id1)).value.length !=0 &&
//      (<HTMLInputElement>document.getElementById("normal"+id+id1)).value.length !=0 && (<HTMLInputElement>document.getElementById("warning"+id+id1)).value.length !=0 &&
//      (<HTMLInputElement>document.getElementById("critical"+id+id1)).value.length !=0){
// return false
//      }else{
//        return true
//      }
 
  
//    } 
       
  
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







   

   submit(id,id1,active){
     
let data={
  "L1Name":(<HTMLInputElement>document.getElementById("L1Name"+id+id1)).value,
  "group_signal": (<HTMLInputElement>document.getElementById("group_signal"+id+id1)).value,
  "mt_signal":(<HTMLInputElement>document.getElementById("mt_signal"+id+id1)).value,
  "mt_value":(<HTMLInputElement>document.getElementById("mt_value"+id+id1)).value,
  "normal": (<HTMLInputElement>document.getElementById("normal"+id+id1)).value,
  "warning":(<HTMLInputElement>document.getElementById("warning"+id+id1)).value,
  "critical":(<HTMLInputElement>document.getElementById("critical"+id+id1)).value,
  "active":active
}

        
        this.myLoader=true
        this.machine.addsetting(data).pipe(untilDestroyed(this)).subscribe(res => {
        console.log(res)
        this.myLoader=false
        setTimeout(()=> {
        this.getdata()
        }, 3000);

})
   }

   update(val){
   
      const dialogRef = this.dialog.open(settingsmodals, {
        width: '900px',
        data: val.value
  
      });
      dialogRef.afterClosed().subscribe(result => {
        this.ngOnInit(); 
      });
    
   }

   delete(id ,j,k){
     if(id){
      this.myLoader=true;
      this.machine.deletesets(id).pipe(untilDestroyed(this)).subscribe(res => {
        console.log(res)
        this.remove(j,k)
        this.myLoader=false;
        this.toaster.success("Deleted Successfully")
        this.ngOnInit(); 
      
      })
     }else{
      this.remove(j,k)
     }

     
   }


  ngOnDestroy(){}
}

@Component({
  selector: 'app-settings',
  templateUrl: './settingsmod.html',
  styleUrls: ['./settings.component.scss']
})
export class settingsmodals implements OnInit {
  settingForm: FormGroup;
  datas: any=[];
disable:boolean=false
  myLoader: boolean=false;
  constructor(private nav:NavbarService,public toaster:ToastrService,private machine: MachineService,public dialogRef: MatDialogRef<settingsmodals>,public fb:FormBuilder, @Inject(MAT_DIALOG_DATA) public data1: settingsmodals) { 
    this.nav.show()
    console.log(data1)
    this.datas=data1
    this.settingForm = this.fb.group({
      L1Name: [this.datas.L1Name, Validators.required],
      group_signal: [this.datas.group_signal, Validators.required],
      mt_signal: [this.datas.mt_signal, Validators.required],
      mt_value: [this.datas.mt_value, Validators.required],
      normal: [this.datas.normal, Validators.required],
      warning: [this.datas.warning, Validators.required],
      critical: [this.datas.critical, Validators.required],
      active: [this.datas.active, Validators.required],
    })
  }
  dialogclose(){
this.dialogRef.close();
  }
  ngOnInit() {
   
  }
  submit(val)
  {
    this.myLoader=true;
console.log(val)
// updatesets
this.machine.updatesets(this.datas.id,val).pipe(untilDestroyed(this)).subscribe(res => {
console.log(res)
this.myLoader=false
this.dialogRef.close();
this.toaster.success("Setting Updated Successfully")
})

  }
ngOnDestroy(){}
}

// settingsform0: FormGroup;
// settingsform1: FormGroup;
// settingsform2: FormGroup;
// settingsform3: FormGroup;
// settingsform4: FormGroup;
// settingsform5: FormGroup;
// settingsform6: FormGroup;
// settingsform7: FormGroup;
// settingsform8: FormGroup;  
// settingsform9: FormGroup;

// this.settingsform0 = this.fb.group({
//   setting: this.fb.array([]),
//  });
//  this.settingsform1 = this.fb.group({
//   setting: this.fb.array([]),
//  });
//  this.settingsform2 = this.fb.group({
//   setting: this.fb.array([]),
//  });
//  this.settingsform3 = this.fb.group({
//   setting: this.fb.array([]),
//  });
//  this.settingsform4 = this.fb.group({
//   setting: this.fb.array([]),
//  });
//  this.settingsform5 = this.fb.group({
//   setting: this.fb.array([]),
//  });
//  this.settingsform6 = this.fb.group({
//   setting: this.fb.array([]),
//  });
//  this.settingsform7 = this.fb.group({
//   setting: this.fb.array([]),
//  });
//  this.settingsform8 = this.fb.group({
//   setting: this.fb.array([]),
//  });
//  this.settingsform9 = this.fb.group({
//   setting: this.fb.array([]),
//  });

//   callmethod() {
//     this.myLoader=true;
// if(this.getdetails['SERVOLOAD']){
//    if(Array.isArray(this.getdetails['SERVOLOAD'])  && this.getdetails['SERVOLOAD'].length){
//      for(let i=0;i<this.getdetails['SERVOLOAD'].length;i++){
//       this.addNewInputField0(this.machinename,0,this.getdetails['SERVOLOAD'][i].mt_signal,this.getdetails['SERVOLOAD'][i].mt_value,this.getdetails['SERVOLOAD'][i].normal,this.getdetails['SERVOLOAD'][i].warning,this.getdetails['SERVOLOAD'][i].critical,this.getdetails['SERVOLOAD'][i].active)
//      }
 
//    }
// }else{
//   this.addNewInputField0(this.machinename,0,'','','','','','')
//  }
// if(this.getdetails['SERVOTEMPERATURE']){
//   if(Array.isArray(this.getdetails['SERVOTEMPERATURE']) && this.getdetails['SERVOTEMPERATURE'].length >0){
//     for(let i=0;i<this.getdetails['SERVOTEMPERATURE'].length;i++){
//      this.addNewInputField1(this.machinename,1,this.getdetails['SERVOTEMPERATURE'][i].mt_signal,this.getdetails['SERVOTEMPERATURE'][i].mt_value,this.getdetails['SERVOTEMPERATURE'][i].normal,this.getdetails['SERVOTEMPERATURE'][i].warning,this.getdetails['SERVOTEMPERATURE'][i].critical,this.getdetails['SERVOTEMPERATURE'][i].active)
//     }

//   }
// }else{
//   this.addNewInputField1(this.machinename,1,'','','','','','')
//  }
// if(this.getdetails['PULSECODETEMPERATURE']){
//   if(Array.isArray(this.getdetails['PULSECODETEMPERATURE']) && this.getdetails['PULSECODETEMPERATURE'].length >0){
//     for(let i=0;i<this.getdetails['PULSECODETEMPERATURE'].length;i++){
//      this.addNewInputField2(this.machinename,2,this.getdetails['PULSECODETEMPERATURE'][i].mt_signal,this.getdetails['PULSECODETEMPERATURE'][i].mt_value,this.getdetails['PULSECODETEMPERATURE'][i].normal,this.getdetails['PULSECODETEMPERATURE'][i].warning,this.getdetails['PULSECODETEMPERATURE'][i].critical,this.getdetails['PULSECODETEMPERATURE'][i].active)
//     }

//   }
// }
// else{
//  this.addNewInputField2(this.machinename,2,'','','','','','')
// }
// if(this.getdetails['SERVOLOADCURRENT']){
//   if(this.getdetails['SERVOLOADCURRENT'].length >0){
//     for(let i=0;i<this.getdetails['SERVOLOADCURRENT'].length;i++){
//      this.addNewInputField3(this.machinename,3,this.getdetails['SERVOLOADCURRENT'][i].mt_signal,this.getdetails['SERVOLOADCURRENT'][i].mt_value,this.getdetails['SERVOLOADCURRENT'][i].normal,this.getdetails['SERVOLOADCURRENT'][i].warning,this.getdetails['SERVOLOADCURRENT'][i].critical,this.getdetails['SERVOLOADCURRENT'][i].active)
//     }

//   }
// }else{
//   this.addNewInputField3(this.machinename,3,'','','','','','')
//  }
// if(this.getdetails['SPINDLE']){
//   if(this.getdetails['SPINDLE'].length >0){
//     for(let i=0;i<this.getdetails['SPINDLE'].length;i++){
//      this.addNewInputField4(this.machinename,4,this.getdetails['SPINDLE'][i].mt_signal,this.getdetails['SPINDLE'][i].mt_value,this.getdetails['SPINDLE'][i].normal,this.getdetails['SPINDLE'][i].warning,this.getdetails['SPINDLE'][i].critical,this.getdetails['SPINDLE'][i].active)
//     }

//   }
// }else{
//   this.addNewInputField4(this.machinename,4,'','','','','','')
//  }
// if(this.getdetails['FANSPEED']){
//   if(this.getdetails['FANSPEED'].length >0){
//     for(let i=0;i<this.getdetails['FANSPEED'].length;i++){
//      this.addNewInputField5(this.machinename,5,this.getdetails['FANSPEED'][i].mt_signal,this.getdetails['FANSPEED'][i].mt_value,this.getdetails['FANSPEED'][i].normal,this.getdetails['FANSPEED'][i].warning,this.getdetails['FANSPEED'][i].critical,this.getdetails['FANSPEED'][i].active)
//     }

//   }
// }
// else{
//   this.addNewInputField5(this.machinename,5,'','','','','','')
//  }
// if(this.getdetails['FANSTATUS']){
//   if(this.getdetails['FANSTATUS'].length >0){
//     for(let i=0;i<this.getdetails['FANSTATUS'].length;i++){
//      this.addNewInputField6(this.machinename,6,this.getdetails['FANSTATUS'][i].mt_signal,this.getdetails['FANSTATUS'][i].mt_value,this.getdetails['FANSTATUS'][i].normal,this.getdetails['FANSTATUS'][i].warning,this.getdetails['FANSTATUS'][i].critical,this.getdetails['FANSTATUS'][i].active)
//     }

//   }
// }
// else{
//   this.addNewInputField6(this.machinename,6,'','','','','','')
//  }
// if(this.getdetails['BATTERYSTATUS']){
//   if(this.getdetails['BATTERYSTATUS'].length >0){
//     for(let i=0;i<this.getdetails['BATTERYSTATUS'].length;i++){
//      this.addNewInputField7(this.machinename,7,this.getdetails['BATTERYSTATUS'][i].mt_signal,this.getdetails['BATTERYSTATUS'][i].mt_value,this.getdetails['BATTERYSTATUS'][i].normal,this.getdetails['BATTERYSTATUS'][i].warning,this.getdetails['BATTERYSTATUS'][i].critical,this.getdetails['BATTERYSTATUS'][i].active)
//     }

//   }
// }
// else{
//   this.addNewInputField7(this.machinename,7,'','','','','','')
//  }
// if(this.getdetails['ABSOLUTEPOSITION']){
//   if(this.getdetails['ABSOLUTEPOSITION'].length >0){
//     for(let i=0;i<this.getdetails['ABSOLUTEPOSITION'].length;i++){
//      this.addNewInputField8(this.machinename,8,this.getdetails['ABSOLUTEPOSITION'][i].mt_signal,this.getdetails['ABSOLUTEPOSITION'][i].mt_value,this.getdetails['ABSOLUTEPOSITION'][i].normal,this.getdetails['ABSOLUTEPOSITION'][i].warning,this.getdetails['ABSOLUTEPOSITION'][i].critical,this.getdetails['ABSOLUTEPOSITION'][i].active)
//     }

//   }
// }
// else{
//   this.addNewInputField8(this.machinename,8,'','','','','','')
//  }
// if(this.getdetails['MACROVARIABLE']){
//   if(this.getdetails['MACROVARIABLE'].length >0){
//     for(let i=0;i<this.getdetails['MACROVARIABLE'].length;i++){
//      this.addNewInputField9(this.machinename,9,this.getdetails['MACROVARIABLE'][i].mt_signal,this.getdetails['MACROVARIABLE'][i].mt_value,this.getdetails['MACROVARIABLE'][i].normal,this.getdetails['MACROVARIABLE'][i].warning,this.getdetails['MACROVARIABLE'][i].critical,this.getdetails['MACROVARIABLE'][i].active)
//     }

//   }
// }
// else{
//   this.addNewInputField9(this.machinename,9,'','','','','','')
//  }
// this.myLoader=false;
//   }


// addNewInputField0(val,i,mtsignal,signalval,normal,warning,critical,active) {
//   (<FormArray>this.settingsform0.controls.setting).push(
//       this.initTechnologyFields(val,i,mtsignal,signalval,normal,warning,critical,active)
//     );
//   }
//  removeInputField0(i: any) {
//   const control = <FormArray>this.settingsform0.controls['setting'];
//   control.removeAt(i);
 
//  }
     
// addNewInputField1(val,i,mtsignal,signalval,normal,warning,critical,active) {
//   (<FormArray>this.settingsform1.controls.setting).push(
//       this.initTechnologyFields(val,i,mtsignal,signalval,normal,warning,critical,active)
//     );
//   }
//  removeInputField1(i: any) {
//   const control = <FormArray>this.settingsform1.controls['setting'];
//   control.removeAt(i);
 
//  }

//  addNewInputField2(val,i,mtsignal,signalval,normal,warning,critical,active) {
//   (<FormArray>this.settingsform2.controls.setting).push(
//       this.initTechnologyFields(val,i,mtsignal,signalval,normal,warning,critical,active)
//     );
//   }
//  removeInputField2(i: any) {
//   const control = <FormArray>this.settingsform2.controls['setting'];
//   control.removeAt(i);
 
//  }

//  addNewInputField3(val,i,mtsignal,signalval,normal,warning,critical,active) {
//   (<FormArray>this.settingsform3.controls.setting).push(
//       this.initTechnologyFields(val,i,mtsignal,signalval,normal,warning,critical,active)
//     );
//   }
//  removeInputField3(i: any) {
//   const control = <FormArray>this.settingsform3.controls['setting'];
//   control.removeAt(i);
 
//  }

 
//  addNewInputField4(val,i,mtsignal,signalval,normal,warning,critical,active) {
//   (<FormArray>this.settingsform4.controls.setting).push(
//       this.initTechnologyFields(val,i,mtsignal,signalval,normal,warning,critical,active)
//     );
//   }
//  removeInputField4(i: any) {
//   const control = <FormArray>this.settingsform4.controls['setting'];
//   control.removeAt(i);
 
//  }

 
//  addNewInputField5(val,i,mtsignal,signalval,normal,warning,critical,active) {
//   (<FormArray>this.settingsform5.controls.setting).push(
//       this.initTechnologyFields(val,i,mtsignal,signalval,normal,warning,critical,active)
//     );
//   }
//  removeInputField5(i: any) {
//   const control = <FormArray>this.settingsform5.controls['setting'];
//   control.removeAt(i);
 
//  }

 
//  addNewInputField6(val,i,mtsignal,signalval,normal,warning,critical,active) {
//   (<FormArray>this.settingsform6.controls.setting).push(
//       this.initTechnologyFields(val,i,mtsignal,signalval,normal,warning,critical,active)
//     );
//   }
//  removeInputField6(i: any) {
//   const control = <FormArray>this.settingsform6.controls['setting'];
//   control.removeAt(i);
 
//  }

//  addNewInputField7(val,i,mtsignal,signalval,normal,warning,critical,active) {
//   (<FormArray>this.settingsform7.controls.setting).push(
//       this.initTechnologyFields(val,i,mtsignal,signalval,normal,warning,critical,active)
//     );
//   }
//  removeInputField7(i: any) {
//   const control = <FormArray>this.settingsform7.controls['setting'];
//   control.removeAt(i);
 
//  }

//  addNewInputField8(val,i,mtsignal,signalval,normal,warning,critical,active) {
//   (<FormArray>this.settingsform8.controls.setting).push(
//       this.initTechnologyFields(val,i,mtsignal,signalval,normal,warning,critical,active)
//     );
//   }
//  removeInputField8(i: any) {
//   const control = <FormArray>this.settingsform8.controls['setting'];
//   control.removeAt(i);
 
//  }

//  addNewInputField9(val,i,mtsignal,signalval,normal,warning,critical,active) {
//   (<FormArray>this.settingsform9.controls.setting).push(
//       this.initTechnologyFields(val,i,mtsignal,signalval,normal,warning,critical,active)
//     );
//   }
//  removeInputField9(i: any) {
//   const control = <FormArray>this.settingsform9.controls['setting'];
//   control.removeAt(i);
 
//  }





  //  initTechnologyFields(val,i,mtsignal,signalval,normal,warning,critical,active) {
  //   return this.fb.group({
  //     L1Name: [val,Validators.required],
  //     group_signal: [this.values[i]],
  //     mt_signal:[mtsignal],
  //     mt_value:[signalval],
  //     normal: [normal],
  //     warning:[warning],
  //     critical:[critical],
  //     active:[active]
  //   });
  //  }