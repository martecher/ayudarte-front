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
  public terminarForm: FormGroup;
  public puntuacionRecibida: string;
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
 
      this.createForm( this.operacion,this.actividad);

      });
  }

  createForm(operacion, actividad) {

/*
  id: number;
  observacion: string;
  horasReales: string;
  valoracion: string;
  usuario_solicita: Usuario;
  usuario_realiza: Usuario;
  habilidad: Habilidad;
  puntuacionSolicita: string;
  finalizada: string;
*/
      this.puntuacionRecibida = ""+actividad.usuarioSolicita[0].reputacion;
      console.log("ActividadComponent.ngOnInit() puntuacionRecibida: "+ this.puntuacionRecibida);

      switch (operacion) {
        case "Terminar":
          this.terminarForm = this.fb.group({
            descripcionTarea: [actividad.habilidad[0].descripcion],
            horasReales: [],
            usuario_solicita: [actividad.usuarioSolicita[0].nombre],
            usuario_realiza: [actividad.usuarioRealiza[0].nombre],
            puntuacionSolicita: [actividad.usuarioSolicita[0].reputacion]
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

      switch (this.operacion) {
        case "Terminar":
            this.actividad.horasReales = this.terminarForm.value.horasReales;
            this.actividad.puntuacionSolicita = this.terminarForm.value.puntuacionSolicita;
            this.actividad.finalizada = "1";

            console.log('actualizarActividad ',  this.actividad);


          break;
        
        default:
          // code...
          break;
      }

  }

}
