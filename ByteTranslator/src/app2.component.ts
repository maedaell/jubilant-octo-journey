import { Component } from '@angular/core';
import { ByteConverterService } from './byte-converter.service';

@Component({
  selector: 'byte-converter-auto',
  template: `
     <input type="number" [(ngModel)]="qtde"
       [class.error]="isInvalid(qtde)">
    <byte-select [(selected)]="base"></byte-select>
    <byte-select [(selected)]="target"></byte-select>
    = <strong>{{autoConvert | fixed:4}}</strong>
     <p *ngIf="isInvalid(qtde)">Tem que ser um numero</p>
    `,
    styles: [`
      input[type=number] {
        width: 10ex;
        text-align: right;
      }
      .error {
        background-color: #ff6666;
      }
    `]
})
export class App2Component {

  base = 'byte';
  target = 'bit';
  qtde = 1;
  result = 0;
  press = 'click';

  constructor(private bcService: ByteConverterService) { }

  get autoConvert() {
    return this.convert();
  }

  convert() {
    const convertValue = this.bcService.getConvertValue(this.base, this.target);
    this.result = this.qtde * convertValue;
    return this.result
  }

  isInvalid(value) {
    return !Number.isFinite(value);
  }
}
