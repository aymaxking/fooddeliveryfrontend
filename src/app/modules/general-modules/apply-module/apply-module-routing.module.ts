import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ApplyModuleComponent} from "./apply-module.component";
import {ApplyPlaceComponent} from "./apply-place/apply-place.component";
import {ApplyDeliveryComponent} from "./apply-delivery/apply-delivery.component";

const routes: Routes = [
  {
    path: "", component:ApplyModuleComponent,
  },
  {
    path: "place", component:ApplyPlaceComponent,
  },
  {
    path: "delivery", component:ApplyDeliveryComponent,
  },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplyModuleRoutingModule { }
