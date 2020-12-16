import { Component, OnInit } from '@angular/core';
import { UsuariosService } from "../usuarios/usuarios.service";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  email: string;
  password: string;
  confirmPassword: string;

  constructor(public usuarioService: UsuariosService) {}

  registro() {
    const usuario = { email: this.email, password: this.password };
    this.usuarioService.registro(usuario).subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit(): void {
  }

}
