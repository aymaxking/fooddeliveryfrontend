import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LocationsListComponent} from "./locations-list/locations-list.component";



const routes: Routes = [
  {
    path: "", component:LocationsListComponent,
  },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationsModuleRoutingModule { }
