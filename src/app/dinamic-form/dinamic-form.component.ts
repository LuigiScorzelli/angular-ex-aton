import { Component, OnInit } from '@angular/core';
import { Register } from '../register';
import { EnrollmentService } from '../enrollment.service';
import { FormBuilder, Validators } from '@angular/forms';
import { PasswordValidator } from '../shared/password.validator';

@Component({
  selector: 'app-dinamic-form',
  templateUrl: './dinamic-form.component.html',
  styleUrls: ['./dinamic-form.component.css']
})
export class DinamicFormComponent implements OnInit {
  private errorMsg = '';
  get username() {
    return this.registrationForm.get('username');
  };
  get password() {
    return this.registrationForm.get('password');
  };
  get email() {
    return this.registrationForm.get('address.email');
  };
  get addressToResident() {
    return this.registrationForm.get('address.addressToResident');
  };
  get city() {
    return this.registrationForm.get('address.city');
  };
  get state() {
    return this.registrationForm.get('address.state');
  };
  get postalCode() {
    return this.registrationForm.get('address.postalCode');
  };
  constructor(private _EnrollmentService:  EnrollmentService, private fb: FormBuilder) { }

  registrationForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(5)]],
    confirmPassword: [''],
    address: this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      addressToResident: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      postalCode: ['', Validators.required]
    })
  }, {validator: PasswordValidator });

  ngOnInit() {
  }
  onSubmit(registerForm) {
    console.log("dinamic form", registerForm);
    this._EnrollmentService.enroll(registerForm)
                .subscribe(
                  data => console.log('success', data),
                  error => this.errorMsg = error.statusText
                );
  };
}
