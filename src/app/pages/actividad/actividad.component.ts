import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
//  styleUrls: ['./actividad.component.css']
   moduleId: module.id,
})

export class ActividadComponent implements OnInit {
 
  public id: string;
  public operacion: string;

  constructor( private rutaActiva: ActivatedRoute ) { }

  ngOnInit(): void {
  	this.id = this.rutaActiva.snapshot.params.id;
  	this.operacion = this.rutaActiva.snapshot.params.operacion;
  	console.log("ActividadComponent.ngOnInit(): "+ this.id+ " " + this.operacion);
  	
  }

  actualizarActividad(){
  	//recibe la funcion que hemos elegido anteriormente "Terminar" o "Aceptar" 
  	// dependiendo de eso le habre mostrado un formulario u otro pero todos vendran a este metodo
  	// que asignará las propiedades y llamará al api rest de actualizar la tarea completa
  	// la opción    "Consultar" no  se contempla ya que no será un formulario si no datos solo lectura
  }

}
