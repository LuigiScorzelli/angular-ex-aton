import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {
  //private titleForm: string = 'Contact form';
  private usersArr = [];
  private userModel = new User('', '', '','',null);
  constructor() { }

  ngOnInit() {
  }

  onClickForm(userForm) {
    this.userModel = new User(userForm.name, userForm.lastname, userForm.email,userForm.password,userForm.phone);

    if(this.userModel.name != '' && this.userModel.lastname != '' && this.userModel.email != '' && this.userModel.password != '' && this.userModel.phone != null) {
      this.usersArr.push(this.userModel);
      this.userModel = new User('', '', '','',null);
    } else {
      alert('Form non valido');
    }
    console.log('array users', this.usersArr);
  }
}
