import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {HomeRoutingModule} from './home-routing.module';
import { PoleComponent } from './pole/pole.component';
import { DanceComponent } from './dance/dance.component';
import { TrainingComponent } from './training/training.component';

@NgModule({
  declarations: [
    HomeComponent,
    PoleComponent,
    DanceComponent,
    TrainingComponent
  ],
  imports: [
    HomeRoutingModule,
    CommonModule
  ]
})
export class HomeModule { }
