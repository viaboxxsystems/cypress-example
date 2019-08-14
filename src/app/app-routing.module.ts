import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LogisticsTrackerComponent} from './logistics-tracker/logistics-tracker.component';

const routes: Routes = [
  { path: '', component: LogisticsTrackerComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {



}
