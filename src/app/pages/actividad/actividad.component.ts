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

//import swal from 'sweetalert';
import Swal from 'sweetalert2'

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

declare interface UsuarioMensaje {
  idUsuario: string;
  nombreUsuario: string;
  rutaImagen: string;
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

  public usuarioPropio: UsuarioMensaje;
  public usuarioOtro: UsuarioMensaje;

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
 
      this.usuarioPropio = {
        idUsuario: this.usuarioGuardado.getUsuarioId(),
        nombreUsuario: this.usuarioGuardado.getNombre(),
        rutaImagen: "assets/img/faces/"+this.usuarioGuardado.getUsuarioId()+".jpg"

    };

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
         // console.log("ActividadOninit: "+ myJSON)
          this.dataRows= [];
          if(this.usuarioPropio.idUsuario!=  String(this.mensajesTarea[0].usuario_envia.usuario_id)){
            this.usuarioOtro = {
              idUsuario: String(this.mensajesTarea[0].usuario_envia.usuario_id),
              nombreUsuario: this.mensajesTarea[0].usuario_envia.nombre, 
              rutaImagen: "assets/img/faces/"+String(this.mensajesTarea[0].usuario_envia.usuario_id+".jpg")
          };

          }else{

            this.usuarioOtro = {
              idUsuario: String(this.mensajesTarea[0].usuario_recibe.usuario_id),
              nombreUsuario: this.mensajesTarea[0].usuario_recibe.nombre, 
              rutaImagen: "assets/img/faces/"+String(this.mensajesTarea[0].usuario_recibe.usuario_id+".jpg")
          };

          } 
          
