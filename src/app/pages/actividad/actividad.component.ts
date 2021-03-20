import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ActividadesRealizadas } from '../../models/actividadesRealizadas';
import { Mensajes } from '../../models/mensajes';
import { Usuario } from '../../models/usuario';



import { UsuarioGuardadoService } from "../../servicios/usuarioguardado.service";
import { MensajesService } from "../../servicios/mensajes.service";
import { TareasService } from "../../servicios/tareas.service";
import { UsuariosService } from '../../servicios/usuarios.service';

import { Router } from '@angular/router';
import { FormControl, FormGroup,Validators, FormBuilder } from '@angular/forms';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
//  styleUrls: ['./actividad.component.css']
   moduleId: module.id,
})

export class ActividadComponent implements OnInit {

  public tableData1: TableData;
  public dataRows: Array<Array<string>>= [];
  public dataLine: Array<string> = [];
  public id: string;
  public operacion: string;
  public actividad: ActividadesRealizadas;
  public mensajesTarea: Array<Mensajes> = [];
  public mensajeTarea: Mensajes;
  public actividadCruda;
  public terminarForm: FormGroup;
  public aceptarForm: FormGroup;
  public consultarForm: FormGroup;
  public mensajeForm: FormGroup;
  
  public puntuacionRecibida: string;
  constructor( 
      private router: Router,
      private fb: FormBuilder,
  		private rutaActiva: ActivatedRoute,
  		public mensajesService: MensajesService,
  		public usuarioService: UsuariosService,
    	public usuarioGuardado:UsuarioGuardadoService,
    	public tareasService:TareasService ) {   }

  ngOnInit(): void {
      this.id = this.rutaActiva.snapshot.params.id;
      this.operacion = this.rutaActiva.snapshot.params.operacion;
      this.tareasService.getTarea(this.usuarioGuardado.getToken(),this.id).subscribe( data => {
      this.actividad = data.data;
      this.actividadCruda = data.data;
      var myJSON = JSON.stringify(data.data);
   //     console.log("ActividadComponent.ngOnInit() data.data: "+ myJSON);
        this.createForm( this.operacion,this.actividad);
      });

      this.mensajesService.listaMensajesTarea(this.usuarioGuardado.getToken(),this.id).subscribe( data => {
        this.mensajesTarea = data.data;
        var myJSON = JSON.stringify(data.data);
          this.dataRows= [];

          for (var mensaje of this.mensajesTarea) {
            this.dataLine = [];
            this.dataLine.push(String(mensaje.id));
            this.dataLine.push(String(mensaje.orden));
            this.dataLine.push(mensaje.texto);
 
            this.dataLine.push(mensaje.usuario_envia.nombre.concat(
                                ' ',
                                mensaje.usuario_envia.apellido1,
                                ' ',
                                mensaje.usuario_envia.apellido2)
            );
           
            this.dataLine.push(mensaje.usuario_recibe.nombre.concat(
              ' ',
              mensaje.usuario_recibe.apellido1,
              ' ',
              mensaje.usuario_recibe.apellido2)
            );
            this.dataLine.push(String(mensaje.leido));
            this.dataRows.push(this.dataLine);
        }
          this.tableData1 = {
            headerRow: [  'texto', 'envía', 'recibe', 'leido'],
            dataRows: this.dataRows
        };
        });
  }

  createForm(operacion, actividad) {

 //     console.log("ActividadComponent.ngOnInit() puntuacionRecibida: "+ this.puntuacionRecibida);
      switch (operacion) {
        case "Terminar":
          this.terminarForm = this.fb.group({
            descripcionTarea: [actividad.habilidad[0].descripcion],
            horasReales: [],
            usuario_solicita: [actividad.usuarioSolicita[0].nombre],
            usuario_realiza: [actividad.usuarioRealiza[0].nombre],
            puntuacionSolicita: [actividad.usuarioSolicita[0].reputacion],
            observacion: [actividad.observacion]
          });
          break;
        case "Aceptar":
          this.aceptarForm = this.fb.group({
            descripcionTarea: [actividad.habilidad[0].descripcion],
            horasReales: [actividad.horasReales],
            usuario_solicita: [actividad.usuarioSolicita[0].nombre],
            usuario_realiza: [actividad.usuarioRealiza[0].nombre],
            puntuacionSolicita: [actividad.puntuacionSolicita],
            observacion: [actividad.observacion],
            valoracion : [],
          });
          break;
        case "Consultar":
          this.consultarForm = this.fb.group({
            descripcionTarea: [actividad.habilidad[0].descripcion],
            horasReales: [actividad.horasReales],
            usuario_solicita: [actividad.usuarioSolicita[0].nombre],
            usuario_realiza: [actividad.usuarioRealiza[0].nombre],
            puntuacionSolicita: [actividad.usuarioSolicita[0].reputacion],
            observacion: [actividad.observacion],
            valoracion : [actividad.valoracion]
          });
          break;

        default:
          // code...
          break;
      }

      this.mensajeForm = this.fb.group({
        texto: []
      });

  }

