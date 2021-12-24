import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryListComponent } from './delivery-list/delivery-list.component';
import { AddDeliveryComponent } from './add-delivery/add-delivery.component';
import { EditDeliveryComponent } from './edit-delivery/edit-delivery.component';
import { DeliveryModuleRoutingModule } from './delivery-module-routing.module';



@NgModule({
  declarations: [
    DeliveryListComponent,
    AddDeliveryComponent,
    EditDeliveryComponent
  ],
  imports: [
    CommonModule,
    DeliveryModuleRoutingModule
  ]
})
export class DeliveryModuleModule { }
