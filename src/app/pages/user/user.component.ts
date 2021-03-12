import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../servicios/usuarios.service';
import { UsuarioGuardadoService } from "../../servicios/usuarioguardado.service";

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
    this.usuarioService.getUsuario(this.usuarioGuardado.getToken(),this.usuarioGuardado.getUsuarioId()).subscribe( data => {
      console.log("-------");
      console.log("UserComponent.ngOnInit()");
      console.log(data.data);
      console.log("-------");
    });
  }
}
