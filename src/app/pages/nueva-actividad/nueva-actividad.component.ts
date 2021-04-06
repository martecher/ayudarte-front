import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators, FormBuilder } from '@angular/forms';
import { HabilidadesService } from '../../servicios/habilidades.service';
import { Habilidad } from "../../models/Habilidad";
import { CategoriaHabilidad } from "../../models/categoriaHabilidad";
import { CategoriaHabilidadesService } from '../../servicios/categoriaHabilidades.service';
import { TareasService } from '../../servicios/tareas.service';
import { UsuarioGuardadoService } from "../../servicios/usuarioguardado.service";
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-nueva-actividad',
  templateUrl: './nueva-actividad.component.html',
  styleUrls: ['./nueva-actividad.component.css']
})
export class NuevaActividadComponent implements OnInit {

  public nuevaTareaForm: FormGroup;
  habilidades: any = ['Habiliad 1', 'habiliad 2', 'habilidad 3', 'habilidad 4'];
  habilidadesObjet2: Habilidad[] = [];
  categoriasObjet2: CategoriaHabilidad[] = [];
  idActividadSelect;
  idHabilidadSelect; 

  constructor(
    private router: Router,
    private categoriaHabilidadesService: CategoriaHabilidadesService,
    private fb: FormBuilder,
    private habilidadesService: HabilidadesService,
    private tareasService: TareasService,
    public usuarioGuardado:UsuarioGuardadoService

  ) { }

  ngOnInit(): void {
    this.categoriaHabilidadesService.leerlistado();    
    this.categoriaHabilidadesService.getCategorias$().subscribe( data => {
      this.categoriasObjet2 = data;
      this.habilidadesService.getHabilidades$().subscribe( data => {
        this.habilidadesObjet2 = data;
      });
    });
    this.createForm();
  }

  createForm() {
    console.log("CategoriaComponent.createForm");
    this.nuevaTareaForm = new FormGroup({
      descripcionTarea: new FormControl( null, [ Validators.required, Validators.minLength(4)]),
      categoria_ID2: new FormControl( null, [ Validators.required] ), 
      habilidad_ID2: new FormControl( null, [ Validators.required] )     
      });
  }

  guardarActividadOLD(): void {
    console.log("CategoriaComponent.createForm; "+ JSON.stringify(this.nuevaTareaForm.value));
     
  }  

  
 
  onChangeCategoriaActividad(idActividad: number){
//    console.log("NuevaActividadComponent.onChangeActividad");
    this.habilidadesService.leerlistado(idActividad);
      this.habilidadesService.getHabilidades$().subscribe( data => {
      this.habilidadesObjet2 = data;
//      console.log("NuevaActividadComponent.onChangeActividad habilidadesObjet2 = "+JSON.stringify(this.habilidadesObjet2));
      // hay que meter esto en un observable para poder cargar esta lista
      this.idActividadSelect = idActividad;
  });   
  }
   
  onChangeCategoriaHabilidad(idHabilidad: number){
//    console.log("NuevaActividadComponent.onChangeCategoriaHabilidad: " +idHabilidad);
    this.idHabilidadSelect=idHabilidad;
  }


  guardarActividad(){
    console.log("NuevaActividadComponent.guardarActividad");
    console.log("NuevaActividadComponent.guardarActividad  = "+JSON.stringify(this.nuevaTareaForm.value));
    console.log("NuevaActividadComponent.guardarActividad  idHabilidadSelect= "+this.idHabilidadSelect);
    console.log("NuevaActividadComponent.guardarActividad  idActividadSelect= "+this.idActividadSelect);
    if(this.nuevaTareaForm.valid){
    this.tareasService.nuevaActividad(this.usuarioGuardado.getToken(),this.nuevaTareaForm.value.descripcionTarea,
    this.usuarioGuardado.getUsuarioId(),this.idHabilidadSelect).subscribe( data => {
       console.log("NuevaActividadComponent.onChangeActividad habilidadesObjet2 = "+JSON.stringify(data));
      // hay que meter esto en un observable para poder cargar esta lista
      Swal.fire("Habilidad almacenada correctamente", " ", "success");
      this.router.navigateByUrl('/actividades');
    });  
    }else{
      Swal.fire("Errores en el formulario", "Revise los datos", "error");
    }
  }
}
