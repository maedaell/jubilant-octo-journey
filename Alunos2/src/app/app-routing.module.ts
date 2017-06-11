import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { DashboardComponent } from "app/dashboard/dashboard.component";

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  {
     path: '', redirectTo:'/dashboard',pathMatch: 'full'
  },
  { path: '**', component: DashboardComponent },

  {
    path: '',
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  constructor(r:Router){
    this.logarotas("/",r.config);
  }

  logarotas(pai:string,rotas:Routes){
    for (let i=0;i<rotas.length;i++){
      console.log("path:",pai,rotas[i].path,rotas[i].component?rotas[i].component:"-->"+rotas[i].redirectTo);
      if (rotas[i].children){
        this.logarotas(rotas[i].path+"/",rotas[i].children);
      }
    }

  }

}
