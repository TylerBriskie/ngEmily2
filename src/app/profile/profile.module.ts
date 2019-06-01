import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';

import {ProfileRoutingModule} from "./profile-routing.module";
import { ProfileComponent } from './profile.component';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    ProfileRoutingModule,
    FormsModule,
    MatSnackBarModule,
    MatDialogModule,
    CommonModule
  ]
})
export class ProfileModule { }
