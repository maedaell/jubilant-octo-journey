import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AccordionModule,GrowlModule, DataListModule} from 'primeng/primeng';     //accordion and accordion tab
import { ToolbarModule,ButtonModule,SplitButtonModule} from 'primeng/primeng';
import { CursoService } from './curso.service';
import { AlunoService } from './aluno.service';
import { CursoModule } from './curso/curso.module';
import { AlunoModule } from './aluno/aluno.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CursoModule, AlunoModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccordionModule,GrowlModule,DataListModule,ToolbarModule,ButtonModule,SplitButtonModule
  ],
  providers: [AlunoService, CursoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
