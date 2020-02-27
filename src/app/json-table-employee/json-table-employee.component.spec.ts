import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonTableEmployeeComponent } from './json-table-employee.component';

describe('JsonTableEmployeeComponent', () => {
  let component: JsonTableEmployeeComponent;
  let fixture: ComponentFixture<JsonTableEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonTableEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonTableEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
