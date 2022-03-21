import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/Nav/navbar.service';

@Component({
  selector: 'app-maintenancedashboard',
  templateUrl: './maintenancedashboard.component.html',
  styleUrls: ['./maintenancedashboard.component.scss']
})
export class MaintenancedashboardComponent implements OnInit {

  constructor(private nav:NavbarService) { 
    this.nav.show()
  }

  ngOnInit() {
  }

}
