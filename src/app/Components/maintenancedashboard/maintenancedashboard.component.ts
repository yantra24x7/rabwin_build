import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NavbarService } from 'src/app/Nav/navbar.service';

@Component({
  selector: 'app-maintenancedashboard',
  templateUrl: './maintenancedashboard.component.html',
  styleUrls: ['./maintenancedashboard.component.scss']
})
export class MaintenancedashboardComponent implements OnInit {

  constructor(private nav:NavbarService, public dialog: MatDialog,) { 
    this.nav.show()
  }

  ngOnInit() {
  }
  setting_viewnew() {
    const dialogRef = this.dialog.open(Maintenancedashboardmtmodal, {
      width: '900px',
      

    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit(); 
    });
  }
}

@Component({
  selector: 'app-maintenancedashboard',
  templateUrl: './mtmodel.html',
  styleUrls: ['./maintenancedashboard.component.scss']
})
export class Maintenancedashboardmtmodal implements OnInit {

  constructor(private nav:NavbarService) { 
    this.nav.show()
  }

  ngOnInit() {
  }

}