  volver(){
    this.mensajesService.marcarLeidosMensajesTarea(this.usuarioGuardado.getToken(),this.id).subscribe( data => {
      var myJSON = JSON.stringify(data.data);
   //     console.log("ActividadComponent.volver() data.data: "+ myJSON);
      });
    this.router.navigateByUrl('/panel');
  }


  actualizarActividad(){
 	//recibe la funcion que hemos elegido anteriormente "Terminar" o "Aceptar"
  	// dependiendo de eso le habre mostrado un formulario u otro pero todos vendran a este metodo
  	// que asignará las propiedades y llamará al api rest de actualizar la tarea completa
  	// la opción    "Consultar" no  se contempla ya que no será un formulario si no datos solo lectura

      switch (this.operacion) {
        case "Terminar":
            //indica las horasReales realizas  y la puntuacion al que solicító la tarea
            console.log("actualizarActividad  var myJSON = JSON.stringify(this.actividad): " + JSON.stringify(this.actividad));      
            let reputacionSolicita = this.actividadCruda.usuarioSolicita[0].reputacion;
            console.log("actualizarActividad reputacionSolicita: " + reputacionSolicita);
            let numeroVotaciones = this.actividadCruda.usuarioSolicita[0].numeroVotaciones;
            console.log("actualizarActividad numeroVotaciones: " + numeroVotaciones);
            numeroVotaciones=numeroVotaciones+1;
            console.log("actualizarActividad numeroVotaciones: " + numeroVotaciones);
            
            console.log("this.terminarForm.value.puntuacionSolicita: " + this.terminarForm.value.puntuacionSolicita);

            reputacionSolicita=Number(reputacionSolicita)+ Number(this.terminarForm.value.puntuacionSolicita);
            console.log("actualizarActividad reputacionSolicita: " + reputacionSolicita);
            reputacionSolicita=reputacionSolicita/numeroVotaciones;
            console.log("actualizarActividad reputacionSolicita: " + reputacionSolicita);

            let horas = Math.trunc(this.actividadCruda.usuarioSolicita[0].bolsaHora +1);
            let idUsuario = this.actividadCruda.usuarioSolicita[0].usuario_id;
            
            
            this.actividad.id=  Number(this.id);
            this.actividad.horasReales = this.terminarForm.value.horasReales;
            this.actividad.puntuacionSolicita = this.terminarForm.value.puntuacionSolicita;
            this.actividad.finalizada = "1";
  
            this.tareasService.finalizarTarea(this.usuarioGuardado.getToken(),this.actividad).subscribe( data => {
                data.data;
                var myJSON = JSON.stringify(data.data);
  //            console.log("ActividadComponent.actualizarActividad() data.data: "+ myJSON);
                this.usuarioService.actualizarValoracionUsuario(this.usuarioGuardado.getToken(),idUsuario, numeroVotaciones, reputacionSolicita,horas).subscribe( data => {
                    data.data;
                });
            });
            
                       break;
        case "Aceptar":
            //valora al usuario  que la realizó
            console.log("actualizarActividad  var myJSON = JSON.stringify(this.actividad): " + JSON.stringify(this.actividad));      
            let valoracion = this.actividadCruda.usuarioRealiza[0].reputacion;
            let numeroVotaciones2 = this.actividadCruda.usuarioRealiza[0].numeroVotaciones;
            numeroVotaciones2=numeroVotaciones2+1;
            valoracion=(Number(valoracion)+Number(this.terminarForm.value.valoracion))/numeroVotaciones2;
            let horas2 = Math.trunc(this.actividadCruda.usuarioRealiza[0].bolsaHora +1);
            let idUsuario2 = this.actividadCruda.usuarioSolicita[0].usuario_id;


            this.actividad.id=  Number(this.id);
            this.actividad.valoracion = this.aceptarForm.value.valoracion;
            this.tareasService.finalizarTarea(this.usuarioGuardado.getToken(),this.actividad).subscribe( data => {
              data.data;
              var myJSON = JSON.stringify(data.data);
   //           console.log("ActividadComponent.actualizarActividad() data.data: "+ myJSON);
                this.usuarioService.actualizarValoracionUsuario(this.usuarioGuardado.getToken(),idUsuario2, numeroVotaciones2, valoracion,horas2).subscribe( data => {
                  data.data;
              });
            });
          break;
        case "Consultar":
            // Este no hace nada. Puede dirigir al dashboard 
            this.router.navigateByUrl('/panel');

          break;
        default:
          // code...
          break;
      }
  }
  
