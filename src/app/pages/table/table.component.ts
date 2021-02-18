import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../usuarios/usuarios.service';
import { UsuarioGuardadoService } from "../../usuarios/usuarioguardado.service";
import { TareasService } from "./tareas.service";
import { ActividadesRealizadas } from "../../models/actividadesRealizadas";

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
    public dataRows: Array<Array<string>>= [];
    public dataLine: Array<string> = [];

  constructor(
    public usuarioService: UsuariosService,
    public usuarioGuardado:UsuarioGuardadoService,
    public tareasService:TareasService
    ) { }

    ngOnInit(){


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
            headerRow: [ 'ID', 'Actividad', 'Solicita', 'Observacion', 'Horas Estipuladas', 'Realizarla'],
            dataRows: this.dataRows
        };

//        console.log("-- Mostramos la tabla -----");
//        console.log(this.tableData1.headerRow);
//        console.log(this.tableData1.dataRows);
    });

  }
}
