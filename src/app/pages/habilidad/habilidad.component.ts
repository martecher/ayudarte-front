import { Component, OnInit } from '@angular/core';
import { HabilidadesService } from '../../servicios/habilidades.service';
import { CategoriaHabilidadesService } from '../../servicios/categoriaHabilidades.service';
import { FormControl, FormGroup,Validators, FormBuilder } from '@angular/forms';
import { UsuarioGuardadoService } from "../../servicios/usuarioguardado.service";

import { CategoriaHabilidad } from "../../models/categoriaHabilidad";


@Component({
  selector: 'app-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.css']
})
export class HabilidadComponent implements OnInit {

  public nuevaHabilidadForm: FormGroup;
  Categorias: any = ['Categoria 1', 'Categoria 2', 'Categoria 3', 'Categoria 4'];
  categoriasObjet: CategoriaHabilidad[] = [];

  constructor(
    private habilidadesService: HabilidadesService,
    private categoriaHabilidadesService: CategoriaHabilidadesService,
    public usuarioGuardado:UsuarioGuardadoService,
    private fb: FormBuilder    
  ) { }

  ngOnInit(): void {
    console.log("HabilidadComponent.ngOnInit");
    this.categoriaHabilidadesService.listaCategoriaHabilidades(this.usuarioGuardado.getToken()).subscribe( data => {
      this.categoriasObjet = data.data;
      console.log("HabilidadComponent.ngOnInit  = "+JSON.stringify(this.categoriasObjet));
      // hay que meter esto en un observable para poder cargar esta lista
      // automaticamente cuando de de alta la categoria
      this.createForm();
    });
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
