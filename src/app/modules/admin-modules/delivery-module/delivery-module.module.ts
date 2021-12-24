import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryListComponent } from './delivery-list/delivery-list.component';
import { AddDeliveryComponent } from './add-delivery/add-delivery.component';
import { EditDeliveryComponent } from './edit-delivery/edit-delivery.component';
import { DeliveryModuleRoutingModule } from './delivery-module-routing.module';
import { DeliveryModuleComponent } from './delivery-module.component';



@NgModule({
  declarations: [
    DeliveryListComponent,
    AddDeliveryComponent,
    EditDeliveryComponent,
    DeliveryModuleComponent
  ],
  imports: [
    CommonModule,
    DeliveryModuleRoutingModule
  ]
})
export class DeliveryModuleModule { }
