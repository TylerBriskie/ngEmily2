import { Component, OnInit } from '@angular/core';
import { AuthService} from "../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  registerClientData = {};
  constructor(private _auth: AuthService) { }

  ngOnInit() {
  }
  registerClient(){
    this._auth.registerClient(this.registerClientData)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      )
  }
}
