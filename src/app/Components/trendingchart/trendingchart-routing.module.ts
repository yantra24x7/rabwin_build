import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrendingchartComponent } from './trendingchart.component';

const routes: Routes = [{ path: '', component: TrendingchartComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrendingChartRoutingModule { }
