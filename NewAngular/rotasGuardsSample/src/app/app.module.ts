import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { AppRoutingModule} from './app-routing/app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { OnlyAuthenticatedComponent } from './only-authenticated/only-authenticated.component';
import { AutenticacaoService } from './autenticacao.service';
import { AutenticadorGuard } from './autenticador.guard';
import { LoginComponentComponent } from './login-component/login-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent,
    NotFoundComponent,
    OnlyAuthenticatedComponent,
    LoginComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AutenticadorGuard, AutenticacaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
