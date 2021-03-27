import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators, FormBuilder } from '@angular/forms';
import { HabilidadesService } from '../../servicios/habilidades.service';
import { Habilidad } from "../../models/Habilidad";
import { CategoriaHabilidad } from "../../models/categoriaHabilidad";
import { CategoriaHabilidadesService } from '../../servicios/categoriaHabilidades.service';
import { TareasService } from '../../servicios/tareas.service';
import { UsuarioGuardadoService } from "../../servicios/usuarioguardado.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-nueva-actividad',
  templateUrl: './nueva-actividad.component.html',
  styleUrls: ['./nueva-actividad.component.css']
})
export class NuevaActividadComponent implements OnInit {

  public nuevaActividadForm: FormGroup;
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
  //  console.log("NuevaActividadComponent.ngOnInit"); 
    this.categoriaHabilidadesService.leerlistado();    
    this.categoriaHabilidadesService.getCategorias$().subscribe( data => {
      this.categoriasObjet2 = data;
//       console.log("HabilidadComponent.ngOnInit  = "+JSON.stringify(this.categoriasObjet2));

      this.habilidadesService.getHabilidades$().subscribe( data => {
        this.habilidadesObjet2 = data;
 //       console.log("NuevaActividadComponent.ngOnInit  = "+JSON.stringify(this.habilidadesObjet2));
        // hay que meter esto en un observable para poder cargar esta lista
        // automaticamente cuando de de alta la categoria
        this.createForm();
    });
  });
  }

  createForm() {
  //  console.log("NuevaActividadComponent.createForm");

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
  this.nuevaActividadForm = this.fb.group({
    categoria_ID2: [],
    habilidad_ID2: [],
    descripcionTarea:  []
  });
    

  }

  /*
  changeClassesLevel(id: number) {
    console.log("Hit");
    console.log(id);
  }
*/
 
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
//    console.log("NuevaActividadComponent.guardarActividad");
//    console.log("NuevaActividadComponent.guardarActividad  = "+JSON.stringify(this.nuevaActividadForm.value));
//    console.log("NuevaActividadComponent.guardarActividad  idHabilidadSelect= "+this.idHabilidadSelect);
//    console.log("NuevaActividadComponent.guardarActividad  idActividadSelect= "+this.idActividadSelect);
    this.tareasService.nuevaActividad(this.usuarioGuardado.getToken(),this.nuevaActividadForm.value.descripcionTarea,
    this.usuarioGuardado.getUsuarioId(),this.idHabilidadSelect).subscribe( data => {
//       console.log("NuevaActividadComponent.onChangeActividad habilidadesObjet2 = "+JSON.stringify(data));
      // hay que meter esto en un observable para poder cargar esta lista
      this.router.navigateByUrl('/actividades');

   });  
  }
}
