import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HoraAtualService } from './hora_atual.service';
import { CurrentTimeComponent } from './current-time.component';
import { AppComponent } from './app.component';

@NgModule ({
  imports: [BrowserModule],
  declarations: [AppComponent, CurrentTimeComponent],
  providers: [HoraAtualService],
  bootstrap: [AppComponent]
})

export class AppModule {}
