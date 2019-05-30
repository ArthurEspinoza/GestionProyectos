import { Routes } from '@angular/router';
import { SesionComponent } from './components/sesion/sesion.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';


export const ROUTES: Routes = [
    {path: 'sesion', component: SesionComponent},
    {path: 'proyectos', component: ProyectoComponent},
    {path: '', pathMatch: 'full', redirectTo: 'sesion'},
    {path: '**', pathMatch: 'full', redirectTo: 'sesion'}
];

