import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlarmreportsComponent } from './alarmreports.component';

const routes: Routes = [{ path: '', component: AlarmreportsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlarmReportRoutingModule { }
