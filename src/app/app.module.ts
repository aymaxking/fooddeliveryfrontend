import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MDBBootstrapModule} from "angular-bootstrap-md";
import {ListFilterPipe} from "./pipes/listFilterPipe";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    ListFilterPipe,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot()],
  providers: [],
  exports: [
    ListFilterPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
