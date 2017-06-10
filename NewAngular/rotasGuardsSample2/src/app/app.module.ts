import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { OnlyAccessComponent } from './only-access/only-access.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

import { AppRoutingModule } from './app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OnlyAccessComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
