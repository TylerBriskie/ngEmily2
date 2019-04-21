import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AuthModule} from './auth/auth.module';
import {LayoutModule} from './layout/layout.module';
import {HeaderComponent} from './layout/header.component';
import {NavbarComponent} from './layout/navbar.component';
import {BookingModule} from './booking/booking.module';
import {ProfileModule} from './profile/profile.module';
import {HomeModule} from './home/home.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    BookingModule,
    ProfileModule,
    HomeModule,
    LayoutModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
