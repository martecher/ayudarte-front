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
          		this.usuarioGuardadoServicio.setNombreUsuario( resp.usuario );
          		this.usuarioGuardadoServicio.setTipoToken(resp.tipo_token);
              console.log("-----");
              console.log("Metodo login ");
          		console.log("Usuario guardado: ");
          		console.log(this.usuarioGuardadoServicio.getNombreUsuario());
              console.log(this.usuarioGuardadoServicio.getToken());
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
}