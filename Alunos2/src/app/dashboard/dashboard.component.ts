import { Component, OnInit } from '@angular/core';
import {CursoService} from '../curso.service';
import {AlunoService} from '../aluno.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  listaCurso:any[];
  listaAluno:any[];

  constructor(private cursoService:CursoService, private alunoService: AlunoService) { }

  ngOnInit() {
  }

  atualiza(){
    this.cursoService.getAll().then(response=>{
      this.listaCurso=response.values;
    });
    this.alunoService.getAll().then(response=>{
      this.listaAluno=response.values;
    });
  }

}
