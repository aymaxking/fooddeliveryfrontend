import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsModuleComponent } from './locations-module.component';
import { LocationsListComponent } from './locations-list/locations-list.component';
import {LocationsModuleRoutingModule} from "./locations-module-routing.module";
import {PlaceModulesComponent} from "../place-modules.component";



@NgModule({
  declarations: [
    LocationsModuleComponent,
    LocationsListComponent
  ],
  imports: [
    CommonModule,
    LocationsModuleRoutingModule,
  ]
})
export class LocationsModuleModule { }
