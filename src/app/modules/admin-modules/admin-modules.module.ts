import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminModulesComponent } from './admin-modules.component';
import { AdminModulesRoutingModule } from './admin-modules-routing.module';
import {NavbarComponent} from "./adminPartials/adminNavbar/navbar.component";



@NgModule({
  declarations: [
    AdminModulesComponent,
    NavbarComponent
  ],
  exports: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    AdminModulesRoutingModule
  ]
})
export class AdminModulesModule { }