   //       console.log("this.usuarioPropio "+ JSON.stringify(this.usuarioPropio));
  //        console.log("this.usuarioOtro "+ JSON.stringify(this.usuarioOtro));
         
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
            this.dataLine.push(String(mensaje.usuario_envia.usuario_id));
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
            horasReales: [  ,[Validators.required]],
            usuario_solicita: [actividad.usuarioSolicita[0].nombre,[Validators.required]],
            usuario_realiza: [actividad.usuarioRealiza[0].nombre,[Validators.required]],
            puntuacionSolicita: [,[Validators.required]],
            observacion: [actividad.observacion,[Validators.required]]
          });
          break;
        case "Aceptar":
          this.aceptarForm = this.fb.group({
            descripcionTarea: [actividad.habilidad[0].descripcion,[Validators.required]],
            horasReales: [actividad.horasReales,[Validators.required]],
            usuario_solicita: [actividad.usuarioSolicita[0].nombre,[Validators.required]],
            usuario_realiza: [actividad.usuarioRealiza[0].nombre,[Validators.required]],
            puntuacionSolicita: [actividad.puntuacionSolicita,[Validators.required]],
            observacion: [actividad.observacion,[Validators.required]],
            valoracion : [,[Validators.required]],
          });
          break;
        case "Consultar":
          this.consultarForm = this.fb.group({
            descripcionTarea: [actividad.habilidad[0].descripcion,[Validators.required]],
            horasReales: [actividad.horasReales],
            usuario_solicita: [actividad.usuarioSolicita[0].nombre,[Validators.required]],
            usuario_realiza: [actividad.usuarioRealiza[0].nombre,[Validators.required]],
            puntuacionSolicita: [actividad.usuarioSolicita[0].reputacion,[Validators.required]],
            observacion: [actividad.observacion,[Validators.required]],
            valoracion : [actividad.valoracion,[Validators.required]]
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
          console.log("ActividadComponent.actualizarActividad this.terminarForm.value "+ JSON.stringify(this.terminarForm.value));
          if( this.terminarForm.valid){ 
                console.log("ActividadComponent.actualizarActividad this.terminarForm.valid "+this.terminarForm.valid);
                //indica las horasReales realizas  y la puntuacion al que solicító la tarea
                let reputacionSolicita = this.actividadCruda.usuarioSolicita[0].reputacion;
                let numeroVotaciones = this.actividadCruda.usuarioSolicita[0].numeroVotaciones;
                numeroVotaciones=numeroVotaciones+1;
                
                //reputacionSolicita=Number(reputacionSolicita)+ Number(this.terminarForm.value.puntuacionSolicita);
                let nVotos5= Number(this.actividadCruda.usuarioSolicita[0].numVotos5) ;
                let nVotos4=Number(this.actividadCruda.usuarioSolicita[0].numVotos4) ;
                let nVotos3=Number(this.actividadCruda.usuarioSolicita[0].numVotos3) ;
                let nVotos2=Number(this.actividadCruda.usuarioSolicita[0].numVotos2) ;
                let nVotos1=Number(this.actividadCruda.usuarioSolicita[0].numVotos1) ;

                switch(this.terminarForm.value.puntuacionSolicita){
                  case "5": 
                        nVotos5 = nVotos5+1;
                        break; 
                  case "4": 
                        nVotos4 = nVotos4+1;
                        break; 
                  case "3":
                        nVotos3 = nVotos3+1;
                        break; 
                  case "2": 
                        nVotos2 = nVotos2+1; 
                        break; 
                  case "1": 
                        nVotos1 = nVotos1+1;           
                        break;        
                        default:
                          // code...
                          break;
                      }
                reputacionSolicita=(5*nVotos5) + (4*nVotos4)  +(3* nVotos3)+(2*nVotos2) + (1*nVotos1);
                reputacionSolicita= reputacionSolicita/numeroVotaciones;
                reputacionSolicita=Math.trunc(Math.round(reputacionSolicita));
                
                let horas = Number(this.actividadCruda.usuarioSolicita[0].bolsaHora)+  Number(this.terminarForm.value.horasReales);
                let idUsuario = this.actividadCruda.usuarioSolicita[0].usuario_id;
                
                this.actividad.id=  Number(this.id);
                this.actividad.horasReales = this.terminarForm.value.horasReales;
                this.actividad.puntuacionSolicita = this.terminarForm.value.puntuacionSolicita;
                this.actividad.finalizada = "1";
      
                this.tareasService.finalizarTarea(this.usuarioGuardado.getToken(),this.actividad).subscribe( data => {
                    data.data;
                    var myJSON = JSON.stringify(data.data);
      //            console.log("ActividadComponent.actualizarActividad() data.data: "+ myJSON);
                    this.usuarioService.actualizarValoracionUsuario(this.usuarioGuardado.getToken(),idUsuario, numeroVotaciones, reputacionSolicita,horas,
                    nVotos5, nVotos4, nVotos3, nVotos2, nVotos1).subscribe( data => {
                        data.data;
                         this.router.navigateByUrl('/panel');
                      });
                });
          }else{
            Swal.fire("Hay errores en el formulario", "Revise los datos", "error");
          }
        break;
        case "Aceptar":
            //valora al usuario  que la realizó
//            console.log("actualizarActividad  var myJSON = JSON.stringify(this.actividad): " + JSON.stringify(this.actividad));      

          console.log("ActividadComponent.actualizarActividad this.aceptarForm.value "+ JSON.stringify(this.aceptarForm.value));
          if( this.aceptarForm.valid){ 
            console.log("ActividadComponent.actualizarActividad this.aceptarForm.valid "+this.aceptarForm.valid);
            let valoracion = this.actividadCruda.usuarioRealiza[0].reputacion;
            let numeroVotaciones2 = this.actividadCruda.usuarioRealiza[0].numeroVotaciones;
            numeroVotaciones2=numeroVotaciones2+1;

            //reputacionSolicita=Number(reputacionSolicita)+ Number(this.terminarForm.value.puntuacionSolicita);
            let nVotos5b= Number(this.actividadCruda.usuarioRealiza[0].numVotos5) ;
            let nVotos4b=Number(this.actividadCruda.usuarioRealiza[0].numVotos4) ;
            let nVotos3b=Number(this.actividadCruda.usuarioRealiza[0].numVotos3) ;
            let nVotos2b=Number(this.actividadCruda.usuarioRealiza[0].numVotos2) ;
            let nVotos1b=Number(this.actividadCruda.usuarioRealiza[0].numVotos1) ;

            switch(this.aceptarForm.value.valoracion){
              case "5": 
                    nVotos5b = nVotos5b+1;
                    break; 
              case "4": 
                     nVotos4b = nVotos4b+1;
                    break; 
              case "3":
                    nVotos3b = nVotos3b+1;
                    break; 
              case "2": 
                    nVotos2b = nVotos2b+1; 
                    break; 
              case "1": 
                    nVotos1b = nVotos1b+1;           
                    break;        
                    default:
                      // code...
                      break;
                  }
                  valoracion=(5*nVotos5b) + (4*nVotos4b)  +(3* nVotos3b)+(2*nVotos2b) + (1*nVotos1b);
                  valoracion= valoracion/numeroVotaciones2;
                  valoracion=Math.trunc(Math.round(valoracion));
 

            let horas2 = Math.trunc(this.actividadCruda.usuarioRealiza[0].bolsaHora +1);
            let idUsuario2 = this.actividadCruda.usuarioRealiza[0].usuario_id;


            this.actividad.id=  Number(this.id);
            this.actividad.valoracion = this.aceptarForm.value.valoracion;
            this.tareasService.finalizarTarea(this.usuarioGuardado.getToken(),this.actividad).subscribe( data => {
              data.data;
              var myJSON = JSON.stringify(data.data);
   //           console.log("ActividadComponent.actualizarActividad() data.data: "+ myJSON);
                this.usuarioService.actualizarValoracionUsuario(this.usuarioGuardado.getToken(),idUsuario2, numeroVotaciones2, valoracion,horas2,
                nVotos5b, nVotos4b, nVotos3b, nVotos2b, nVotos1b).subscribe( data => {
                  data.data;
                                          //faltaria restar la bolsa de horas del otro usuario

              });
            });
          }else{
            Swal.fire("Hay errores en el formulario", "Revise los datos", "error");
          }
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
                        this.dataLine.push(String(mensaje.usuario_envia.usuario_id));
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
                        this.dataLine.push(String(mensaje.usuario_envia.usuario_id));
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
