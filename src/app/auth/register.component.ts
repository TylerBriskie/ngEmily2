import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  registerUserData = {};
  constructor() { }

  ngOnInit() {
  }
  registerUser(){
    console.log('registering user:', this.registerUserData);
  }
}
