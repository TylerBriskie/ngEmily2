import {Component} from '@angular/core';

@Component({
  selector: 'update-password-form',
  templateUrl: 'update-password.component.html',
})

export class UpdatePasswordComponent {
  currentPassword = '';
  newPassword = '';
  newPasswordConfirm = '';

  constructor(){

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
}
