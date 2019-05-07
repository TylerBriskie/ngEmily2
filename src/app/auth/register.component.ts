import { Component, OnInit } from '@angular/core';
import { AuthService} from "../services/auth.service";
import { Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  registerClientData = {};
  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit() {
  }
  registerClient(){
    this._auth.registerClient(this.registerClientData)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this._router.navigate(['/profile'])
        },
        err => console.log(err)
      )
  }
}
