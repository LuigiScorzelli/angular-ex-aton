import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-json-table-employee',
  templateUrl: './json-table-employee.component.html',
  styleUrls: ['./json-table-employee.component.css']
})
export class JsonTableEmployeeComponent implements OnInit {
  private headerTitleTable: object = {
    title1: 'id',
    title2: 'name',
    title3: 'lastname'
  };
  private arrayEmployee;
  private url: string = 'http://localhost:3000/employee';
  constructor(private http: HttpClient) {
    http.get(this.url).subscribe( res => {
      this.arrayEmployee = res;
      console.log(this.arrayEmployee);
    })
  }

  ngOnInit() {
  }


}
