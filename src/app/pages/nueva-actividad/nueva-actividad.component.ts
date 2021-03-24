import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-nueva-actividad',
  templateUrl: './nueva-actividad.component.html',
  styleUrls: ['./nueva-actividad.component.css']
})
export class NuevaActividadComponent implements OnInit {

  public nuevaActividadForm: FormGroup;
  habilidades: any = ['Habiliad 1', 'habiliad 2', 'habilidad 3', 'habilidad 4'];


  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    console.log("NuevaActividadComponent.ngOnInit");
    this.createForm();

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
      observacion: new FormControl(),
      });
  }

  guardarActividad(){
    console.log("NuevaActividadComponent.guardarActividad");
  }
}
