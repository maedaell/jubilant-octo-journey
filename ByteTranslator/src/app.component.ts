import { Component } from '@angular/core';
import { ByteConverterService } from './byte-converter.service';

@Component({
  selector: 'byte-converter',
  template: `
     <input type="number" [(ngModel)]="qtde"
       [class.error]="isInvalid(qtde)">
    <byte-select [(selected)]="base"></byte-select>
    <byte-select [(selected)]="target"></byte-select>
    <button (click)="convert()">Converter</button>
    <strong>{{result | fixed:4}}</strong>
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
export class AppComponent {

  base = 'byte';
  target = 'bit';
  qtde = 1;
  result = 0;
  press = 'click';

  constructor(private bcService: ByteConverterService) { }

  get autoConvert() {
    console.log(press);
  }

  function_test() {
    console.log(this.press);
  }

  convert() {
    const convertValue = this.bcService.getConvertValue(this.base, this.target);
    this.result = this.qtde * convertValue;
  }

  isInvalid(value) {
    return !Number.isFinite(value);
  }
}
