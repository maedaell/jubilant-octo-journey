import { Component } from '@angular/core';
import { CurrentTime } from './current_time.model'
import { HoraAtualService } from './hora_atual.service'

@Component ({
  selector: 'current-time',
  template: '<h3>{{current_time}}</h3>'
})
export class CurrentTimeComponent {
  current_time: String;

  constructor(hora_atualService: HoraAtualService) {
    hora_atualService.generateHoraAtual(1000, hora_atual => this.current_time = hora_atual);
  }
}
