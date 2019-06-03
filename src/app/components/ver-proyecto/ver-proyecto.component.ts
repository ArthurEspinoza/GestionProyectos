import { Component, OnInit } from '@angular/core';
import { ProyectoService, Proyecto } from '../../services/proyecto.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-ver-proyecto',
  templateUrl: './ver-proyecto.component.html',
  styleUrls: ['./ver-proyecto.component.css']
})
export class VerProyectoComponent implements OnInit {
  proyecto: any = {};
  listaToDo: any;
  constructor(private proyectoService: ProyectoService,
              private _activatedRoute: ActivatedRoute) { 

     this._activatedRoute.params.subscribe( params =>{
          this.proyecto = this.proyectoService.getProyecto(params['id']);
          this.listaToDo = this.proyecto.toDo;
          console.log(this.listaToDo[0].actividades[0]);
     });
    }

  ngOnInit() {
  }

}
