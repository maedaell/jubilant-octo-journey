import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { ListaComponent } from './lista/lista.component';
import { DetalheComponent } from './detalhe/detalhe.component';

const routes: Routes = [
  {
    path: 'disciplina', component: CrudComponent,
    children: [
      { path: '', component: ListaComponent },
      { path: 'detalhe/:id', component: DetalheComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisciplinaRoutingModule { }
