import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppDashboardComponent} from "../app-dashboard/app-dashboard.component";
import {OtherOneComponent} from "./other-one/other-one.component";
import {OtherTwoComponent} from "./other-two/other-two.component";

const routes: Routes = [
  // { path: '**', component: AppDashboardComponent},
  { path: '', component: AppDashboardComponent },
  { path: 'home', component: AppDashboardComponent },
  { path: 'dashboard', component: AppDashboardComponent },
  { path: 'other-one', component: OtherOneComponent },
  { path: 'other-two', component: OtherTwoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
