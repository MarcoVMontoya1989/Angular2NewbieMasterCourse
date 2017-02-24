import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { AppFormsComponent } from './account/appForms.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, AccountComponent, AppFormsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
