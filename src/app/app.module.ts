import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { MatButtonModule, MatMenuModule, MatSidenavModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MyNavbarComponent } from './my-navbar/my-navbar.component';
import { EmployeeService } from './employee.service';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { EmployeesDetailComponent } from './employees-detail/employees-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JsonTableEmployeeComponent } from './json-table-employee/json-table-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNavbarComponent,
    routingComponents,
   EmployeesDetailComponent,
   JsonTableEmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    /*MatButtonModule,
    MatMenuModule,
    MatSidenavModule*/
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
