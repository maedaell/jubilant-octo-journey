import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { DisciplinaService } from '../../disciplina.service';
import { AlunoService } from '../../aluno.service';
import { SuperDetalhes } from '../../common/superdetalhes.component';



@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent extends SuperDetalhes implements OnInit {

  alunos = [];
  selecionado = {alunos:[]};
  aluno;

  constructor(service: DisciplinaService, router: Router,route: ActivatedRoute, private alunoService: AlunoService) {
    super(service,router,route);
  }

  inserirAluno(){
     console.log(this.selecionado.alunos,this.aluno);
     if (!this.selecionado.alunos){
       this.selecionado.alunos=[];
     }
     this.selecionado.alunos.push(this.aluno);
     this.aluno=null;
     console.log(this.selecionado);
     console.log(this);
  }

  ngOnInit() {
    super.ngOnInit();
    this.atualizaAlunos();

  }

  atualizaAlunos() {
    this.alunoService.getAll().then(response => {
      this.alunos = response.values;
    });
  }

  filtrarAlunos(event) {
    let query = event.query;
    this.alunoService.filtra(query).then(response => {
      this.alunos = response.values;
    });
  }

}
