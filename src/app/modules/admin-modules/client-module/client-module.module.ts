import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListComponent } from './client-list/client-list.component';
import { AddClientComponent } from './add-client/add-client.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { ClientModuleRoutingModule } from './client-module-routing.module';
import { ClientModuleComponent } from './client-module.component';
import {AdminModulesModule} from "../admin-modules.module";



@NgModule({
  declarations: [
    ClientListComponent,
    AddClientComponent,
    EditClientComponent,
    ClientModuleComponent
  ],
  imports: [
    CommonModule,
    ClientModuleRoutingModule,
    AdminModulesModule
  ]
})
export class ClientModuleModule { }
