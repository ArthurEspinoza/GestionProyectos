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
      miembro: [
        'Arturo Espinoza Quintero',
        'Lucia Hernandez Solis'
      ],
      toDo: [
        {
          nombreTarea: 'Prueba 1',
          numeroTarea: '5',
          actividades: [
            'Crear diseño en papel',
            'Decidir herramienta web',
            'Diseñar la interfaz en web'
          ]
        },
        {
          nombreTarea: 'Prueba 2',
          numeroTarea: '6',
          actividades: [
            'Crear diseño en papel',
            'Decidir herramienta web',
            'Diseñar la interfaz en web'
          ]
        }
      ],
      doing: [
        {
          nombreTarea: 'Prueba 3',
          numeroTarea: '7',
          actividades: [
            'Crear diseño en papel',
            'Decidir herramienta web',
            'Diseñar la interfaz en web'
          ]
        }
      ],
      done: [
        {
          nombreTarea: 'Prueba 1',
          numeroTarea: '2',
          actividades: [
            'Crear diseño en papel',
            'Decidir herramienta web',
            'Diseñar la interfaz en web'
          ]
        }
      ]
    },
    {
      nombre: 'AppSalud',
      materia: 'Ing. Web',
      docente: 'Hilda Mendoza Cardenas',
      descripcion: 'Es una aplicación web que permite checar el historial clinico de un paciente',
      tipo: 'Individual',
      progreso: 65,
      toDo:[
        {
          nombreTarea: 'Prueba 1',
          numeroTarea: '5',
        },
        {
          nombreTarea: 'Prueba 2',
          numeroTarea: '6',
        }
      ],
      doing:[],
      done:[]
    },
    {
      nombre: 'Animación 3D',
      materia: 'Graficación',
      docente: 'Rene Suizo Mercado',
      descripcion: 'Es un programa grafico que ejecuta una animación en 3D',
      tipo: 'Individual',
      progreso: 15,
      toDo:[],
      doing:[],
      done:[]
    }
  ];
  constructor() { }
  getProyectos(){
    return this.proyectos;
  }
  getProyecto(index){
    return this.proyectos[index];
  }
}


export interface Proyecto {
  nombre: string;
  materia: string;
  docente: string;
  descripcion: string;
  tipo: string;
  progreso: number;
  miembro?;
  toDo?;
  doing?;
  done?;
};