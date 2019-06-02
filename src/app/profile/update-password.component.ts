import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroupDirective, FormBuilder, NgForm, Validators, FormGroup} from "@angular/forms";
import {ErrorStateMatcher, MatSnackBar} from "@angular/material";
import {ClientService} from "../services/client.service";
import {Router} from "@angular/router";

@Component({
  selector: 'update-password-form',
  templateUrl: 'update-password.component.html',
})

export class UpdatePasswordComponent {
  @Input() client: {
    _id: string;
  };
  @Output() cancel = new EventEmitter();
  @Output() updateSuccess = new EventEmitter<boolean>();

  constructor(private _snackBar: MatSnackBar,
              private _clientService: ClientService){}

  fb = new FormBuilder();
  matcher = new PasswordErrorStateMatcher();
  passwordRegEx = "(?=^.{8,}$)(?=.*\\d)(?=.*[a-z])(?!.*\\s)[0-9a-z]*$";
  passwordForm = this.fb.group({
    currentPassword: ['', [Validators.required]],
    newPassword: ['', [Validators.required, Validators.pattern(this.passwordRegEx)]],
    newPasswordConfirm: ['',[Validators.required, Validators.pattern(this.passwordRegEx)]]
  }, {validator: this.checkPasswords});

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
    let postData = {
      currentPassword: this.passwordForm.get('currentPassword').value,
      newPassword: this.passwordForm.get('newPassword').value
    };
    this._clientService.updatePassword(postData, this.client._id)
      .subscribe(
      res => {
      },
        err => {
          console.log('an error occured: code 723047', err);
          this.updateSuccess.emit(false);
        },
        () => {
          this.updateSuccess.emit(true);
        }
      )
  }
}

export class PasswordErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}
