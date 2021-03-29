// src/app/users/users.service.ts

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
//import {UsuarioGuardadoService} from './usuarioguardado.service';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { environment } from "environments/environment";


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
    return this.http.get(environment.ipBackend + "/api/mensajesTarea/tarea/"+id, { headers: headers })
  }

  marcarLeidosMensajesTarea(auth_token, id): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.http.put(environment.ipBackend + "/api/mensajes/tarea/marcarleidos/"+id, { headers: headers })
  }

  nuevoMensaje(auth_token, texto, idUsuarioEnvia, idUsuarioRecibe, idTarea, orden): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    });
    const body = { 
      tarea_id: idTarea,
      texto:texto,
      leido: 0,
      usuarioEnvia_id: idUsuarioEnvia,
      usuarioRecibe_id:idUsuarioRecibe,
      orden: orden
   };
 
    
    /*        
&usuarioRecibe_id="+idUsuarioRecibe
    */
    return this.http.post(environment.ipBackend + "/api/mensajes" , body, { headers: headers })
  }
  


}