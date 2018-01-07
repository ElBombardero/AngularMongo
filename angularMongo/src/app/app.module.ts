import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TareasComponent } from './tareas/tareas.component';
import { HttpModule } from '@angular/http';
import { TareaIndividualComponent } from './tareas/tarea-individual/tarea-individual.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TareasComponent,
    TareaIndividualComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
