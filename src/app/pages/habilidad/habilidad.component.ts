import { Component, OnInit } from '@angular/core';
import { HabilidadesService } from '../../servicios/habilidades.service';
import { CategoriaHabilidadesService } from '../../servicios/categoriaHabilidades.service';
import { FormControl, FormGroup,Validators, FormBuilder } from '@angular/forms';
import { UsuarioGuardadoService } from "../../servicios/usuarioguardado.service";

import { CategoriaHabilidad } from "../../models/categoriaHabilidad";
import Swal from 'sweetalert2'


@Component({
  selector: 'app-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.css']
})
export class HabilidadComponent implements OnInit {
  public form: FormGroup;
  public nuevaHabilidadForm: FormGroup;
  Categorias: any = ['Categoria 1', 'Categoria 2', 'Categoria 3', 'Categoria 4'];
  categoriasObjet: CategoriaHabilidad[] = [];
  categoria: string;
  states = [
    {name: 'Arizona', abbrev: 'AZ'},
    {name: 'California', abbrev: 'CA'},
    {name: 'Colorado', abbrev: 'CO'},
    {name: 'New York', abbrev: 'NY'},
    {name: 'Pennsylvania', abbrev: 'PA'},
  ];
  constructor(
    private habilidadesService: HabilidadesService,
    private categoriaHabilidadesService: CategoriaHabilidadesService,
    public usuarioGuardado:UsuarioGuardadoService,
    private fb: FormBuilder    
  ) { }

  ngOnInit(): void {
    console.log("HabilidadComponent.ngOnInit");
    this.categoriaHabilidadesService.leerlistado();
    this.categoriaHabilidadesService.getCategorias$().subscribe( data => {
      this.categoriasObjet = data;
   //   console.log("HabilidadComponent.ngOnInit  = "+JSON.stringify(this.categoriasObjet));
      // hay que meter esto en un observable para poder cargar esta lista
      // automaticamente cuando de de alta la categoria
      this.createForm();
    });
  }

  createForm() {
  //  console.log("HabilidadComponent.createForm");
    /*
      descripcion: string;
      horasEstipuladas: string;
      categoriaHabilidad: CategoriaHabilidad;
  
 

      this.nuevaHabilidadForm = this.fb.group({
        descripcion: [null, [ Validators.required ] ],
        horasEstipuladas: ['', [ Validators.required ] ],
        categoria_ID:  [null, [ Validators.required ] ]
      });
        */
      this.form = new FormGroup({
        descripcionHabilidad: new FormControl( null, [
          Validators.required,
          Validators.minLength(4)]),
        horasEstipuladas:new FormControl( null, [
          Validators.required,
          Validators.minLength(4)]),
        categoria_ID: new FormControl(this.categoriasObjet[3])
      });
  }

  

  guardarHabilidad (): void {
//    console.log("HabilidadComponent.guardarHabilidad form: "+ JSON.stringify( this.form.value));
//    console.log("HabilidadComponent.guardarHabilidad idcategoria: "+  this.form.value.categoria_ID.id   );
if( this.form.valid){ 
    this.habilidadesService.nuevaHabilidad(this.form.value.descripcionHabilidad,
      this.form.value.horasEstipuladas,
      this.form.value.categoria_ID.id,
      ).subscribe( data => {
//      console.log("HabilidadComponent.guardarHabilidad: " + JSON.stringify (data) );
       Swal.fire("Habilidad almacenada correctamente", " ", "success");
      this.habilidadesService.leerlistado(this.form.value.categoria_ID.id); 
  });
}else{
  Swal.fire("Hay errores en el formulario", "Revise la habilidad", "error");
} 
 }
}
