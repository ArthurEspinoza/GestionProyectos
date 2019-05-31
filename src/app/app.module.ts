//Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SesionComponent } from './components/sesion/sesion.component';

//Rutas
import { ROUTES } from './app.routes';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { VerProyectoComponent } from './components/ver-proyecto/ver-proyecto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SesionComponent,
    ProyectoComponent,
    VerProyectoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( ROUTES, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
