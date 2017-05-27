import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'contact-list',
  template: `
    <h1>Contacts list</h1>
    <div>
      <table border=2>
        <tr *ngFor="let contact of contacts">
          <td>{{contact.name}}</td>
          <td>{{contact.phone}}</td>
          <td>
            <button (click)="onEdit(contact)" >
              <span >Edit</span>
            </button>
            <button (click)="onRemove(contact)">
              <span >Delete</span>
            </button>
          </td>
        </tr>
      </table>
    </div>
  `,
})
export class ContactListComponent {

  @Input() contacts = [];
  @Output() edit = new EventEmitter();
  @Output() remove = new EventEmitter();

  onEdit(contact) {
    this.edit.emit(contact);
  }

  onRemove(contact) {
    this.remove.emit(contact);
  }

}
