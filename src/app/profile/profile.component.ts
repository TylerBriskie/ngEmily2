import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import { MatSnackBar} from "@angular/material";
import {HttpErrorResponse} from "@angular/common/http";
import { Router } from '@angular/router';
import * as moment from 'moment';
import {ClientService} from "../services/client.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  client = {
    firstName: String,
    lastName: String,
    birthDate: String,
    heightFeet: String,
    heightInches: String,
    weight: String,
    conditions: String,
    email: String,
  };
  isLoaded = false;
  isUpdatingEmail = false;
  isUpdatingPassword = false;

  constructor(private _auth: AuthService,
              private _clientService: ClientService,
              private _router: Router,
              private _snackBar: MatSnackBar) { }


  ngOnInit() {
    this._clientService.getClientInfo()
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
  }

  updatePassword(){
    event.preventDefault();
    this.isUpdatingPassword = true;
  }
  updatePasswordSuccess(updated){
    if (updated === true){
      this.isUpdatingPassword = false;
      this._snackBar.open( "Password Changed", "OK",{
        duration: 3500,
        panelClass: ['blue-snackbar']
      });
    } else {
      this._snackBar.open("Current Password Incorrect", "OK", {
        duration: 3500,
        panelClass: ['red-snackbar']
      })
    }
  }
  updateEmailSuccess(updated){
    console.log(updated);
    if (updated){
      this.isUpdatingEmail = false;
      this.client.email = updated;
      this._snackBar.open('Email Successfully Changed', "OK", {
        duration: 3500,
        panelClass: ['blue-snackbar']
      })
    } else {
      this._snackBar.open("Email already in system", "OK", {
        duration: 3500,
        panelClass: ['red-snackbar']
      });
    }
  }

  cancelUpdate(){
    event.preventDefault();
    this.isUpdatingEmail = false;
    this.isUpdatingPassword = false;
  }

  updatePersonalInfo(){
    let clientInfo = {...this.client};
    if (clientInfo.heightInches != "0"){
      clientInfo.heightInches = clientInfo.heightInches.replace(/^0+/, '');
    }
    clientInfo.heightFeet = clientInfo.heightFeet.replace(/^0+/,'');
    clientInfo.weight = clientInfo.weight.replace(/^0+/,'');

    this._clientService.updatePersonalInfo(clientInfo)
      .subscribe(
        res => {

        },
        err => {
          this._snackBar.open("Error Saving Profile", "OK", {
            duration: 3500,
            panelClass: ['red-snackbar']
          });
          console.log(err)
        },
        () => {
          this._snackBar.open( "Profile Saved", "OK",{
            duration: 3500,
            panelClass: ['blue-snackbar']
          });
          console.log('complete');
        });
  }

}

