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
export class UsuariosService {
  constructor(private http: HttpClient , private usuarioGuardadoServicio:UsuarioGuardadoService) {}

  login(user: any): Observable<any> {
    return this.http.
    	post("http://127.0.0.1:8000/api/login", user).
    	pipe(
        	map((resp: any) => {
          		this.usuarioGuardadoServicio.setToken( resp.token_acceso );
          		this.usuarioGuardadoServicio.setNombreUsuario( resp.nombreUsuario );
              this.usuarioGuardadoServicio.setNombre( resp.nombre );
              this.usuarioGuardadoServicio.setApellido1( resp.apellido1 );
              this.usuarioGuardadoServicio.setApellido2( resp.apellido2 );
              this.usuarioGuardadoServicio.setFechaNacimiento( resp.fechaNacimiento );
              this.usuarioGuardadoServicio.setExento( resp.exento );
              this.usuarioGuardadoServicio.setBolsaHora( resp.bolsaHora );
              this.usuarioGuardadoServicio.setReputacion( resp.reputacion );
              this.usuarioGuardadoServicio.setAdministrador( resp.administrador );
              this.usuarioGuardadoServicio.setEmail( resp.email );
              this.usuarioGuardadoServicio.setUsuarioId( resp.usuario_id );
          		this.usuarioGuardadoServicio.setTipoToken(resp.tipo_token);
              this.usuarioGuardadoServicio.setNumeroVotaciones(resp.numeroVotaciones);

              console.log("-----");
              console.log("UsuariosService.login()");
          		console.log("Usuario guardado: ");
          		console.log(this.usuarioGuardadoServicio.toString());
              console.log("-----");
              return resp;
        	})
      );
  }

  registro(user: any): Observable<any> {
    return this.http.post("https://reqres.in/api/register", user);
  }


  listaUsuarios(auth_token): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.http.get("http://127.0.0.1:8000/api/usuarios", { headers: headers })
  }

  getUsuario(auth_token, id): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.http.get("http://127.0.0.1:8000/api/usuarios/"+id, { headers: headers })
  }
  actualizarValoracionUsuario(auth_token, id, numeroVotaciones, reputacionSolicita, horas): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    const body = { 
      numeroVotaciones: numeroVotaciones,
      reputacion:reputacionSolicita,
      bolsaHora:horas
   };

    return this.http.put("http://127.0.0.1:8000/api/usuarios/updateNoPass/"+id, body,  { headers: headers })
  }
}