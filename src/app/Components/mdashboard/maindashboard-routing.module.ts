import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MdashboardComponent } from './mdashboard.component';

const routes: Routes = [{ path: '', component: MdashboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MdashboardRoutingModule { }
