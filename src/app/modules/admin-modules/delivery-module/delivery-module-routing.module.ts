import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DeliveryListComponent} from "./delivery-list/delivery-list.component";
import {AddDeliveryComponent} from "./add-delivery/add-delivery.component";
import {EditDeliveryComponent} from "./edit-delivery/edit-delivery.component";



const routes: Routes = [
  {
    path: "", component:DeliveryListComponent,
  },
  {
    path: "add", component:AddDeliveryComponent,
  },
  {
    path: "edit/:id", component:EditDeliveryComponent,
  },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryModuleRoutingModule { }
