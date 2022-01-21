import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DeliveryListComponent} from "./delivery-list/delivery-list.component";
import {AddDeliveryComponent} from "./add-delivery/add-delivery.component";
import {EditDeliveryComponent} from "./edit-delivery/edit-delivery.component";
import {DeliveryModuleComponent} from "./delivery-module.component";
import {ApplicationListComponent} from "../place-module/application-list/application-list.component";
import {ApplicationsListComponent} from "./applications-list/applications-list.component";



const routes: Routes = [
  {
    path: "", component:DeliveryModuleComponent,
    children:[
  {
    path: "list", component:DeliveryListComponent,
  },
  {
    path: "applications", component:ApplicationsListComponent,
  },
  {
    path: "add", component:AddDeliveryComponent,
  },
  {
    path: "edit/:id", component:EditDeliveryComponent,
  },
  ]
  },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryModuleRoutingModule { }
