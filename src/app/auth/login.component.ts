import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  loginClientData = {};
  constructor(private _auth: AuthService) { }

  ngOnInit() {
    console.log('*robot noises* INITIATING. LOGIN. SEQUENCE.  ENTER USER NAME.');
  }

  loginClient(){
    this._auth.loginClient(this.loginClientData)
      .subscribe(
        res =>console.log(res),
        err => console.log(err));
  }
}
