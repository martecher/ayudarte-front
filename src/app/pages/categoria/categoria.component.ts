import { Component, OnInit } from '@angular/core';
import { CategoriaHabilidadesService } from '../../servicios/categoriaHabilidades.service';
import { UsuarioGuardadoService } from "../../servicios/usuarioguardado.service";
import { FormControl, FormGroup,Validators, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2'


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
    this.nuevaCategoriaForm = new FormGroup({
      descripcionCategoria: new FormControl( null, [
        Validators.required,
        Validators.minLength(4)])
      });
  }

  guardarCategoria(): void {
      if( this.nuevaCategoriaForm.valid){ 
      console.log("CategoriaComponent.guardarCategoria descripcionCategoria: "+this.nuevaCategoriaForm.value.descripcionCategoria);
      this.categoriaHabilidadesService.nuevaCategoriaHabilidad(this.nuevaCategoriaForm.value.descripcionCategoria).subscribe( data => {
        console.log("CategoriaComponent.guardarCategoria: " + JSON.stringify (data) );
        this.categoriaHabilidadesService.leerlistado(); 
        Swal.fire("Categoría almacenada correctamente", " ", "success");
      });
    }else{
      Swal.fire("Hay errores en el formulario", "Revise la categoría", "error");
    } 
  }  
}
