import { Component, OnInit } from '@angular/core';
import { CategoriaHabilidadesService } from '../../servicios/categoriaHabilidades.service';
import { FormControl, FormGroup,Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  public nuevaCategoriaForm: FormGroup;

  constructor(
    private categoriaHabilidadesService: CategoriaHabilidadesService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    console.log("CategoriaComponent.ngOnInit");
    this.createForm();
  }

  createForm() {
    console.log("NuevaActividadComponent.createForm");
    /*
      descripcion: string;
    */
    this.nuevaCategoriaForm = new FormGroup({
      descripcion: new FormControl()
      });
  }

  
  guardarCategoria(): void {
    console.log("CategoriaComponent.guardarCategoria");
 
  }  
}
