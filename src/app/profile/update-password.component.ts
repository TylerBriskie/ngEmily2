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
  }
}

export class PasswordErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}
