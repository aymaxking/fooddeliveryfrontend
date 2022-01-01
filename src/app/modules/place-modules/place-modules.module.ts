import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceModulesComponent } from './place-modules.component';
import {NavbarComponent} from "./placePartials/placeNavbar/navbar.component";
import {PlaceModulesRoutingModule} from "./place-modules-routing.module";



@NgModule({
  declarations: [
    PlaceModulesComponent,
    NavbarComponent,

  ],
  imports: [
    CommonModule,
    PlaceModulesRoutingModule,
  ]
})
export class PlaceModulesModule { }
