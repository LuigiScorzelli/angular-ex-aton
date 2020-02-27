import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-employees-detail',
  templateUrl: './employees-detail.component.html',
  styleUrls: ['./employees-detail.component.css']
})
export class EmployeesDetailComponent implements OnInit {
  public employeeId;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.employeeId = id;
    })
  };
  goPrev() {
    if(this.employeeId > 0) {
      let prevId = this.employeeId - 1;
      this.router.navigate(['employees', prevId]);
    }
  };
  goNext() {
      if(this.employeeId >= 0 && this.employeeId < 8) {
        let nextId = this.employeeId + 1;
        this.router.navigate(['employees', nextId]);
      }
  };
}
