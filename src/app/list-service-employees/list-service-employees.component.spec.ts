import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListServiceEmployeesComponent } from './list-service-employees.component';

describe('ListServiceEmployeesComponent', () => {
  let component: ListServiceEmployeesComponent;
  let fixture: ComponentFixture<ListServiceEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListServiceEmployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListServiceEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
