import { Component, OnInit } from '@angular/core';
import { HabilidadesService } from '../../servicios/habilidades.service';
import { CategoriaHabilidadesService } from '../../servicios/categoriaHabilidades.service';
import { FormControl, FormGroup,Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.css']
})
export class HabilidadComponent implements OnInit {

  public nuevaHabilidadForm: FormGroup;

  constructor(
    private habilidadesService: HabilidadesService,
    private categoriaHabilidadesService: CategoriaHabilidadesService,
    private fb: FormBuilder    
  ) { }

  ngOnInit(): void {
    console.log("HabilidadComponent.ngOnInit");
    this.createForm();
  }

  createForm() {
    console.log("NuevaActividadComponent.createForm");
    /*
      descripcion: string;
      horasEstipuladas: string;
      categoriaHabilidad: CategoriaHabilidad;
    */
    this.nuevaHabilidadForm = new FormGroup({
      descripcion: new FormControl(),
      horasEstipuladas: new FormControl(),
      listaCategorias: new FormControl(),
      });
  }
}
