import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersModuleComponent } from './orders-module.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import {OrdersModuleRoutingModule} from "./orders-module-routing.module";



@NgModule({
  declarations: [
    OrdersModuleComponent,
    OrdersListComponent
  ],
  imports: [
    CommonModule,
    OrdersModuleRoutingModule
  ]
})
export class OrdersModuleModule { }
