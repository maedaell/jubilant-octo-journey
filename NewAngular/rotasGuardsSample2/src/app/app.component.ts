import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  customRouter = "";

  constructor(private authService: AuthService, private router: Router) { }

  custom_navigate() {
    // alert(this.customRouter);
    this.router.navigate([this.customRouter]);
  }
}
