import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material";

@Component({
  selector: 'update-email-form',
  templateUrl: 'update-email.component.html',
})
export class UpdateEmailComponent {
  @Input() currentEmail: string;
  @Output() cancel = new EventEmitter();

  newEmail = '';

  constructor(){}

  updateEmailForm = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  emailMatcher = new EmailErrorStateMatcher();

  cancelUpdate(){
    this.cancel.emit();
  }

  submitUpdateEmail(){
    event.preventDefault();
    alert('the email you chose was ' + this.newEmail);
  }
}
export class EmailErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
