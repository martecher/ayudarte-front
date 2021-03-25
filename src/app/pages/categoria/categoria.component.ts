import { Component, OnInit } from '@angular/core';
import { CategoriaHabilidadesService } from '../../servicios/categoriaHabilidades.service';
import { UsuarioGuardadoService } from "../../servicios/usuarioguardado.service";
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
    public usuarioGuardado:UsuarioGuardadoService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
      console.log("CategoriaComponent.ngOnInit");

      this.createForm();
  }

  createForm() {
    console.log("CategoriaComponent.createForm");
    /*
      descripcion: string;
    */
    this.nuevaCategoriaForm = new FormGroup({
      descripcion: new FormControl()
      });
  }

  
  guardarCategoria(): void {
    console.log("CategoriaComponent.guardarCategoria descripcion: "+this.nuevaCategoriaForm.value.descripcion);
 
    this.categoriaHabilidadesService.nuevaCategoriaHabilidad(this.nuevaCategoriaForm.value.descripcion).subscribe( data => {
      console.log("CategoriaComponent.guardarCategoria: " + JSON.stringify (data) );
      this.categoriaHabilidadesService.leerlistado(); 
  });
  
  }  
}
