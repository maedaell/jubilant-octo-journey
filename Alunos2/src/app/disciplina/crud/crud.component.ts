import { Component, OnInit } from '@angular/core';
import { DisciplinaService } from '../../disciplina.service';
import { SuperCrud} from '../../common/supercrud.component';

@Component({
  selector: 'crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent extends SuperCrud implements OnInit {
  constructor(service: DisciplinaService) {
    super(service);
  }
}
