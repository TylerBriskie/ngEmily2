import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {HttpErrorResponse} from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  client = {};
  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit() {
    this._auth.getClientInfo()
      .subscribe(
        res => this.client = res,
        err =>  {
          if (err instanceof HttpErrorResponse){
            console.log('error: ', err);
            this._router.navigate(['/login']);
          }
        }
      )
  }

}
