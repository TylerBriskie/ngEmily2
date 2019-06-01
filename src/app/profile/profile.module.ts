import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from "@angular/material";
import {ReactiveFormsModule} from "@angular/forms";
import {ProfileRoutingModule} from "./profile-routing.module";
import { ProfileComponent } from './profile.component';
import { UpdateEmailComponent} from "./update-email.component";
import { UpdatePasswordComponent} from "./update-password.component";

@NgModule({
  declarations: [ProfileComponent, UpdateEmailComponent, UpdatePasswordComponent],
  imports: [
    ProfileRoutingModule,
    FormsModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatInputModule,
    CommonModule
  ]
})
export class ProfileModule { }
