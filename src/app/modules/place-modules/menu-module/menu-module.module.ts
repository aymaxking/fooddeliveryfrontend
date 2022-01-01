import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModuleComponent } from './menu-module.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import {MenuModuleRoutingModule} from "./menu-module-routing.module";



@NgModule({
  declarations: [
    MenuModuleComponent,
    MenuListComponent
  ],
  imports: [
    CommonModule,
    MenuModuleRoutingModule
  ]
})
export class MenuModuleModule { }
