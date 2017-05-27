import { Component } from '@angular/core';
import { ContactService } from './contact.service'

@Component ({
  selector: 'contacts-app',
  template: `
    <contact-edit [contact]="editableContact" (save)="save($event)" (clear)="clear()"></contact-edit>
    <contact-list [contacts]="contacts" (remove)="remove($event)"
      (edit)="edit($event)"></contact-list>
  `,
})

export class AppComponent {
  contacts = [];
  editableContact = {};

  constructor(private contactService: ContactService) {
    contactService.errorHandler = error => window.alert('Fail');
    this.reload();
  }

  private reload() {
    return this.contactService.getContacts()
      .then(contacts => this.contacts = contacts);
  }

  clear() {
    this.editableContact = {};
  }

  edit(contact) {
    this.editableContact = Object.assign({}, contact);
  }

  remove(contact) {
    this.contactService.removeContact(contact)
      .then(() => this.reload());    
  }

  save(contact) {
    if (contact.id) {
      this.contactService.updateContact(contact)
        .then(() => this.reload());
    } else {
      this.contactService.addContact(contact)
        .then(() => this.reload());
    }
    this.clear();
  }

}


