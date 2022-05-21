import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {PlaceModulesComponent} from "./place-modules.component";


const routes: Routes = [
  {
    path: "",
    component: PlaceModulesComponent,
    children: [
      {
        path: "menu",
        loadChildren: () => import ('./menu-module/menu-module.module').then(m => m.MenuModuleModule),
      },
      {
        path: "orders",
        loadChildren: () => import ('./orders-module/orders-module.module').then(m => m.OrdersModuleModule),
      },

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
export class PlaceModulesRoutingModule {
}
