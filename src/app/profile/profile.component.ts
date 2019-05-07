import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  clientId = '';
  client = {};
  constructor(private _auth: AuthService) { }

  ngOnInit() {
    this._auth.getClientInfo(this.clientId)
      .subscribe(
        res => this.client = res,
        err => console.log(err)
      )
  }

}
