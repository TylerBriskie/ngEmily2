import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher, MatSnackBar} from "@angular/material";
import {Router} from "@angular/router";
import {ClientService} from "../services/client.service";

@Component({
  selector: 'update-email-form',
  templateUrl: 'update-email.component.html',
})
export class UpdateEmailComponent {
  @Input() client: object;
  @Output() cancel = new EventEmitter();
  @Output() updateSuccess = new EventEmitter<string>();

  constructor(private _clientService: ClientService){}

  emailRegEx = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  newEmail = new FormControl('', [
    Validators.email,
    Validators.pattern(this.emailRegEx),
  ]);

  cancelUpdate(){
    this.cancel.emit();
  }

  submitUpdateEmail(){
    event.preventDefault();
    let postData = {
      currentEmail: this.client.email,
      newEmail: this.newEmail.value,
    };
    this._clientService.updateEmail(postData, this.client._id).subscribe(
      next => {
        this.updateSuccess.emit(next.email);
      }, error => {
        console.log('error updating email', error);
        this.updateSuccess.emit(false);

      }
    )
  }
}
