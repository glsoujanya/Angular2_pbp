import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CustomerListComponent} from './customer.component/customer.component'
import {CustomersComponent} from './customer.component/customers.component'
import {HttpModule} from '@angular/http';

import { AppComponent }  from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ], 
  declarations: [ AppComponent, CustomerListComponent, CustomersComponent ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
