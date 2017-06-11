import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { AlunoService } from '../../aluno.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SuperLista } from '../../common/superlista.component';

@Component({
  selector: 'app-lista',
  templateUrl: '../../common/lista.component.html',
  styleUrls:  ['../../common/lista.component.css']
})
export class ListaComponent extends SuperLista implements OnInit {

  constructor(service:AlunoService, router:Router, route: ActivatedRoute) { 
    super(service,router,route);
    this.cols = [ {field: 'nome', header: 'Nome'}, {field: 'curso.nome', header: 'Curso'}, {field: 'version', header: 'Versão'} ];
  }
  

}
