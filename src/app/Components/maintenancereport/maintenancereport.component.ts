import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/Nav/navbar.service';

@Component({
  selector: 'app-maintenancereport',
  templateUrl: './maintenancereport.component.html',
  styleUrls: ['./maintenancereport.component.scss']
})
export class MaintenancereportComponent implements OnInit {

  constructor(private nav:NavbarService) { 
    this.nav.show()
  }

  ngOnInit() {
  }

}
