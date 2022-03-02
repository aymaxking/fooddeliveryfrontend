import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GeneralModulesComponent} from './general-modules.component';
import {NavbarComponent} from "./generalPartials/generalNavbar/navbar.component";
import {GeneralModulesRoutingModule} from "./general-modules-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    GeneralModulesComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    GeneralModulesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ]
})
export class GeneralModulesModule {
}
