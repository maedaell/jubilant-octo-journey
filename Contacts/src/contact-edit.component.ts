import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'contact-edit',
  template: `
    <div>
      <div>
        <input type="text" [(ngModel)]="contact.name"
          placeholder="Name" style="width: 25%;" #nameField="ngModel"
          required>
        <pre *ngIf="nameField.touched && nameField.invalid">Please enter a name</pre>

        <input type="text" [(ngModel)]="contact.phone"
          placeholder="Phone" style="width: 50%;" #phoneField="ngModel" required>
        <pre *ngIf="phoneField.touched && phoneField.invalid">Please enter a phone</pre>

        <button (click)="onSave()" [disabled]="(phoneField.invalid) || (nameField.invalid)" >
          <span>Save</span>
        </button>
        <button (click)="onClear()">
          <span>Clear</span>
        </button>
      </div>
    </div>
  `,
})
export class ContactEditComponent {

  @Input() contact = {};
  @Output() clear = new EventEmitter();
  @Output() save = new EventEmitter();

  onClear() {
    this.clear.emit();
  }

  onSave() {
    this.save.emit(this.contact);
  }

}
