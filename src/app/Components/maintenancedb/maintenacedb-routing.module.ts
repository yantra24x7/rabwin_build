import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintenancedbComponent } from './maintenancedb.component';

const routes: Routes = [{ path: '', component: MaintenancedbComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenanceDbRoutingModule { }
