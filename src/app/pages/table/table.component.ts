import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../servicios/usuarios.service';
import { UsuarioGuardadoService } from "../../servicios/usuarioguardado.service";
import { TareasService } from "../../servicios/tareas.service";
import { ActividadesRealizadas } from "../../models/actividadesRealizadas";
import { FormControl, FormGroup,Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MensajesService } from "../../servicios/mensajes.service";

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit{
    public tableData1: TableData;
    public tableData2: TableData;
    public listaTareasAsignadasPropias: ActividadesRealizadas[];
    public listaTareasNoAsignadas: ActividadesRealizadas[];
    public listaTareasNoAsignadasAux: ActividadesRealizadas[];
    public actividad: ActividadesRealizadas;

    public dataRows: Array<Array<string>>= [];
    public dataLine: Array<string> = [];
    public buscarForm: FormGroup;

  constructor(
    public mensajesService: MensajesService,
    private router: Router,
    private fb: FormBuilder,
    public usuarioService: UsuariosService,
    public usuarioGuardado:UsuarioGuardadoService,
    public tareasService:TareasService
    ) { }

    ngOnInit(){
        this.buscarForm = this.fb.group({
            texto: []
          });
        this.tableData2 = {
            headerRow: [ 'ID', 'Name',  'Salary', 'Country', 'City' ],
            dataRows: [
                ['1', 'Dakota Rice','$36,738', 'Niger', 'Oud-Turnhout' ],
                ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
                ['3', 'Sage Rodriguez', '$56,142', 'Netherlands', 'Baileux' ],
                ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park' ],
                ['5', 'Doris Greene', '$63,542', 'Malawi', 'Feldkirchen in Kärnten', ],
                ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester' ]
            ]
        };
        // Esta lista de tareas son las no asigandas, estan libres y voy a  poder asignamerlas yo
        this.tareasService.listaTareasAsignadas(this.usuarioGuardado.getToken(),0).subscribe( data => {
        this.listaTareasNoAsignadas = data.data;
        this.dataRows= [];
        console.log("Muestro la lista de tareas no finalizadas asigandas al usuario");
        console.log(this.listaTareasNoAsignadas);
        for (var tarea of this.listaTareasNoAsignadas) {
            this.dataLine = [];
            this.dataLine.push(String(tarea.id));
            this.dataLine.push(tarea.habilidad.descripcion);
            this.dataLine.push(tarea.usuario_solicita.nombre.concat(
                                ' ',
                                tarea.usuario_solicita.apellido1,
                                ' ',
                                tarea.usuario_solicita.apellido2)
            );
            this.dataLine.push(tarea.observacion);
            this.dataLine.push(tarea.habilidad.horasEstipuladas);
            this.dataLine.push("Boton para Realizarla");
            this.dataRows.push(this.dataLine);
        }
        this.tableData1 = {
            headerRow: [   'Actividad', 'Solicita', 'Observacion', 'Horas Estipuladas', 'Realizarla'],
            dataRows: this.dataRows
        };
    });
  }
  buscarPorHabilidad(habilidad){
      //falta llamar a un metodo que filtre las actividades por habilidad que incluya el nombre
      //de la actividad
    console.log("TableComponent buscarPorHabilidad: "+this.buscarForm.value.texto );
    
  this.listaTareasNoAsignadasAux=this.listaTareasNoAsignadas.filter(tarea => tarea.habilidad.descripcion.includes(this.buscarForm.value.texto));
  
  this.dataRows= [];
  console.log("buscarPorHabilidad listaTareasNoAsignadasAux");
  console.log(this.listaTareasNoAsignadasAux);
  for (var tarea of this.listaTareasNoAsignadasAux) {
      this.dataLine = [];
      this.dataLine.push(String(tarea.id));
      this.dataLine.push(tarea.habilidad.descripcion   );
      this.dataLine.push(tarea.usuario_solicita.nombre.concat(
                          ' ',
                          tarea.usuario_solicita.apellido1,
                          ' ',
                          tarea.usuario_solicita.apellido2)
      );
      this.dataLine.push(tarea.observacion);
      this.dataLine.push(tarea.habilidad.horasEstipuladas);
      this.dataLine.push("Boton para Realizarla");
      this.dataRows.push(this.dataLine);
  }
  this.tableData1 = {
      headerRow: [  'Actividad', 'Solicita', 'Observacion', 'Horas Estipuladas', 'Realizarla'],
      dataRows: this.dataRows
  };
  this.router.navigateByUrl('/actividades');

  }


    asignar(id) {

        this.tareasService.getTarea(this.usuarioGuardado.getToken(),id).subscribe( data => {
           var actividad = data.data;
            var myJSON = JSON.stringify(data.data);   

            this.tareasService.asignarTarea(this.usuarioGuardado.getToken(),id,this.usuarioGuardado.getUsuarioId()).subscribe( data => {
              data.data;
        
              var myJSON = JSON.stringify(actividad);   
              console.log("TableComponent.asignar()  myJSON: " + myJSON);      

              this.mensajesService.nuevoMensaje(this.usuarioGuardado.getToken(),
              "La tarea ha sido seleccionada para ser realazada por un usuario", this.usuarioGuardado.getUsuarioId(),
              actividad.usuarioSolicita[0].usuario_id, id,1
              ).subscribe( data => {
                  data.data;
                  this.router.navigateByUrl('/panel');
              });
            });
        });
    }
}
