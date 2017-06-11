import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

  constructor(r:router){
    this.logarotas("/",r.config);
  }

  logarotas(pai:string,rotas:routes){
    for (let i=0;i<rotas.length;i++){
      console.log("path:",pai,rotas[i].path,rotas[i].component?rotas[i].component:"-->"+rotas[i].redirectto);
      if (rotas[i].children){
        this.logarotas(rotas[i].path+"/",rotas[i].children);
      }
    }

  }

}
