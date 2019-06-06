import { Component, OnInit } from '@angular/core';
import { ProyectoService, Proyecto } from '../../services/proyecto.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-ver-proyecto',
  templateUrl: './ver-proyecto.component.html',
  styleUrls: ['./ver-proyecto.component.css']
})
export class VerProyectoComponent implements OnInit {
  proyecto: any = {};
  listaToDo: any;
  listaDoing: any;
  listaDone: any;
  verMas = false;
  rutaAdd: string = "../../../assets/img/add.svg";
  rutaExit: string = "../../../assets/img/salir.svg";
  constructor(private proyectoService: ProyectoService,
              private _activatedRoute: ActivatedRoute,
              private _route: Router) { 

     this._activatedRoute.params.subscribe( params =>{
          this.proyecto = this.proyectoService.getProyecto(params['id']);
          this.listaToDo = this.proyecto.toDo;
          this.listaDoing = this.proyecto.doing;
          this.listaDone = this.proyecto.done;
          console.log(this.listaToDo[0].actividades);
     });
    }

  ngOnInit() {
  }
  checarTodo(index){
    if (this.listaToDo[index].actividades){
      return true;
    } else {
      return false;
    }
  }
  checarDoing(index){
    if (this.listaDoing[index].actividades){
      return true;
    } else {
      return false;
    }
  }
  checarDone(index){
    if (this.listaDone[index].actividades){
      return true;
    } else {
      return false;
    }
  }
  regresarAProyectos(){
    this._route.navigate(['/proyectos'])
  }
}
