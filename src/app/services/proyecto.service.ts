import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private proyectos: Proyecto[] = [
    {
      nombre: 'Mineria con R',
      materia: 'Mineria de Datos',
      docente: 'Leopoldo Gonzales Ruiz',
      descripcion: 'Un proyecto el cual deben usar la herramienta R para gener un estudio de un banco de datos de Kaggle',
      tipo: 'Equipo',
      progreso: 100,
      miembro: {
        miembro1: {
          nombre: 'Arturo Espinoza Quintero'
        },
        miembro2: {
          nombre: 'Lucia Hernandez Solis'
        }
      }
    },
    {
      nombre: 'AppSalud',
      materia: 'Ing. Web',
      docente: 'Hilda Mendoza Cardenas',
      descripcion: 'Es una aplicación web que permite checar el historial clinico de un paciente',
      tipo: 'Individual',
      progreso: 65
    },
    {
      nombre: 'Animación 3D',
      materia: 'Graficación',
      docente: 'Rene Suizo Mercado',
      descripcion: 'Es un programa grafico que ejecuta una animación en 3D',
      tipo: 'Individual',
      progreso: 15
    }
  ];
  constructor() { }
  getProyectos(){
    return this.proyectos;
  }
}


export interface Proyecto {
  nombre: string;
  materia: string;
  docente: string;
  descripcion: string;
  tipo: string;
  progreso: number;
  miembro?: {};
};