import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralModulesComponent } from './general-modules.component';
import {NavbarComponent} from "./generalPartials/generalNavbar/navbar.component";
import {GeneralModulesRoutingModule} from "./general-modules-routing.module";



@NgModule({
  declarations: [
    GeneralModulesComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    GeneralModulesRoutingModule
  ]
})
export class GeneralModulesModule { }
