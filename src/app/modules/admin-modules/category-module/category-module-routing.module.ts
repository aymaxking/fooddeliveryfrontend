import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CategoryListComponent} from "./category-list/category-list.component";
import {AddCategoryComponent} from "./add-category/add-category.component";
import {EditCategoryComponent} from "./edit-category/edit-category.component";
import {CategoryModuleComponent} from "./category-module.component";

const routes: Routes = [
  {
    path: "", component:CategoryModuleComponent,
  },
  {
    path: "list", component:CategoryListComponent,
  },
  {
    path: "add", component:AddCategoryComponent,
  },
  {
    path: "edit/:id", component:EditCategoryComponent,
  },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryModuleRoutingModule { }