import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators, FormBuilder } from '@angular/forms';
import { HabilidadesService } from '../../servicios/habilidades.service';
import { Habilidad } from "../../models/Habilidad";
import { CategoriaHabilidad } from "../../models/categoriaHabilidad";
import { CategoriaHabilidadesService } from '../../servicios/categoriaHabilidades.service';

@Component({
  selector: 'app-nueva-actividad',
  templateUrl: './nueva-actividad.component.html',
  styleUrls: ['./nueva-actividad.component.css']
})
export class NuevaActividadComponent implements OnInit {

  public nuevaActividadForm: FormGroup;
  habilidades: any = ['Habiliad 1', 'habiliad 2', 'habilidad 3', 'habilidad 4'];
  habilidadesObjet: Habilidad[] = [];
  categoriasObjet: CategoriaHabilidad[] = [];


  constructor(
    private categoriaHabilidadesService: CategoriaHabilidadesService,
    private fb: FormBuilder,
    private habilidadesService: HabilidadesService

  ) { }

  ngOnInit(): void {
    console.log("NuevaActividadComponent.ngOnInit"); 
    this.categoriaHabilidadesService.leerlistado();    
    this.categoriaHabilidadesService.getCategorias$().subscribe( data => {
      this.categoriasObjet = data;
       console.log("HabilidadComponent.ngOnInit  = "+JSON.stringify(this.categoriasObjet));

      this.habilidadesService.getHabilidades$().subscribe( data => {
        this.habilidadesObjet = data;
        console.log("NuevaActividadComponent.ngOnInit  = "+JSON.stringify(this.habilidadesObjet));
        // hay que meter esto en un observable para poder cargar esta lista
        // automaticamente cuando de de alta la categoria
        this.createForm();
    });
  });
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
      descripcion: new FormControl(),
      horasEstipuladas: new FormControl(),
      categoria_ID: new FormControl(this.categoriasObjet[3])
      });
  }

  /*
  changeClassesLevel(id: number) {
    console.log("Hit");
    console.log(id);
  }
*/
 
  onChangeCategoriaActividad(idActividad: number){
    console.log("NuevaActividadComponent.onChangeActividad");
    this.habilidadesService.leerlistado(idActividad);
      this.habilidadesService.getHabilidades$().subscribe( data => {
      this.habilidadesObjet = data;
      console.log("NuevaActividadComponent.onChangeActividad  = "+JSON.stringify(this.habilidadesObjet));
      // hay que meter esto en un observable para poder cargar esta lista
 
  });   
  }
   

  guardarActividad(){
    console.log("NuevaActividadComponent.guardarActividad");
  }
}
