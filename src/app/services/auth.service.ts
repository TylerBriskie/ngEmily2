import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _clientUrl = "http://localhost:1337/clients/";
  private _loginUrl = "http://localhost:1337/login";
  private _getClientInfo = "http://localhost:1337/clients/getLoggedIn";
  constructor(private http: HttpClient,
              private _router: Router) { }

  registerClient(client){
    return this.http.post<any>(this._clientUrl, client)
  }

  loginClient(client){
    return this.http.post<any>(this._loginUrl, client);
  }

  getClientInfo(){
    return this.http.get<any>(this._getClientInfo);
  }

  updatePersonalInfo(info){
    return this.http.post<any>(this._clientUrl + info._id + '/updatePersonalInfo', info);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logoutUser(){
    localStorage.removeItem('token');
    this._router.navigate(['/home']);
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
