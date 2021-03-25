import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators, FormBuilder } from '@angular/forms';
import { HabilidadesService } from '../../servicios/habilidades.service';
import { Habilidad } from "../../models/Habilidad";

@Component({
  selector: 'app-nueva-actividad',
  templateUrl: './nueva-actividad.component.html',
  styleUrls: ['./nueva-actividad.component.css']
})
export class NuevaActividadComponent implements OnInit {

  public nuevaActividadForm: FormGroup;
  habilidades: any = ['Habiliad 1', 'habiliad 2', 'habilidad 3', 'habilidad 4'];
  habilidadesObjet: Habilidad[] = [];


  constructor(
    private fb: FormBuilder,
    private habilidadesService: HabilidadesService

  ) { }

  ngOnInit(): void {
    console.log("NuevaActividadComponent.ngOnInit");   
    this.habilidadesService.getHabilidades$().subscribe( data => {
      this.habilidadesObjet = data;
      console.log("NuevaActividadComponent.ngOnInit  = "+JSON.stringify(this.habilidadesObjet));
      // hay que meter esto en un observable para poder cargar esta lista
      // automaticamente cuando de de alta la categoria
      this.createForm();
    });
  }

  createForm() {
    console.log("NuevaActividadComponent.createForm");

    /*
      observacion: string;
  horasReales: string;
  valoracion: string;
  usuario_solicita: Usuario;
  usuario_realiza: Usuario;
  habilidad: Habilidad;
  puntuacionSolicita: string;
  finalizada: string;
    */
  
    
    this.nuevaActividadForm = new FormGroup({
      habilidad: new FormControl(),   
      descripcion: new FormControl(),
      horasEstipuladas: new FormControl()
      });
  }

  guardarActividad(){
    console.log("NuevaActividadComponent.guardarActividad");
  }
}
