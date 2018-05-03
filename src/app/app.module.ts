import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module


import { AppComponent } from './app.component';
import { RegFormComponent } from './reg-form/reg-form.component';


@NgModule({
  declarations: [
    AppComponent,
    RegFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule // <-- #2 add to @NgModule imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
