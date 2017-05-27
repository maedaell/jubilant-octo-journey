import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ContactService } from './contact.service';
import { AppComponent } from './app.component';
import { ContactEditComponent } from './contact-edit.component';
import { ContactListComponent } from './contact-list.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule],
  declarations: [AppComponent, ContactListComponent, ContactEditComponent],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
