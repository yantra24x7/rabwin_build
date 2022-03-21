import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/Nav/navbar.service';

@Component({
  selector: 'app-alarmreports',
  templateUrl: './alarmreports.component.html',
  styleUrls: ['./alarmreports.component.scss']
})
export class AlarmreportsComponent implements OnInit {

  constructor(private nav:NavbarService) {
    this.nav.show()
   }

  ngOnInit() {
  }

}
