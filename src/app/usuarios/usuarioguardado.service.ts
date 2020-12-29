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

  setNombre(nombre: string) {
    this._nombre = nombre;
  }

  getNombre() {
    return this._nombre;
  }

  setApellido1(apellido1: string) {
    this._apellido1 = apellido1;
  }

  getApellido1() {
    return this._apellido1;
  }

  setApellido2(apellido2: string) {
    this._apellido2 = apellido2;
  }

  getApellido2() {
    return this._apellido2;
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
  }

  getBolsaHora() {
    return this._bolsaHora;
  }

  setReputacion(reputacion: string) {
    this._reputacion = reputacion;
  }

  getReputacion() {
    return this._reputacion;
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
  }

  getUsuarioId() {
    return this._usuario_id;
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

  toString(){
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
  }

}
