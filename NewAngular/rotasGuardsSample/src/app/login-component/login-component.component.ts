import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from '../autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  constructor(private autenticacaoService: AutenticacaoService, private router: Router ) { }

  ngOnInit() {
  }

  login(){
    console.log("login");
    this.autenticacaoService.login();
    if (this.autenticacaoService.url){
       this.router.navigate([this.autenticacaoService.url]);
    }
  }

  logout(){
    console.log("logout");
    this.autenticacaoService.logout();
    this.router.navigate(["/"]);
  }

}
