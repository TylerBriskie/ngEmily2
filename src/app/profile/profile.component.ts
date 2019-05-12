import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {HttpErrorResponse} from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  client = {};
  isLoaded = false;
  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit() {
    this._auth.getClientInfo()
      .subscribe(
        res => {
          console.log(res);
          this.client = res
        },
        err =>  {
          if (err instanceof HttpErrorResponse){
            console.log('error: ', err);
            this._router.navigate(['/login']);
          }
        }, () => {
          console.log('finished loading')
          this.isLoaded = true;
        }
      )
  }

  updateEmail() {
    event.preventDefault();
    console.log('updating email address');
  }

  updatePassword(){
    event.preventDefault();
    console.log('updating password');
  }

  updatePersonalInfo(){
    let clientInfo = {...this.client};

    console.log('posting form - (component) info: ', clientInfo);
    this._auth.updatePersonalInfo(this.client)
      .subscribe(
        res => {

          // localStorage.setItem('token', res.token);
          // this._router.navigate(['/profile'])
        }
        ,
        err => console.log(err));
  }

}
