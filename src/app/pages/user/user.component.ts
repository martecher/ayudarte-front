import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../servicios/usuarios.service';
import { UsuarioGuardadoService } from "../../servicios/usuarioguardado.service";
import { Usuario } from '../../models/usuario';
import { TareasService } from "../../servicios/tareas.service";
import { Router } from '@angular/router';
import { ActividadesRealizadas } from "../../models/actividadesRealizadas";
import { FormControl, FormGroup,Validators, FormBuilder } from '@angular/forms';
import { HabilidadesService } from '../../servicios/habilidades.service';
import { Habilidad } from "../../models/Habilidad";
import { CategoriaHabilidad } from "../../models/categoriaHabilidad";
import { CategoriaHabilidadesService } from '../../servicios/categoriaHabilidades.service';
import Swal from 'sweetalert2'

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit{

  idActividadSelect;
  idHabilidadSelect; 
  public actualizarUsuarioForm: FormGroup;
  public habilidadForm: FormGroup;

  public usuario:Usuario;
  public usuario2:Usuario;
  public tareas: number;
  public horas: string;
  public valoracion: string;
  public tSolicitadas: number;
  public tRealizadas: number;
  public listaTareasAsignadasPropias: ActividadesRealizadas[];
  public listaTareasNoAsignadas: ActividadesRealizadas[];
  public urlImagen: string;
  habilidadesObjet2: Habilidad[] = [];
  categoriasObjet2: CategoriaHabilidad[] = [];
  habilidadesObjet: Habilidad[] = [];

  constructor(
    public router: Router,
    public usuarioGuardado:UsuarioGuardadoService,
    public tareasService:TareasService,
    public usuarioService: UsuariosService,
    private fb: FormBuilder,   
    private categoriaHabilidadesService: CategoriaHabilidadesService,
    private habilidadesService: HabilidadesService,

    ) { 

     }

  ngOnInit(){ 
    this.usuario = {} as Usuario;
    this.horas =this.usuarioGuardado.getBolsaHora();
    this.usuario.bolsaHora =  this.horas;
    this.valoracion =this.usuarioGuardado.getReputacion();
    this.usuario.usuario_id = Number(this.usuarioGuardado.getUsuarioId());
    this.usuario.reputacion = this.valoracion;
    this.usuario.nombre = this.usuarioGuardado.getNombre();
    this.usuario.apellido1 = this.usuarioGuardado.getApellido1();
    this.usuario.apellido2 = this.usuarioGuardado.getApellido2();
    this.usuario.fechaNacimiento = this.usuarioGuardado.getFechaNacimiento();
    this.usuario.email = this.usuarioGuardado.getEmail();
    this.usuario.fechaNacimiento = this.usuarioGuardado.getFechaNacimiento();
    this.usuario.sobreMi= this.usuarioGuardado.getSobreMi();
//    console.log("UserComponent.ngOnInit: "+this.usuario.fechaNacimiento);
    this.createForm();

    this.tareasService.solicitadasPorUsuario(this.usuarioGuardado.getToken(),this.usuarioGuardado.getUsuarioId()).subscribe( data => {
      this.listaTareasNoAsignadas = data.data;
      this.tSolicitadas = this.listaTareasNoAsignadas.length;
      this.tareasService.realizadasPorUsuario(this.usuarioGuardado.getToken(),this.usuarioGuardado.getUsuarioId()).subscribe( data => {
            this.listaTareasAsignadasPropias = data.data;
            this.tRealizadas = this.listaTareasAsignadasPropias.length;
            this.tareas = this.tSolicitadas + this.tRealizadas;
      });
    });

    this.categoriaHabilidadesService.leerlistado();    
    this.categoriaHabilidadesService.getCategorias$().subscribe( data => {
      this.categoriasObjet2 = data;
      this.habilidadesService.getHabilidades$().subscribe( data => {
        this.habilidadesObjet2 = data;
      });
    });

    this.usuarioService.getUsuario(this.usuarioGuardado.getToken(),this.usuario.usuario_id).subscribe( data => {
//      console.log("UserComponent ngOnInit() getUsuario: "+ JSON.stringify( data.data));
      this.habilidadesObjet =data.data.habilidades;
      console.log("UserComponent ngOnInit() this.habilidadesObjet: "+ JSON.stringify( this.habilidadesObjet));
      
    });

     
    this.createForm2();
  }

  createForm2() {
    console.log("CategoriaComponent.createForm");
    this.habilidadForm = new FormGroup({
      descripcionTarea: new FormControl( null, [ Validators.required, Validators.minLength(4)]),
      categoria_ID2: new FormControl( null, [ Validators.required] ), 
      habilidad_ID2: new FormControl( null, [ Validators.required] )     
      });
  }

  createForm() {
    /* 
  nombre: string;
  apellido1: string;
  apellido2: string;
  fechaNacimiento: string;
  email: string;
  password: string;
  */

    this.actualizarUsuarioForm = this.fb.group({
        nombre: [this.usuario.nombre,[Validators.required]],
        apellido1: [this.usuario.apellido1  ,[Validators.required]],
        apellido2: [this.usuario.apellido2,[Validators.required]],
        fechaNacimiento: [this.usuario.fechaNacimiento,[Validators.required]],     
        email: [this.usuario.email,[Validators.required]],
        sobreMi: [this.usuario.sobreMi,[Validators.required]],
       });
  }

  onChangeCategoriaActividad(idActividad: number){
          this.habilidadesService.leerlistado(idActividad);
          this.habilidadesService.getHabilidades$().subscribe( data => {
          this.habilidadesObjet2 = data;
          this.idActividadSelect = idActividad;
      });   
      }

  guardarUsuario(){
    console.log("UserComponent.guardarUsuario");
    console.log("UserComponent.guardarUsuario  = "+JSON.stringify(this.actualizarUsuarioForm.value));
    if(this.actualizarUsuarioForm.valid){
  /*
       nombre
      apellido1
      apellido2
      fechaNacimiento
      email
      sobreMi
       */     
      this.usuarioService.actualizarUsuario(this.usuarioGuardado.getToken(),
      this.usuarioGuardado.getUsuarioId(), this.actualizarUsuarioForm.value.nombre,
      this.actualizarUsuarioForm.value.apellido1, this.actualizarUsuarioForm.value.apellido2,
      this.actualizarUsuarioForm.value.fechaNacimiento, this.actualizarUsuarioForm.value.email,
      this.actualizarUsuarioForm.value.sobreMi
      ).subscribe( data => {
          console.log("guardarUsuario data: " +JSON.stringify(data));
          this.usuarioGuardado.setNombre(this.actualizarUsuarioForm.value.nombre); 
          this.usuarioGuardado.setApellido1(this.actualizarUsuarioForm.value.apellido1); 
          this.usuarioGuardado.setApellido2(this.actualizarUsuarioForm.value.apellido2); 
          this.usuarioGuardado.setFechaNacimiento (this.actualizarUsuarioForm.value.fechaNacimiento); 
          this.usuarioGuardado.setEmail (this.actualizarUsuarioForm.value.email); 
          this.usuarioGuardado.setSobreMi (this.actualizarUsuarioForm.value.sobreMi); 
          
          Swal.fire("Usuario actualizado correctamente", " ", "success");
          this.ngOnInit();
          
        });     
    }else{
      Swal.fire("Errores en el formulario", "Revise los datos", "error");
    }
  }

  guardarHabilidad(){
    console.log("UserComponent.guardarHabilidad");
    console.log("UserComponent.guardarHabilidad  = "+JSON.stringify(this.habilidadForm.value));
 
    if(this.habilidadForm.valid){

    }else{
      Swal.fire("Errores en el formulario", "Revise los datos", "error");
    }
  }
}
