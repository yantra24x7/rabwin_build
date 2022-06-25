import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SharedModule} from '../shared/shared.module';
import { TrendingChartRoutingModule } from './trendingchart-routing.module';
import { TrendingchartComponent } from './trendingchart.component';
import { CountUpModule } from 'ngx-countup';
import { HighchartsChartModule } from 'highcharts-angular';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { DashboardService} from '../../Service/app/dashboard.service';
import { ReportService } from 'src/app/Service/app/report.service';
import { SatDatepickerModule, SatNativeDateModule } from 'saturn-datepicker';


@NgModule({
  declarations: [TrendingchartComponent],
  imports: [    TrendingChartRoutingModule, 
    CommonModule,SharedModule, SatDatepickerModule, SatNativeDateModule,
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
  providers:[ReportService,DatePipe]

})
export class TrendingChartModule { }
 