// src/app/users/users.service.ts

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable,Subject } from 'rxjs';
import {UsuarioGuardadoService} from './usuarioguardado.service';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { environment } from "environments/environment";


@Injectable({
  providedIn: "root"
})
export class UsuariosService {

  private usuariosRanking: Usuario[];
  private usuariosRanking$: Subject<Usuario[]>;

  constructor(private http: HttpClient , private usuarioGuardadoServicio:UsuarioGuardadoService) {
    console.log("UsuariosService.constructor")
    this.usuariosRanking = [];
    this.usuariosRanking$ = new Subject();
    this.leerRanking(); 

  }

  leerRanking(){
    this.rankingUsuarios().subscribe( data => {
      this.usuariosRanking = data.data;
 //     console.log("CategoriaHabilidadesService.leerlistado  = "+JSON.stringify(this.categorias));
      this.usuariosRanking$.next(this.usuariosRanking);
      // hay que meter esto en un observable para poder cargar esta lista
      // automaticamente cuando de de alta la categoria
     });
  }

  login(user: any): Observable<any> {
    return this.http.
    	post( environment.ipBackend + "/api/login", user).
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
              
              localStorage.setItem('token_acceso', resp.token_acceso);
               
              console.log("-----");
              console.log("UsuariosService.login()");
          		console.log("Usuario guardado: " +  resp.token_acceso);
//          		console.log(this.usuarioGuardadoServicio.toString());
              console.log("-----");
               
              return resp;
        	})
      );
  }

  registro(user: any): Observable<any> {
    return this.http.post(environment.ipBackend + "/api/register", user);
  }


  listaUsuarios(auth_token): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.http.get(environment.ipBackend + "/api/usuarios", { headers: headers })
  }

  rankingUsuarios(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.usuarioGuardadoServicio.getToken()}`
    }) 
    return this.http.get(environment.ipBackend + "/api/rankingUsuarios", { headers: headers })
  }

  getUsuario(auth_token, id): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.http.get(environment.ipBackend + "/api/usuarios/"+id, { headers: headers })
  }
  actualizarValoracionUsuario(auth_token, id, numeroVotaciones, reputacionSolicita, horas,nVotos5, nVotos4, nVotos3, nVotos2, nVotos1): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    const body = { 
      numeroVotaciones: numeroVotaciones,
      reputacion:reputacionSolicita,
      bolsaHora:horas,     
      numVotos5:nVotos5, 
      numVotos4:nVotos4, 
      numVotos3:nVotos3, 
      numVotos2:nVotos2, 
      numVotos1:nVotos1
   };

    return this.http.put(environment.ipBackend + "/api/usuarios/updateNoPass/"+id, body,  { headers: headers })
  }

  getRanking$(): Observable<Usuario[]>{
    //   console.log("CategoriaHabilidadesService.getCategorias$ ");
       return this.usuariosRanking$.asObservable();
     }
}