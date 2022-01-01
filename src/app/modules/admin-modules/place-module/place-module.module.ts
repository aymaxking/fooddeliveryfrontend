import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceListComponent } from './place-list/place-list.component';
import { AddPlaceComponent } from './add-place/add-place.component';
import { EditPlaceComponent } from './edit-place/edit-place.component';
import { PlaceModuleRoutingModule } from './place-module-routing.module';
import { PlaceModuleComponent } from './place-module.component';
import { ApplicationListComponent } from './application-list/application-list.component';



@NgModule({
  declarations: [
    PlaceListComponent,
    AddPlaceComponent,
    EditPlaceComponent,
    PlaceModuleComponent,
    ApplicationListComponent
  ],
  imports: [
    CommonModule,
    PlaceModuleRoutingModule,
  ]
})
export class PlaceModuleModule { }
