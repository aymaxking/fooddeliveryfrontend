import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './category-list/category-list.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { CategoryModuleRoutingModule } from './category-module-routing.module';
import { CategoryModuleComponent } from './category-module.component';
import {AdminModulesModule} from "../admin-modules.module";
import { DetailsCategoryComponent } from './details-category/details-category.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    CategoryListComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    CategoryModuleComponent,
    DetailsCategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryModuleRoutingModule,
    AdminModulesModule,
    FormsModule
  ]
})
export class CategoryModuleModule { }
