import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking.component';
import {BookingRoutingModule} from './booking-routing.module';

@NgModule({
  declarations: [BookingComponent],
  imports: [
    BookingRoutingModule,
    CommonModule
  ]
})
export class BookingModule { }
