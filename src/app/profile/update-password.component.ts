import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroupDirective, FormBuilder, NgForm, Validators, FormGroup} from "@angular/forms";
import {ErrorStateMatcher, MatSnackBar} from "@angular/material";

@Component({
  selector: 'update-password-form',
  templateUrl: 'update-password.component.html',
})

export class UpdatePasswordComponent {
  fb = new FormBuilder();
  @Output() cancel = new EventEmitter();
  matcher = new PasswordErrorStateMatcher();
  passwordRegEx = "(?=^.{8,}$)(?=.*\\d)(?=.*[a-z])(?!.*\\s)[0-9a-z]*$";
  // currentPassword = new FormControl('', [
  //   Validators.required,
  // ]);
  // newPassword = new FormControl('', [
  //   Validators.required,
  //   Validators.pattern(this.passwordRegEx)
  // ]);
  // newPasswordConfirm = new FormControl('', [
  //   Validators.required,
  //   Validators.pattern(this.passwordRegEx)
  // ]);
  passwordForm = this.fb.group({
    currentPassword: ['', [Validators.required]],
    newPassword: ['', [Validators.required, Validators.pattern(this.passwordRegEx)]],
    newPasswordConfirm: ['',[Validators.required, Validators.pattern(this.passwordRegEx)]]
  }, {validator: this.checkPasswords});

  constructor(private _snackBar: MatSnackBar){

  }

  cancelUpdate(){
    this.cancel.emit();
  }

  checkPasswords(group: FormGroup){
    let pass = group.controls.newPassword.value;
    let confirmPass = group.controls.newPasswordConfirm.value;

    return pass === confirmPass ? null : {notSame: true}
  }

  submitUpdatePassword(){
    event.preventDefault();
    if (this.newPassword.value.length < 8){
      this._snackBar.open('Password Must Be 8 Characters', "OK", {duration: 2500});
      return;
    }
    if (this.newPassword.value !== this.newPasswordConfirm.value){
      this._snackBar.open('Passwords Must Match', "OK", {duration: 2500});
      return;
    }
  }
}

export class PasswordErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}
