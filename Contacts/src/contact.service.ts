import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ContactService {
  errorHandler = error => console.error('ContactService error', error);
  private baseUrl = 'https://angulartraining-f1d40.firebaseio.com';
  private collection = 'contacts';

  constructor(private http: Http) { }

  addContact(contact) {
    const json = JSON.stringify(contact);
    return this.http.post(`${this.baseUrl}/${this.collection}.json`, json)
      .toPromise()
      .catch(this.errorHandler);
  }

  getContacts() {
    return this.http.get(`${this.baseUrl}/${this.collection}.json`)
      .toPromise()
      .then(response => this.convert(response.json()))
      .catch(this.errorHandler);
  }

  removeContact(contact) {
    return this.http.delete(`${this.baseUrl}/${this.collection}/${contact.id}.json`)
      .toPromise()
      .catch(this.errorHandler);
  }

  updateContact(contact) {
    const json = JSON.stringify({
      name: contact.name,
      phone: contact.phone
    });
    return this.http.patch(`${this.baseUrl}/${this.collection}/${contact.id}.json`, json)
      .toPromise()
      .catch(this.errorHandler);
  }

  private convert(parsedResponse) {
    return Object.keys(parsedResponse)
      .map(id => ({
        id: id,
        name: parsedResponse[id].name,
        phone: parsedResponse[id].phone
      }))
      .sort((a, b) => a.name.localeCompare(b.phone));
  }
}
