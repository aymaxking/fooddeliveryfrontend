import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {PlaceListComponent} from "./place-list/place-list.component";
import {AddPlaceComponent} from "./add-place/add-place.component";
import {EditPlaceComponent} from "./edit-place/edit-place.component";
import {PlaceModuleComponent} from "./place-module.component";




const routes: Routes = [
  {
    path: "", component:PlaceModuleComponent,
  },
  {
    path: "list", component:PlaceListComponent,
  },
  {
    path: "add", component:AddPlaceComponent,
  },
  {
    path: "edit/:id", component:EditPlaceComponent,
  },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PlaceModuleRoutingModule { }
