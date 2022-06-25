import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { ToastrService } from 'ngx-toastr';
import { NavbarService } from 'src/app/Nav/navbar.service';
import { MachineService } from 'src/app/Service/app/machine.service';

@Component({
  selector: 'app-maintenancedashboard',
  templateUrl: './maintenancedashboard.component.html',
  styleUrls: ['./maintenancedashboard.component.scss']
})
export class MaintenancedashboardComponent implements OnInit {
  myLoader: boolean=false;
  machine_list: any=[];

  constructor(private fb: FormBuilder, private nav: NavbarService, public dialog: MatDialog, private machine: MachineService,private toast: ToastrService,
    public router:Router) { 
    this.nav.show()
  }
  ngOnInit() {
    this.getMachines();
  }
  getMachines() {
    this.myLoader = true;

    this.machine.machine_get().pipe(untilDestroyed(this)).subscribe(res => {
      this.myLoader = false;

      this.machine_list = res;
    })
  }
  setting_viewnew() {
    const dialogRef = this.dialog.open(Maintenancedashboardmtmodal, {
      width: '900px',
      

    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit(); 
    });
  }

  setting(machinename) {
    // const dialogRef = this.dialog.open(Settingmodal, {
    //   width: '900px',
      

    // });
    // dialogRef.afterClosed().subscribe(result => {
    //   this.ngOnInit(); 
    // });
    localStorage.setItem("machine-name",machinename)
    this.router.navigate(['/Setting'])
  }
  spindle(){
    const dialogRef = this.dialog.open(Speedmodal, {
      width: '900px',
      

    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit(); 
    });
  }
  temperature(){
    const dialogRef = this.dialog.open(Temperaturemodal, {
      width: '900px',
      

    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit(); 
    });
  }
  ngOnDestroy(){}
}

@Component({
  selector: 'app-maintenancedashboard',
  templateUrl: './mtmodel.html',
  styleUrls: ['./maintenancedashboard.component.scss']
})
export class Maintenancedashboardmtmodal implements OnInit {

  constructor(private nav:NavbarService,public dialogRef: MatDialogRef<Maintenancedashboardmtmodal>) { 
    this.nav.show()
  }
  dialogclose(){
this.dialogRef.close();
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'app-maintenancedashboard',
  templateUrl: './speedmodal.html',
  styleUrls: ['./maintenancedashboard.component.scss']
})
export class Speedmodal implements OnInit {

  constructor(private nav:NavbarService) { 
    this.nav.show()
  }

  ngOnInit() {
  }

}
@Component({
  selector: 'app-maintenancedashboard',
  templateUrl: './temperaturemodal.html',
  styleUrls: ['./maintenancedashboard.component.scss']
})
export class Temperaturemodal implements OnInit {

  constructor(private nav:NavbarService) { 
    this.nav.show()
  }

  ngOnInit() {
  }

}
@Component({
  selector: 'app-maintenancedashboard',
  templateUrl: './settingmodal.html',
  styleUrls: ['./maintenancedashboard.component.scss']
})
export class Settingmodal implements OnInit {
  myLoader: boolean=false;
  values: any=[];

  constructor(private nav:NavbarService, private machine: MachineService) { 
    this.nav.show()
    this.myLoader=true;
    this.machine.settingget().pipe(untilDestroyed(this)).subscribe(res => {
      this.myLoader = false;
        console.log(res)
        this.values=res
    })

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
  ngOnInit() {
  }
  ngOnDestroy(){}

}
