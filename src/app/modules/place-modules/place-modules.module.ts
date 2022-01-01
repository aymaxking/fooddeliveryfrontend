import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceModulesComponent } from './place-modules.component';
import {NavbarComponent} from "./placePartials/placeNavbar/navbar.component";
import {PlaceModulesRoutingModule} from "./place-modules-routing.module";
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";



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
