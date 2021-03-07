import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ActividadesRealizadas } from '../../models/actividadesRealizadas';
import { UsuarioGuardadoService } from "../../usuarios/usuarioguardado.service";
import { TareasService } from "../table/tareas.service";
import { UsuariosService } from '../../usuarios/usuarios.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup,Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
//  styleUrls: ['./actividad.component.css']
   moduleId: module.id,
})

export class ActividadComponent implements OnInit {
 
  public id: string;
  public operacion: string;
  public actividad: ActividadesRealizadas;
  public pizzaForm: FormGroup;
  constructor( 
      private fb: FormBuilder,
  		private rutaActiva: ActivatedRoute,
  		public usuarioService: UsuariosService,
    	public usuarioGuardado:UsuarioGuardadoService,
    	public tareasService:TareasService ) {

  

       }

  ngOnInit(): void {
  	this.id = this.rutaActiva.snapshot.params.id;
  	this.operacion = this.rutaActiva.snapshot.params.operacion;
  	console.log("ActividadComponent.ngOnInit(): "+ this.id+ " " + this.operacion);
    this.tareasService.getTarea(this.usuarioGuardado.getToken(),this.id).subscribe( data => {
        this.actividad = data.data;
		console.log("ActividadComponent.ngOnInit(): "+ this.actividad.observacion);
	});

      this.createForm(this.operacion);
  }

  createForm(operacion) {

    switch (operacion) {
      case "Terminar":
          this.pizzaForm = this.fb.group({
            isOnSale:[],
            name: [null],
            price: [0],
            imageUrl: [null]
          });
        break;
      case "Aceptar":
          this.pizzaForm = this.fb.group({
            isOnSale:[],
            name: [null],
            price: [0],
            imageUrl: [null]
          });
        break;
      case "Consultar":
          this.pizzaForm = this.fb.group({
            isOnSale:[],
            name: [null],
            price: [0],
            imageUrl: [null]
          });
        break;
      default:
        // code...
        break;
    }

  }

  actualizarActividad(){
  	//recibe la funcion que hemos elegido anteriormente "Terminar" o "Aceptar" 
  	// dependiendo de eso le habre mostrado un formulario u otro pero todos vendran a este metodo
  	// que asignará las propiedades y llamará al api rest de actualizar la tarea completa
  	// la opción    "Consultar" no  se contempla ya que no será un formulario si no datos solo lectura
  }

}
