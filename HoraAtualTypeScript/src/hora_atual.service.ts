//import { CurrentTime } from './current_time.model';

export class HoraAtualService {
  private hora_atual: String;

  private getHoraAtual(): String {
    let today = new Date();
    this.hora_atual = today.toUTCString();
    return this.hora_atual;
  }

  generateHoraAtual(delay: number, callback: (hora_atual: String)=>void) {
    callback(this.getHoraAtual());
    setInterval(() => callback(this.getHoraAtual()), delay);
  }
}
