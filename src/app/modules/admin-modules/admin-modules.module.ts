import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminModulesComponent } from './admin-modules.component';
import { AdminModulesRoutingModule } from './admin-modules-routing.module';
import {NavbarComponent} from "./adminPartials/adminNavbar/navbar.component";
import {SidebarComponent} from "./adminPartials/adminSidebar/sidebar.component";
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";



@NgModule({
  declarations: [
    AdminModulesComponent,
    NavbarComponent,
    PageNotFoundComponent,
    SidebarComponent
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    AdminModulesRoutingModule
  ]
})
export class AdminModulesModule { }
