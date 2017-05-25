import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ByteConverterService } from './byte-converter.service';

@Component({
  selector: 'byte-select',
  template: `
    <select [ngModel]="selected" (ngModelChange)="$window.alert('hello')">
      <option *ngFor="let bytes of supportedBytes" [value]="bytes">
        {{bytes}}
      </option>
    </select>
  `

  // template: `
  //   <select [ngModel]="selected" (ngModelChange)="onSelectedChange($event)">
  //     <option *ngFor="let bytes of supportedBytes" [value]="bytes">
  //       {{bytes}}
  //     </option>
  //   </select>
  // `
})
export class ByteSelectComponent { //this guy is the component

  @Input() selected: string;
  // @Output() selectedChange = new EventEmitter<string>();

  supportedBytes: string[];
  // constructor() {
  //   this.supportedBytes = ["hello", "world"]
  // }

  constructor(byteConverterService: ByteConverterService) {
    this.supportedBytes = byteConverterService.supportedByteConverter
  }

  // onSelectedChange(selected: string) {
  //   this.selected = selected;
  //   this.selectedChange.emit(selected);
  // }
}
