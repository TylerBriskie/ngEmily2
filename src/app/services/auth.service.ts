import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _registerUrl = "http://localhost:1337/clients";
  private _loginUrl = "http://localhost:1337/login";
  private _getClientInfo = "http://localhost:1337/clients/getLoggedIn";
  constructor(private http: HttpClient) { }

  registerClient(client){
    return this.http.post<any>(this._registerUrl, client)
  }

  loginClient(client){
    return this.http.post<any>(this._loginUrl, client);
  }

  getClientInfo(){
    return this.http.get<any>(this._getClientInfo);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
