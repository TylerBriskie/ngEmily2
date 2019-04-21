import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home.component';
import {PoleComponent} from './pole/pole.component';
import {DanceComponent} from './dance/dance.component';
import {TrainingComponent} from './training/training.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'pole',
    component: PoleComponent,
  },
  {
    path: 'dance',
    component: DanceComponent,
  },
  {
    path: 'training',
    component: TrainingComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
