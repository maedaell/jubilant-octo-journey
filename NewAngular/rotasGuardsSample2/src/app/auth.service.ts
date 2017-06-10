import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  url:String;

  isLogged:boolean=false;

  constructor() { }

  login(){
    this.isLogged=true;
  }
  logout(){
    this.isLogged=false;
  }
}
