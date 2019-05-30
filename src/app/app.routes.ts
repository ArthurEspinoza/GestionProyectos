import { Routes } from '@angular/router';
import { SesionComponent } from './components/sesion/sesion.component';


export const ROUTES: Routes = [
    {path: 'sesion', component: SesionComponent},
    {path: '', pathMatch: 'full', redirectTo: 'sesion'},
    {path: '**', pathMatch: 'full', redirectTo: 'sesion'}
];

