import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher, MatSnackBar} from "@angular/material";

@Component({
  selector: 'update-password-form',
  templateUrl: 'update-password.component.html',
})

export class UpdatePasswordComponent {

  @Output() cancel = new EventEmitter();
  currentPassword = '';
  newPassword = '';
  newPasswordConfirm = '';

  constructor(private _snackBar: MatSnackBar){

  }

  cancelUpdate(){
    this.cancel.emit();
  }

  submitUpdatePassword(){
    event.preventDefault();
    if (this.newPassword.length < 8){
      this._snackBar.open('Password Must Be 8 Characters', "OK", {duration: 2500});
      return;
    }
    if (this.newPassword !== this.newPasswordConfirm){
      this._snackBar.open('Passwords Must Match', "OK", {duration: 2500});
      return;
    }
  }
}

export class PasswordErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
