import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { CursoService } from '../../curso.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SuperLista } from '../../common/superlista.component';

@Component({
  selector: 'app-lista',
  templateUrl: '../../common/lista.component.html',
  styleUrls:  ['../../common/lista.component.css']
})
export class ListaComponent extends SuperLista implements OnInit {

  constructor(service:CursoService, router:Router, route: ActivatedRoute) { 
    super(service,router,route);
    this.cols = [ {field: 'nome', header: 'Nome'}, {field: 'version', header: 'Versão'} ];
  }
  

}
