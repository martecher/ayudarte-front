// src/app/users/users.service.ts

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import {UsuarioGuardadoService} from './usuarioguardado.service';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: "root"
})
export class CategoriaHabilidadesService {
  constructor(private http: HttpClient , private usuarioGuardadoServicio:UsuarioGuardadoService) {}


  listaCategoriaHabilidades(auth_token): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.http.get("http://127.0.0.1:8000/api/categoriasHabilidades", { headers: headers })
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

    return this.http.put("http://127.0.0.1:8000/api/categoriasHabilidades/"+id, body,  { headers: headers })
  }
}