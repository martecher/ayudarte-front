// src/app/users/users.service.ts

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
//import {UsuarioGuardadoService} from './usuarioguardado.service';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';


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

  asignarTarea(auth_token, idTarea, idUsuario): Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    
    return this.http.put("http://127.0.0.1:8000/api/actividadesRealizadas/"+idTarea+"/usuarioId/"+idUsuario, { headers: headers})
  }


  finalizarTarea(auth_token, tarea): Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    
    return this.http.put("http://127.0.0.1:8000/api/actividadesRealizadas/"+tarea.id+"?finalizada=1&puntuacionSolicita="+tarea.puntuacionSolicita+"&horasReales="+tarea.horasReales, { headers: headers})
  }

  actividadNombre(auth_token, nombre,valor): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.http.get("http://127.0.0.1:8000/api/actividadesRealizadas/actividadNombre/"+nombre+"/finalizada/"+valor, { headers: headers})
  }

  nuevaActividad(auth_token,observacion,usuarioSolicita_id,habilidad_id): Observable<any> {
   // console.log("TareasService.nuevaActividad ");
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    const body = { 
      observacion: observacion,
      usuarioSolicita_id: usuarioSolicita_id,
      habilidad_id: habilidad_id
   };
   let respuesta = this.http.post("http://127.0.0.1:8000/api/actividadesRealizadas/", body,  { headers: headers })
   return respuesta;
  }
}