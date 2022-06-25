import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule} from '../shared/shared.module';
import { MaintenanceDbRoutingModule } from './maintenacedb-routing.module';
import { MaintenancedbComponent } from './maintenancedb.component';
import { CountUpModule } from 'ngx-countup';
import { HighchartsChartModule } from 'highcharts-angular';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { DashboardService} from '../../Service/app/dashboard.service';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [MaintenancedbComponent],
  imports: [    MaintenanceDbRoutingModule, 
    CommonModule,SharedModule,
    CountUpModule,HighchartsChartModule,
    CarouselModule,
    NgCircleProgressModule.forRoot({
      radius: 35,
      backgroundOpacity: 1,
      // backgroundStrokeWidth: 15,
      // "responsive": false,
      //space: -17,
      //maxPercent: 100,
      //outerStrokeWidth: 15,
     // innerStrokeWidth: 15,

    //  "showTitle": true,
    //  "showSubtitle": false,
      backgroundStrokeWidth: 0,
      backgroundPadding: 0,
     // "responsive": true,
      space: -8,
      toFixed: 0,
      maxPercent: 100,
      outerStrokeWidth: 8,
      outerStrokeLinecap: "square",
      innerStrokeWidth: 8,
      imageHeight: 20,
      imageWidth: 20,
      // lazy: true,



      "subtitle": [
        ""
      ],
    })
  
  ],
  providers:[DashboardService]

})
export class MaintenancedbModule { }
 