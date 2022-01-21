import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyModuleComponent } from './apply-module.component';
import { ApplyDeliveryComponent } from './apply-delivery/apply-delivery.component';
import { ApplyPlaceComponent } from './apply-place/apply-place.component';
import {ApplyModuleRoutingModule} from "./apply-module-routing.module";



@NgModule({
  declarations: [
    ApplyModuleComponent,
    ApplyDeliveryComponent,
    ApplyPlaceComponent,
  ],
  imports: [
    CommonModule,
    ApplyModuleRoutingModule
  ]
})
export class ApplyModuleModule { }