  enviarMensaje(){
     switch (this.operacion) {
      case "Terminar":
          this.tareasService.getTarea(this.usuarioGuardado.getToken(),this.id).subscribe( data => {
              this.actividad = data.data;
              var myJSON = JSON.stringify(data.data);
              this.mensajesService.nuevoMensaje(this.usuarioGuardado.getToken(),
              this.mensajeForm.value.texto, data.data.usuarioRealiza[0].usuario_id,
              data.data.usuarioSolicita[0].usuario_id, this.id,
              this.mensajesTarea.length+1
              ).subscribe( data => {
                  data.data;
                  this.mensajesService.listaMensajesTarea(this.usuarioGuardado.getToken(),this.id).subscribe( data => {
                    this.mensajesTarea = data.data;
                    var myJSON = JSON.stringify(data.data);
                      this.dataRows= [];
                      for (var mensaje of this.mensajesTarea) {
                        this.dataLine = [];
                        this.dataLine.push(String(mensaje.id));
                        this.dataLine.push(String(mensaje.orden));
                        this.dataLine.push(mensaje.texto);
             
                        this.dataLine.push(mensaje.usuario_envia.nombre.concat(
                                            ' ',
                                            mensaje.usuario_envia.apellido1,
                                            ' ',
                                            mensaje.usuario_envia.apellido2)
                        );
                        this.dataLine.push(mensaje.usuario_recibe.nombre.concat(
                          ' ',
                          mensaje.usuario_recibe.apellido1,
                          ' ',
                          mensaje.usuario_recibe.apellido2)
                        );
                        this.dataLine.push(String(mensaje.leido));
                        this.dataRows.push(this.dataLine);
                    }
                      this.tableData1 = {
                        headerRow: [  'texto', 'envía', 'recibe', 'leido'],
                        dataRows: this.dataRows
                    };
                    });
                });
            });        

      break;
      case "Aceptar":
          this.tareasService.getTarea(this.usuarioGuardado.getToken(),this.id).subscribe( data => {
              this.actividad = data.data;
              var myJSON = JSON.stringify(data.data);
              this.mensajesService.nuevoMensaje(this.usuarioGuardado.getToken(),
              this.mensajeForm.value.texto, 
              data.data.usuarioSolicita[0].usuario_id ,
              data.data.usuarioRealiza[0].usuario_id, this.id,
              this.mensajesTarea.length+1
              ).subscribe( data => {
                  data.data;
                  this.mensajesService.listaMensajesTarea(this.usuarioGuardado.getToken(),this.id).subscribe( data => {
                    this.mensajesTarea = data.data;
                    var myJSON = JSON.stringify(data.data);
                      this.dataRows= [];
                      for (var mensaje of this.mensajesTarea) {
                        this.dataLine = [];
                        this.dataLine.push(String(mensaje.id));
                        this.dataLine.push(String(mensaje.orden));
                        this.dataLine.push(mensaje.texto);
             
                        this.dataLine.push(mensaje.usuario_envia.nombre.concat(
                                            ' ',
                                            mensaje.usuario_envia.apellido1,
                                            ' ',
                                            mensaje.usuario_envia.apellido2)
                        );
                        this.dataLine.push(mensaje.usuario_recibe.nombre.concat(
                          ' ',
                          mensaje.usuario_recibe.apellido1,
                          ' ',
                          mensaje.usuario_recibe.apellido2)
                        );
                        this.dataLine.push(String(mensaje.leido));
                        this.dataRows.push(this.dataLine);
                    }
                      this.tableData1 = {
                        headerRow: [  'texto', 'envía', 'recibe', 'leido'],
                        dataRows: this.dataRows
                    };
                    });
                });
            });        

      break;
      default:
        // code...
        break;
     }
    }
}
