import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminModulesComponent } from './admin-modules.component';
import { AdminModulesRoutingModule } from './admin-modules-routing.module';
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";



@NgModule({
  declarations: [
    AdminModulesComponent,
    PageNotFoundComponent,
  ],
  exports: [
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    AdminModulesRoutingModule
  ]
})
export class AdminModulesModule { }
