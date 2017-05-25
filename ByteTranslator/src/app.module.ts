import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ByteConverterService } from './byte-converter.service';
import { ByteSelectComponent } from './byte-select.component';
// import { FixedPipe } from './fixed.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ByteSelectComponent],
  // declarations: [AppComponent, CurrencySelectComponent, FixedPipe],
  providers: [ByteConverterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
