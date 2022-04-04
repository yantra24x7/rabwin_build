import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule} from '../shared/shared.module';
import { SettingsRoutingModule } from './setting-routing.module';

import { CountUpModule } from 'ngx-countup';
import { HighchartsChartModule } from 'highcharts-angular';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SettingsComponent } from './settings.component';
import { MachineService } from 'src/app/Service/app/machine.service';


@NgModule({
  declarations: [SettingsComponent],
  imports: [    SettingsRoutingModule, 
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
  providers:[MachineService]

})
export class SettingsModule { }
 