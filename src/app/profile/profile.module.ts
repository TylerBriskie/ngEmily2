import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {ProfileRoutingModule} from "./profile-routing.module";
import { ProfileComponent } from './profile.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    ProfileRoutingModule,
    FormsModule,
    MatSnackBarModule,
    CommonModule
  ]
})
export class ProfileModule { }
