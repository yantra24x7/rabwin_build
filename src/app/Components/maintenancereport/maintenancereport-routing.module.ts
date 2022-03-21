import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintenancereportComponent } from './maintenancereport.component';

const routes: Routes = [{ path: '', component: MaintenancereportComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenancereportRoutingModule { }
