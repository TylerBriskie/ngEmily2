import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  loginClientData = {};
  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit() {
    console.log('*robot noises* INITIATING. LOGIN. SEQUENCE.  ENTER USER NAME.');
  }

  loginClient(){
    this._auth.loginClient(this.loginClientData)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token);
          this._router.navigate(['/profile'])
        }
  ,
        err => console.log(err));
  }
}
