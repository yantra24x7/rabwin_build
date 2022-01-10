import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SpindleComponent } from './spindle.component';
import { SharedModule} from '../shared/shared.module';
import { DatePipe } from '@angular/common';
import { HighchartsChartModule } from 'highcharts-angular';
const routes: Routes = [{ path: '',component: SpindleComponent }];

@NgModule({
  declarations: [SpindleComponent],
  imports: [RouterModule.forChild(routes),
  CommonModule,SharedModule,HighchartsChartModule
  ],
  providers: [
    DatePipe,
  ],
 
})
export class SpindleModule { }
