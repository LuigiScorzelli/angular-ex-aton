import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListServiceEmployeesComponent } from './list-service-employees/list-service-employees.component';
import { EmployeesDetailComponent } from './employees-detail/employees-detail.component';
import { MyFormComponent } from './my-form/my-form.component';
import { DinamicFormComponent } from './dinamic-form/dinamic-form.component';
import { JsonTableEmployeeComponent } from './json-table-employee/json-table-employee.component';
import { PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/employees', pathMatch: 'full'},
  {path: 'employees', component: ListServiceEmployeesComponent},  
  {path: 'employees/:id', component: EmployeesDetailComponent},
  {path: 'contact', component: MyFormComponent},
  {path: 'register', component: DinamicFormComponent},
  {path: 'jsonServer', component: JsonTableEmployeeComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ListServiceEmployeesComponent, EmployeesDetailComponent, MyFormComponent, DinamicFormComponent, PageNotFoundComponent, JsonTableEmployeeComponent];
