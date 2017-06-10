import { NgModule } from '@angular/core';
import { Routes, RouterModule,Router} from '@angular/router';

import { NewComponentComponent } from './../new-component/new-component.component';
import { NotFoundComponent } from './../not-found/not-found.component';
import { LoginComponentComponent } from './../login-component/login-component.component';
import { OnlyAuthenticatedComponent } from './../only-authenticated/only-authenticated.component';
import { AutenticadorGuard } from './../autenticador.guard';

const routes: Routes = [
  {path: 'testRoute', component: NewComponentComponent},
  {path: 'loggedRoute', component: OnlyAuthenticatedComponent, canActivate:[AutenticadorGuard]},
  {path: 'login', component: LoginComponentComponent},
  {path: '', redirectTo: '', pathMatch: 'full' },
  {path: '**', component: NotFoundComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {

    constructor(r:Router){
      this.logaRotas("/",r.config);
    }

    logaRotas(pai:String,rotas:Routes){
      for (let i=0;i<rotas.length;i++){
        console.log("path:",pai,rotas[i].path,rotas[i].component?rotas[i].component:"-->"+rotas[i].redirectTo);
      }
    }

}
