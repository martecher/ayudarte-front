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
  Categorias: any = ['Categoria 1', 'Categoria 2', 'Categoria 3', 'Categoria 4'];
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
      categoria: new FormControl(),
      });
  }

  /*
  changeCity(e) {
    this.listaCategorias.setValue(e.target.value, {
      onlySelf: true
    })
  }
  */
}
