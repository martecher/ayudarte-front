import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../usuarios/usuarios.service';
import { UsuarioGuardadoService } from "../../usuarios/usuarioguardado.service";

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit{

  public nombre;

  constructor(
    public usuarioService: UsuariosService,
     public usuarioGuardado:UsuarioGuardadoService) { }

  ngOnInit(){
  	this.nombre =this.usuarioGuardado.getNombreUsuario();
  }
}
