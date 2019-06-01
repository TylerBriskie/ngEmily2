import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import { MatSnackBar} from "@angular/material";
import { MatDialog} from '@angular/material/dialog';
import {HttpErrorResponse} from "@angular/common/http";
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  client = {
    firstName: String,
    lastName: String,
    birthDate: String,
    heightFeet: String,
    heightInches: String,
    weight: String,
  };
  currentPassword = '';
  newPassword = '';
  newPasswordConfirm = '';
  isLoaded = false;
  isUpdatingEmail = false;
  isUpdatingPassword = false;

  constructor(private _auth: AuthService,
              private _router: Router,
              private _snackBar: MatSnackBar,
              private _dialog: MatDialog,) { }

  ngOnInit() {
    this._auth.getClientInfo()
      .subscribe(
        res => {
          console.log('got client:',res);
          this.client = res;
          this.client.birthDate = moment(res.birthDate).format('MM/DD/YYYY');
        },
        err =>  {
          if (err instanceof HttpErrorResponse){
            console.log('error: ', err);
            this._router.navigate(['/login']);
          }
        }, () => {
          console.log('finished loading');
          this.isLoaded = true;
        }
      )
  }

  updateEmail() {
    event.preventDefault();
    this.isUpdatingEmail = true;
    const dialogRef = this._dialog.open()
  }

  cancelUpdate(){
    event.preventDefault();
    this.isUpdatingEmail = false;
    this.isUpdatingPassword = false;
    this.currentPassword = '';
    this.newPassword = '';
    this.newPasswordConfirm = '';
  }

  updatePassword(){
    event.preventDefault();
    this.isUpdatingPassword = true;
  }

  submitUpdatePassword(){
    event.preventDefault();
    if (this.newPassword.length < 8){
      this._snackBar.open('Password Must Be 8 Characters', "OK", {duration: 2500});
    }
    if (this.newPassword === this.newPasswordConfirm){
      this._snackBar.open('Passwords Match', "OK", {duration: 2500});
    }
  }

  updatePersonalInfo(){
    console.log('updating...');
    this._snackBar.open( "Profile Saved", "OK",{
      duration: 3500,
    });
    let clientInfo = {...this.client};
    if (clientInfo.heightInches != "0"){
      console.log('removing  leading  zeros');
      clientInfo.heightInches = clientInfo.heightInches.replace(/^0+/, '');
    }
    clientInfo.heightFeet = clientInfo.heightFeet.replace(/^0+/,'');
    clientInfo.weight = clientInfo.weight.replace(/^0+/,'');

    this._auth.updatePersonalInfo(clientInfo)
      .subscribe(
        res => {
          console.log('response', res);
          this._snackBar.open( "Profile Saved", "Fuck Off",{
            duration: 3500,
          });
        }
        ,
        err => console.log(err),
        () => {
          console.log('complete');
        });
  }

}
