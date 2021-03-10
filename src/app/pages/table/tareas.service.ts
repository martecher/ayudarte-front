// src/app/users/users.service.ts

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
//import {UsuarioGuardadoService} from './usuarioguardado.service';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: "root"
})
export class TareasService {
  constructor(private http: HttpClient) {}



  listaTareasAsignadas(auth_token, estado): Observable<any> {
    // estado = 0 para no asignadas
    // estado = 1 para asignadas
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.http.get("http://127.0.0.1:8000/api/actividadesRealizadas/asignadas/"+estado, { headers: headers })
  }

    // estado = 0 para no finalizadas
    // estado = 1 para finalizadas
  listaTareasFinalizadas(auth_token, estado): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.http.get("http://127.0.0.1:8000/api/actividadesRealizadas/finalizadas/"+estado, { headers: headers })
  }


  actividadesEnRealizacion(auth_token, id): Observable<any> {
    // estado = 0 para no asignadas
    // estado = 1 para asignadas
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.http.get("http://127.0.0.1:8000/api/actividadesRealizadas/actividadesEnRealizacion/"+id, { headers: headers })
  }

  actividadesEnSolicitud(auth_token, id): Observable<any> {
    // estado = 0 para no asignadas
    // estado = 1 para asignadas
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.http.get("http://127.0.0.1:8000/api/actividadesRealizadas/actividadesEnSolicitud/"+id, { headers: headers })
  }

  actividadesEnTerminadas(auth_token, id): Observable<any> {
    // estado = 0 para no asignadas
    // estado = 1 para asignadas
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.http.get("http://127.0.0.1:8000/api/actividadesRealizadas/actividadesTerminadas/"+id, { headers: headers })
  }



  solicitadasPorUsuario(auth_token, id): Observable<any> {
    // estado = 0 para no asignadas
    // estado = 1 para asignadas
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.http.get("http://127.0.0.1:8000/api/actividadesRealizadas/solicitadasPorUsuario/"+id, { headers: headers })
  }

    realizadasPorUsuario(auth_token, id): Observable<any> {
    // estado = 0 para no asignadas
    // estado = 1 para asignadas
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.http.get("http://127.0.0.1:8000/api/actividadesRealizadas/realizadasPorUsuario/"+id, { headers: headers })
  }

  getTarea(auth_token, id): Observable<any> {
    // estado = 0 para no asignadas
    // estado = 1 para asignadas
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.http.get("http://127.0.0.1:8000/api/actividadesRealizadas/"+id, { headers: headers })
  }

  finalizarTarea(auth_token, tarea): Observable<any> {
    // estado = 0 para no asignadas
    // estado = 1 para asignadas
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.http.put("http://127.0.0.1:8000/api/actividadesRealizadas/"+id, { headers: headers })
  }
}