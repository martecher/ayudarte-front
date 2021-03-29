import { Component, OnInit } from '@angular/core';
import { UsuariosService } from "../../servicios/usuarios.service";
import { Router } from '@angular/router';
import { UsuarioGuardadoService } from "../../servicios/usuarioguardado.service";


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
      private router: Router, 
      private usuarioGuardadoService: UsuarioGuardadoService, 
      public usuarioService: UsuariosService
      ) { }

  ngOnInit(): void {
    this.usuarioGuardadoService.logOut();
    this.router.navigateByUrl('/home');
  }

}
