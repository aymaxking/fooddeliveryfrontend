import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ClientListComponent} from "./client-list/client-list.component";
import {EditClientComponent} from "./edit-client/edit-client.component";
import {AddClientComponent} from "./add-client/add-client.component";



const routes: Routes = [
  {
    path: "", component:ClientListComponent,
  },
  // {
  //   path: "list", component:ClientListComponent,
  // },
  {
    path: "add", component:AddClientComponent,
  },
  {
    path: "edit/:id", component:EditClientComponent,
  },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ClientModuleRoutingModule { }
