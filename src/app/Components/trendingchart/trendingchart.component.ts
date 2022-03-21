import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/Nav/navbar.service';

@Component({
  selector: 'app-trendingchart',
  templateUrl: './trendingchart.component.html',
  styleUrls: ['./trendingchart.component.scss']
})
export class TrendingchartComponent implements OnInit {

  constructor(private nav:NavbarService) { 
    this.nav.show()
  }

  ngOnInit() {
  }

}
