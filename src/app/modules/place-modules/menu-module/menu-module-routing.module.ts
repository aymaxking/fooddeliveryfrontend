import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MenuListComponent} from "./menu-list/menu-list.component";



const routes: Routes = [
  {
    path: "", component:MenuListComponent,
  },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuModuleRoutingModule { }
