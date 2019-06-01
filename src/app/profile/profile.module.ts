import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from "@angular/material";
import {ReactiveFormsModule} from "@angular/forms";
import {ProfileRoutingModule} from "./profile-routing.module";
import { ProfileComponent } from './profile.component';

@NgModule({
  declarations: [ProfileComponent],
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
