import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule} from '../shared/shared.module';
import { MaintenancedashboardbRoutingModule } from './maintenancedashboard-routing.module';
import { MaintenancedashboardComponent } from './maintenancedashboard.component';
import { CountUpModule } from 'ngx-countup';
import { HighchartsChartModule } from 'highcharts-angular';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { DashboardService} from '../../Service/app/dashboard.service';


@NgModule({
  declarations: [MaintenancedashboardComponent],
  imports: [    MaintenancedashboardbRoutingModule, 
    CommonModule,SharedModule,
    CountUpModule,HighchartsChartModule,
    NgCircleProgressModule.forRoot({
      "backgroundColor": "#0e121b",
      backgroundOpacity: 1,
      "backgroundStroke": "#0e121b",
      backgroundStrokeWidth: 12,
      backgroundPadding: 0,
      radius: 36,
      space: -14,
      "subtitle": [
        "OEE"
      ],
      "titleFontSize": "30",
      "subtitleFontSize": "20",
      "subtitleFontWeight": "800",
  "titleFontWeight": "500",
  "titleColor": "#ffffff",
      toFixed: 0,
      maxPercent: 100,
      outerStrokeWidth: 14,
      innerStrokeWidth: 14,
      "showSubtitle": true,
      "showUnits": false,
      outerStrokeLinecap: "square",
    })
  
  ],
  providers:[DashboardService]

})
export class MaintenancedashboardModule { }
 