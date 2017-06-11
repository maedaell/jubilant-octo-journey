import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { AlunoService } from '../../aluno.service';
import { CursoService } from '../../curso.service';
import { SuperDetalhes } from '../../common/superdetalhes.component';



@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent extends SuperDetalhes implements OnInit {

  cursos = [];

  constructor(service: AlunoService, router: Router,route: ActivatedRoute, private cursoService: CursoService) {
    super(service,router,route);
  }

  ngOnInit() {
    super.ngOnInit();
    this.atualizaCurso();

  }

  atualizaCurso() {
    this.cursoService.getAll().then(response => {
      this.cursos = response.values;
    });
  }

  filtrarCurso(event) {
    let query = event.query;
    this.cursoService.filtra(query).then(response => {
      this.cursos = response.values;
    });
  }
}
