import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SharedModule} from '../shared/shared.module';
import { AlarmReportRoutingModule } from './alarmreports-routing.module';
import { AlarmreportsComponent } from './alarmreports.component';
import { CountUpModule } from 'ngx-countup';

import { NgCircleProgressModule } from 'ng-circle-progress';

import { ReportService } from 'src/app/Service/app/report.service';
import { SatDatepickerModule, SatNativeDateModule } from 'saturn-datepicker';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { HighchartsChartModule } from 'highcharts-angular';


@NgModule({
  declarations: [AlarmreportsComponent],
  imports: [    AlarmReportRoutingModule, 
    CommonModule,SharedModule,
    CountUpModule,HighchartsChartModule,
    SatNativeDateModule,SatDatepickerModule,NgMultiSelectDropDownModule.forRoot(),
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
export class AlarmReportModule { }
 