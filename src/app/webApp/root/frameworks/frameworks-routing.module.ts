import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AngularComponent} from "./composants-enfants/angular/angular.component";

export const routesFw: Routes = [
  {
    path:'', children : [
      { path: 'angular-13', component:AngularComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routesFw)],
  exports: [RouterModule]
})
export class FrameworksRoutingModule { }
