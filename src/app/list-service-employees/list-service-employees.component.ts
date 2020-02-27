import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { EnrollmentService } from '../enrollment.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-list-service-employees',
  templateUrl: './list-service-employees.component.html',
  styleUrls: ['./list-service-employees.component.css']
})
export class ListServiceEmployeesComponent implements OnInit {
  private employees = [];
  private getEx: object = [];
  constructor(private _employeeService: EmployeeService,private _enrollmentService: EnrollmentService, private router: Router ) { }

  ngOnInit() {
    this._employeeService.getEmployees()
      .subscribe(data => this.employees = data );
  }
  onSelect(employee) {
    this.router.navigate(['/employees', employee.id]);
  }
}
