// src/app/users/users.service.ts

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable,Subject } from 'rxjs';
import {UsuarioGuardadoService} from './usuarioguardado.service';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { CategoriaHabilidad } from '../models/categoriaHabilidad';


@Injectable({
  providedIn: "root"
})
export class CategoriaHabilidadesService {

  private categorias: CategoriaHabilidad[];
  private categorias$: Subject<CategoriaHabilidad[]>;

  
  constructor(private http: HttpClient , private usuarioGuardadoServicio:UsuarioGuardadoService) {
    // this.categorias NO SE deberia inicializar a vacio
    // deberia hacerse una lectura de bd
    this.categorias = [];
    this.categorias$ = new Subject();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.usuarioGuardadoServicio.getToken()}`
    })
    this.leerlistado();

     
  }
  leerlistado(){
    this.listaCategoriaHabilidades().subscribe( data => {
      this.categorias = data.data;
      console.log("CategoriaHabilidadesService.leerlistado  = "+JSON.stringify(this.categorias));
      this.categorias$.next(this.categorias);
      // hay que meter esto en un observable para poder cargar esta lista
      // automaticamente cuando de de alta la categoria
     });
  }

  listaCategoriaHabilidades(): Observable<any> {
    
    console.log("CategoriaHabilidadesService.listaCategoriaHabilidades antes de hacer llamada: " +  JSON.stringify(this.categorias) );

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.usuarioGuardadoServicio.getToken()}`
    })
    let respuesta = this.http.get("http://127.0.0.1:8000/api/categoriasHabilidades", { headers: headers });
     //actualizar el array this.categorias con lo que traigo de bd
    //convirtiendo la respuesta al tipo CategoriaHabilidades
  //  var myJSON = JSON.stringify(respuesta);
  //  console.log("CategoriaHabilidadesService.listaCategoriaHabilidades respuesta: " +  myJSON );
    // No puedo hacer la asignación directamente entre respuesta y categorias
    //lo haré con un for o alguna forma así o puede que no haga falta nada y ya
    //directamente lo muestre ya que insertar nueva categoria
    //llama a que se actualice este metodo
    //y los que esten subscritos se enteren.
    return respuesta;
  }

  getCategoriaHabilidad( id): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.usuarioGuardadoServicio.getToken()}`
    })
    return this.http.get("http://127.0.0.1:8000/api/categoriasHabilidades/"+id, { headers: headers })
  } 
  
  actualizarCategoriaHabilidad( id, descripcion): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.usuarioGuardadoServicio.getToken()}`
    })
    const body = { 
      descripcion: descripcion
   };
   let respuesta = this.http.put("http://127.0.0.1:8000/api/categoriasHabilidades/"+id, body,  { headers: headers })
   this.leerlistado();

   return respuesta;
  }

  nuevaCategoriaHabilidad(descripcion): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.usuarioGuardadoServicio.getToken()}`
    })
    const body = { 
      descripcion: descripcion
   };
   let respuesta = this.http.put("http://127.0.0.1:8000/api/categoriasHabilidades/", body,  { headers: headers })
   this.leerlistado();   
   return respuesta;
  }

  getCategorias$(): Observable<CategoriaHabilidad[]>{
    return this.categorias$.asObservable();
  }
}