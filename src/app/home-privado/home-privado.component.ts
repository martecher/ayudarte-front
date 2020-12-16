import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../usuarios/usuarios.service';
import { UsuarioGuardadoService } from "../usuarios/usuarioguardado.service";

@Component({
  selector: 'app-home-privado',
  templateUrl: './home-privado.component.html',
  styleUrls: ['./home-privado.component.css']
})
export class HomePrivadoComponent implements OnInit {

  constructor(private router: Router,
  	public usuarioService: UsuariosService,
  	 public usuarioGuardado:UsuarioGuardadoService) { }

  ngOnInit(): void {
    this.usuarioService.listaUsuarios(this.usuarioGuardado.getToken()).subscribe( data => {
      console.log("lista usuarios");
      console.log(data.data);

    });
  }

  getUsuarioLogado() {
      console.log(this.usuarioGuardado.getNombreUsuario());
  }

  navegarHaciaHabilidades(){
		this.router.navigate(['/habilidades']);
	}

	logOut(){
	 console.log("----------");
	 console.log("logOut");
	 console.log("----------");
	 this.usuarioGuardado.getNombreUsuario()
	 this.router.navigate(['/home']);
	}
}
