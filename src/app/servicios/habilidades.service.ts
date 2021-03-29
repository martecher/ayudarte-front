// src/app/users/users.service.ts

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable,Subject } from 'rxjs';
import {UsuarioGuardadoService} from './usuarioguardado.service';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { Habilidad } from '../models/habilidad';
import { environment } from "environments/environment";


@Injectable({
  providedIn: "root"
})
export class HabilidadesService {

  private habilidades: Habilidad[];
  private habilidades$: Subject<Habilidad[]>;


  constructor(private http: HttpClient , private usuarioGuardadoServicio:UsuarioGuardadoService) {
//    console.log("HabilidadesService.constructor");
    this.habilidades = [];
    this.habilidades$ = new Subject();
    this.leerlistado(0); 
   
  }

  leerlistado(idCategoria){
//    console.log("HabilidadesService.leerlistado ");    
    this.listaHabilidadesCategoria(idCategoria).subscribe( data => {
      this.habilidades = data.data;
//      console.log("HabilidadesService.leerlistado  = "+JSON.stringify(this.habilidades));
      this.habilidades$.next(this.habilidades);
     });
  }

    listaHabilidadesCategoria(id): Observable<any> {
//    console.log("HabilidadesService.listaHabilidades ");    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.usuarioGuardadoServicio.getToken()}`
    })
    return this.http.get(environment.ipBackend + "/api/habilidades/categoria/"+id, { headers: headers })
  }
  listaHabilidades(): Observable<any> {
//    console.log("HabilidadesService.listaHabilidades ");    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.usuarioGuardadoServicio.getToken()}`
    })
    return this.http.get(environment.ipBackend + "/api/habilidades", { headers: headers })
  }

  getHabilidad(id): Observable<any> {
//    console.log("HabilidadesService.getHabilidad ");    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.usuarioGuardadoServicio.getToken()}`
    })
    return this.http.get(environment.ipBackend + "/api/habilidades/"+id, { headers: headers })
  } 
  
  actualizarHabilidad( id, descripcion, horasEstipuladas): Observable<any> {
//    console.log("HabilidadesService.actualizarHabilidad ");    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.usuarioGuardadoServicio.getToken()}`
    })
    const body = { 
      descripcion: descripcion,
      horasEstipuladas:horasEstipuladas
   };
    return this.http.put(environment.ipBackend + "/api/habilidades/"+id, body,  { headers: headers })
  }

  nuevaHabilidad(descripcion, horasEstipuladas, categoria): Observable<any> {
//    console.log("HabilidadesService.nuevaHabilidad ");
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.usuarioGuardadoServicio.getToken()}`
    })
    const body = { 
      descripcion: descripcion,
      horasEstipuladas: horasEstipuladas,
		  categoria_Habilidad_id: categoria
   };
   let respuesta = this.http.post(environment.ipBackend + "/api/habilidades/", body,  { headers: headers })
   return respuesta;
  }

  getHabilidades$(): Observable<Habilidad[]>{
//    console.log("CategoriaHabilidadesService.getCategorias$ ");
    return this.habilidades$.asObservable();
  }
}