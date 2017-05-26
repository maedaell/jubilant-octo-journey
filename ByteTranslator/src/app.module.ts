import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { App2Component } from './app2.component';
import { ByteConverterService } from './byte-converter.service';
import { ByteSelectComponent } from './byte-select.component';
import { FixedPipe } from './fixed.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, App2Component, ByteSelectComponent, FixedPipe],
  providers: [ByteConverterService],
  bootstrap: [AppComponent, App2Component]
})
export class AppModule { }
