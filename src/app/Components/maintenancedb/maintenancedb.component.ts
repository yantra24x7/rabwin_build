import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/Nav/navbar.service';
declare var Highcharts: any;

@Component({
  selector: 'app-maintenancedb',
  templateUrl: './maintenancedb.component.html',
  styleUrls: ['./maintenancedb.component.scss']
})
export class MaintenancedbComponent implements OnInit {

  constructor(private nav:NavbarService) {
    this.nav.show()
   }

  ngOnInit(): void {  
 
  }

}
