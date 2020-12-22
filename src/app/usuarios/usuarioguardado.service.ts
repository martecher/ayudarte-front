import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuardadoService {

  private _token: string = null;
  private _nombreUsuario: string = null;
  private _tipoToken: string = null;

  constructor() { }

  setToken(token: string) {
    this._token = token;
  }

  getToken() {
    return this._token;
  }

  setNombreUsuario(nombreUsuario: string) {
    this._nombreUsuario = nombreUsuario;
  }

  getNombreUsuario() {
    return this._nombreUsuario;
  }

  setTipoToken(tipoToken: string) {
    this._tipoToken = tipoToken;
  }

  getTipoToken() {
    return this._tipoToken;
  }


  isLoggedIn() {
    console.log("isLoggedIn()");
    console.log(this.getToken());
    return this.getToken() != null;
  }

  logOut(){
    this.setToken(null);
    this.setNombreUsuario(null);
  }
}
