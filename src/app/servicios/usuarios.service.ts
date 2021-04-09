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
            //console.log("UsuariosService.login: "+  JSON.stringify(resp)  )
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
              this.usuarioGuardadoServicio.setSobreMi(resp.sobreMi);
             
              localStorage.setItem('token_acceso', resp.token_acceso);
               
//              console.log("-----");
//              console.log("UsuariosService.login()");
//           		console.log("Usuario guardado: " +  resp.token_acceso);
//          		console.log(this.usuarioGuardadoServicio.toString());
//              console.log("-----");
               
              return resp;
        	})
      );
  }

  registro(usuario: Usuario): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.usuarioGuardadoServicio.getToken()}`
    })
 
    /*
      nombre: string;
      apellido1: string;
      apellido2: string;
      fechaNacimiento: string;
      email: string;
      password: string;

   */
   
    const body = { 
      nombre: usuario.nombre,
      apellido1:usuario.apellido1,
      apellido2:usuario.apellido2,    
      fechaNacimiento:usuario.fechaNacimiento, 
      email:usuario.email, 
      password: usuario.password,
      exento:0,
      bolsaHora:0,
      reputacion:1,
      administrador:0,

   };
   console.log("UsuarioService.registro: "+ JSON.stringify(body));
    return this.http.post(environment.ipBackend + "/api/register", body,  { headers: headers })
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

  asignarDesasignarHabilidad(auth_token,idUsuario,idHabilidad,accion){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    }) 
    const body = { 
      idHabilidad: idHabilidad,
      accion:accion
   };
   return this.http.put(environment.ipBackend + "/api/habilidadesUsuarios/"+idUsuario, body, { headers: headers })
  }

  actualizarValoracionUsuario(auth_token, id, numeroVotaciones, reputacionSolicita, nVotos5, nVotos4, nVotos3, nVotos2, nVotos1): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    const body = { 
      numeroVotaciones: numeroVotaciones,
      reputacion:reputacionSolicita,
      numVotos5:nVotos5, 
      numVotos4:nVotos4, 
      numVotos3:nVotos3, 
      numVotos2:nVotos2, 
      numVotos1:nVotos1
   };

    return this.http.put(environment.ipBackend + "/api/usuarios/updateNoPass/"+id, body,  { headers: headers })
  }

  actualizarHorasUsuarios(auth_token,id,horas,signo){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    const body = { 
      horas: horas,
      signo:signo 
   };
    return this.http.put(environment.ipBackend + "/api/actualizarBolsa/"+id, body,  { headers: headers })
 }

  actualizarUsuario(auth_token, id, 
    nombre,
    apellido1,
    apellido2,
    fechaNacimiento,
    email,
    sobreMi
    ): Observable<any> {

      /*
      nombre
      apellido1
      apellido2
      fechaNacimiento
      email
      sobreMi
     
      */
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    const body = { 
      nombre: nombre,
      apellido1:apellido1,
      apellido2:apellido2,     
      fechaNacimiento:fechaNacimiento, 
      email:email, 
      sobreMi:sobreMi
   };

    return this.http.put(environment.ipBackend + "/api/usuarios/updateNoPass/"+id, body,  { headers: headers })
  }
  getRanking$(): Observable<Usuario[]>{
    //   console.log("CategoriaHabilidadesService.getCategorias$ ");
       return this.usuariosRanking$.asObservable();
     }
}