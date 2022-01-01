import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AdminModulesComponent} from "./admin-modules.component";


const routes: Routes = [
  {
    path: "",
    component: AdminModulesComponent,
    children: [
      {
        path: "categories",
        loadChildren: () => import ('./category-module/category-module.module').then(m => m.CategoryModuleModule),
      },
      {
        path: "clients",
        loadChildren: () => import ('./client-module/client-module.module').then(m => m.ClientModuleModule),
      },
      {
        path: "deliveries",
        loadChildren: () => import ('./delivery-module/delivery-module.module').then(m => m.DeliveryModuleModule),
      },
      {
        path: "places",
        loadChildren: () => import ('./place-module/place-module.module').then(m => m.PlaceModuleModule),
      }
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ]
})
export class AdminModulesRoutingModule {
}
