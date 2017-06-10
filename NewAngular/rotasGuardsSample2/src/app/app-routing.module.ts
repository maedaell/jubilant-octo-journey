import { NgModule } from '@angular/core';
import { Routes, RouterModule,Router} from '@angular/router';

import { OnlyAccessComponent } from './only-access/only-access.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: 'loggedRoute', component: OnlyAccessComponent, canActivate:[AuthGuard]},
  {path: 'login', component: LoginComponent},
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
