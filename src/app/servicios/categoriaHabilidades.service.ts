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
  }


  listaCategoriaHabilidades(auth_token): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    let respuesta = this.http.get("http://127.0.0.1:8000/api/categoriasHabilidades", { headers: headers });
    this.categorias = [];
    //actualizar el array this.categorias con lo que traigo de bd
    //convirtiendo la respuesta al tipo CategoriaHabilidades
    var myJSON = JSON.stringify(respuesta);
    console.log("CategoriaHabilidadesService.listaCategoriaHabilidades respuesta: " +  myJSON )
    this.categorias$.next(this.categorias);
    return respuesta;
  }

  getCategoriaHabilidad(auth_token, id): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.http.get("http://127.0.0.1:8000/api/categoriasHabilidades/"+id, { headers: headers })
  } 
  
  actualizarCategoriaHabilidad(auth_token, id, descripcion): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    const body = { 
      descripcion: descripcion
   };
   let respuesta = this.http.put("http://127.0.0.1:8000/api/categoriasHabilidades/"+id, body,  { headers: headers })
   this.listaCategoriaHabilidades(auth_token);
   
   return respuesta;
  }

  nuevaCategoriaHabilidad(auth_token,descripcion): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    const body = { 
      descripcion: descripcion
   };
   let respuesta = this.http.put("http://127.0.0.1:8000/api/categoriasHabilidades/", body,  { headers: headers })
   this.listaCategoriaHabilidades(auth_token);    
   return respuesta;
  }

  getCategorias$(): Observable<CategoriaHabilidad[]>{
    return this.categorias$.asObservable();
  }
}