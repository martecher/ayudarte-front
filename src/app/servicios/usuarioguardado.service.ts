import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuardadoService {

  private _token: string = null;
  private _nombreUsuario: string = null;
  private _nombre: string = null;
  private _apellido1: string = null;
  private _apellido2: string = null;
  private _fechaNacimiento: string = null;
  private _exento: string = null;
  private _bolsaHora: string = null;
  private _reputacion: string = null;
  private _administrador: string = null;
  private _email: string = null;
  private _usuario_id: string = null;
  private _numeroVotaciones: string = null;

  private _tipoToken: string = null;

  constructor() { }

  setToken(token: string) {
    this._token = token;
  }

  getToken() {
    let token_acceso = localStorage.getItem('token_acceso');
    return token_acceso;
    //return this._token;
  }

  setNombreUsuario(nombreUsuario: string) {
    this._nombreUsuario = nombreUsuario;
    localStorage.setItem('_nombreUsuario', this._nombreUsuario);
  }

  getNombreUsuario() {
    //return this._nombreUsuario;
    return   localStorage.getItem('_nombreUsuario');

  }

  setNombre(nombre: string) {
    this._nombre = nombre;
     localStorage.setItem('_nombre', this._nombre);
  }

  getNombre() {
    //return this._nombre;
    return   localStorage.getItem('_nombre');

  }

  setApellido1(apellido1: string) {
    this._apellido1 = apellido1;
    localStorage.setItem('_apellido1', this._apellido1);

  }

  getApellido1() {
    //return this._apellido1;
    return   localStorage.getItem('_apellido1');

  }

  setApellido2(apellido2: string) {
    this._apellido2 = apellido2;
    localStorage.setItem('_apellido2', this._apellido2);

  }

  getApellido2() {
   // return this._apellido2;
   return   localStorage.getItem('_apellido2');

  }

  setFechaNacimiento(fechaNacimiento: string) {
    this._fechaNacimiento = fechaNacimiento;
  }

  getFechaNacimiento() {
    return this._fechaNacimiento;
  }

  setExento(exento: string) {
    this._exento = exento;
  }

  getExento() {
    return this._exento;
  }

  setBolsaHora(bolsaHora: string) {
    this._bolsaHora = bolsaHora;
    localStorage.setItem('_bolsaHora', this._bolsaHora);

  }

  getBolsaHora() {
    return  localStorage.getItem('_bolsaHora');
    
  }

  setReputacion(reputacion: string) {
    this._reputacion = reputacion;
    localStorage.setItem('_reputacion', this._reputacion);
  }

  getReputacion() {
    return  localStorage.getItem('_reputacion');

  }

  setAdministrador(administrador: string) {
    this._administrador = administrador;
  }

  getAdministrador() {
    return this._administrador;
  }

  setEmail(email: string) {
    this._email = email;
  }

  getEmail() {
    return this._email;
  }

  setTipoToken(tipoToken: string) {
    this._tipoToken = tipoToken;
  }

  getTipoToken() {
    return this._tipoToken;
  }

  setUsuarioId(id: string) {
    this._usuario_id = id;
     localStorage.setItem('idUsuario', this._usuario_id);

  }

  getUsuarioId() {
    return   localStorage.getItem('idUsuario');
     
  }

  setNumeroVotaciones(numeroVotaciones: string) {
    this._numeroVotaciones = numeroVotaciones;
    localStorage.setItem('_numeroVotaciones', this._numeroVotaciones);

  }

  getNumeroVotaciones() {
    return localStorage.getItem('_numeroVotaciones');
  }

  isLoggedIn() {
    console.log("UsuarioGuardadoService.isLoggedIn()");
    let token_acceso = localStorage.getItem('token_acceso');
    console.log(token_acceso);

    return token_acceso != null;
//    return this.getToken() != null;
  }

  logOut(){
    this.setToken(null);
    this.setNombreUsuario(null);
    localStorage.removeItem('token_acceso');
  }

  toString(){
    /*
    console.log("UsuarioGuardadoService.toString()");
    console.log("_token: "+this. getToken());
    console.log("_nombreUsuario: "+this. getNombreUsuario());
    console.log("_nombre: "+this. getNombre());
    console.log("_apellido1: "+this. getApellido1());
    console.log("_apellido2: "+this. getApellido2());
    console.log("_fechaNacimiento: "+this. getFechaNacimiento());
    console.log("_exento: "+this. getExento());
    console.log("_bolsaHora: "+this. getBolsaHora());
    console.log("_reputacion: "+this. getReputacion());
    console.log("_administrador: "+this. getAdministrador());
    console.log("_email: "+this. getEmail());
    console.log("_id: "+this. getUsuarioId());
    console.log("_tipoToken: "+this. getTipoToken());
    console.log("_numeroVotaciones: "+this. getNumeroVotaciones());
*/

  }

}
