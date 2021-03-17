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
export class MensajesService {
  constructor(private http: HttpClient) {

  }

  listaMensajesTarea(auth_token, id): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.http.get("http://127.0.0.1:8000/api/mensajesTarea/tarea/"+id, { headers: headers })
  }

  marcarLeidosMensajesTarea(auth_token, id): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.http.get("http://127.0.0.1:8000/api/mensajes/tarea/marcarleidos/"+id, { headers: headers })
  }

  nuevoMensaje(auth_token, mensaje): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    //falta por implementar el body con los parametros y llamar al metodo correcto que 
    //aun no está programado en el api
    return this.http.get("http://127.0.0.1:8000/api/mensajes/tarea/marcarleidos/"+mensaje, { headers: headers })
  }
  


}