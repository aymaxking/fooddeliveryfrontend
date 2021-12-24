import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminModulesComponent } from './admin-modules.component';
import { AdminModulesRoutingModule } from './admin-modules-routing.module';
import {NavbarComponent} from "./adminPartials/adminNavbar/navbar.component";
import {SidebarComponent} from "./adminPartials/adminSidebar/sidebar.component";



@NgModule({
  declarations: [
    AdminModulesComponent,
    NavbarComponent,
    SidebarComponent
  ],
  exports: [
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    AdminModulesRoutingModule
  ]
})
export class AdminModulesModule { }
