import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {GeneralModulesComponent} from "./general-modules.component";
import {ApplyPlaceComponent} from "./apply-module/apply-place/apply-place.component";
import {ApplyDeliveryComponent} from "./apply-module/apply-delivery/apply-delivery.component";


const routes: Routes = [
  {
    path: "",
    component:GeneralModulesComponent,
    children:[

    ]
  },
  {
    path: "partner", component:ApplyPlaceComponent,
  },
  {
    path: "rider", component:ApplyDeliveryComponent,
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
