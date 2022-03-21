import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintenancedashboardComponent } from './maintenancedashboard.component';

const routes: Routes = [{ path: '', component: MaintenancedashboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenancedashboardbRoutingModule { }
