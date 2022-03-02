import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import ('./modules/general-modules/general-modules.module').then(m => m.GeneralModulesModule),
  },
  {
    path: "admin",
    loadChildren: () => import ('./modules/admin-modules/admin-modules.module').then(m => m.AdminModulesModule),
  },
  {
    path: "place",
    loadChildren: () => import ('./modules/place-modules/place-modules.module').then(m => m.PlaceModulesModule),
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
