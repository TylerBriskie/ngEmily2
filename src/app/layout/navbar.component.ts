import { Component, OnInit } from '@angular/core';
import { AuthService} from "../services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  constructor(private _authService: AuthService) { }

  ngOnInit() {
  }

}
