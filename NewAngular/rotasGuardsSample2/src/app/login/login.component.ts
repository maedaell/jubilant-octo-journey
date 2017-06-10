import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    console.log("login");
    this.authService.login();
    if (this.authService.url){
       this.router.navigate([this.authService.url]);
    }
  }

  logout() {
    console.log("logout");
    this.authService.logout();
    if (this.authService.url){
      this.router.navigate(["/"]);
    }
  }
}
