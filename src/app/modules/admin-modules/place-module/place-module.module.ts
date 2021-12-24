import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceListComponent } from './place-list/place-list.component';
import { AddPlaceComponent } from './add-place/add-place.component';
import { EditPlaceComponent } from './edit-place/edit-place.component';
import { PlaceModuleRoutingModule } from './place-module-routing.module';
import {AppModule} from "../../../app.module";



@NgModule({
  declarations: [
    PlaceListComponent,
    AddPlaceComponent,
    EditPlaceComponent
  ],
  imports: [
    CommonModule,
    PlaceModuleRoutingModule,
    AppModule
  ]
})
export class PlaceModuleModule { }
