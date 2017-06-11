import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CursoService } from '../../curso.service';
import { SuperDetalhes } from '../../common/superdetalhes.component';



@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent extends SuperDetalhes implements OnInit {

  constructor(service: CursoService, router: Router,route: ActivatedRoute) {
    super(service,router,route);
  }

}
