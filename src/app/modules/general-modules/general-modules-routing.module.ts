import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {GeneralModulesComponent} from "./general-modules.component";


const routes: Routes = [
  {
    path: "",
    component:GeneralModulesComponent,
    children:[

    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ]
})
export class GeneralModulesRoutingModule {
}
