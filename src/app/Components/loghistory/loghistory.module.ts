import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule} from '../shared/shared.module';

import { LoghistoryComponent,modal } from './loghistory.component';


const routes: Routes = [{ path: '', component: LoghistoryComponent }];
@NgModule({
  declarations: [LoghistoryComponent,modal],
  imports: [
    CommonModule,SharedModule,
  RouterModule.forChild(routes),
  ],
  entryComponents:[modal]
})
export class LoghistoryModule { }
