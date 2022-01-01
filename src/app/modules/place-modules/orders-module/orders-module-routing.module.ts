import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {OrdersListComponent} from "./orders-list/orders-list.component";



const routes: Routes = [
  {
    path: "", component:OrdersListComponent,
  },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersModuleRoutingModule { }
