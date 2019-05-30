import { Component, OnInit } from '@angular/core';
import { ProyectoService, Proyecto } from '../../services/proyecto.service';
@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  listaProyectos: Proyecto[] = [];
  rutaImg: string = "../../../assets/img/add.svg";
  constructor( private proyectoService: ProyectoService ) { }

  ngOnInit() {
    this.listaProyectos = this.proyectoService.getProyectos();
  }
  // Funcion que recibe el indice del proyecto y a partir de su progreso regresa el color para la
  getColor(index: number) { 
    if (this.listaProyectos[index].progreso >= 85){
      return '#34AA44';
    } else if (this.listaProyectos[index].progreso >= 50){
      return '#A3AA34';
    } else {
      return '#AA4F34';
    }
  }
}
