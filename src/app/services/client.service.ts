import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private _clientUrl= 'http://localhost:1337/clients/';
  private _getClientInfo = "http://localhost:1337/clients/getLoggedIn";

  constructor( private http: HttpClient,
               private _router: Router) {}

  getClientInfo(){
    return this.http.get<any>(this._getClientInfo);
  }

  updatePassword(postData, id){
    console.log('service...', id)
    return this.http.post<any>(this._clientUrl+ id +'/updatePassword', postData);
  }
  updatePersonalInfo(info){
    return this.http.post<any>(this._clientUrl + info._id + '/updatePersonalInfo', info);
  }
}
