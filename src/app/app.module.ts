import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http/'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AuthModule} from './auth/auth.module';
import {LayoutModule} from './layout/layout.module';
import {HeaderComponent} from './layout/header.component';
import {NavbarComponent} from './layout/navbar.component';
import {BookingModule} from './booking/booking.module';
import {ProfileModule} from './profile/profile.module';
import {HomeModule} from './home/home.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatMenuModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthService} from "./services/auth.service";
import {AuthGuard} from "./auth/auth.guard";
import {TokenInterceptorService} from "./services/token-interceptor.service";
import {ClientService} from "./services/client.service";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    SideNavComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BookingModule,
    ProfileModule,
    HomeModule,
    LayoutModule,
    AuthModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule
  ],
  providers: [AuthService, ClientService, AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
