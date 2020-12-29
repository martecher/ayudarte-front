import { Component, OnInit } from '@angular/core';
import { UsuariosService } from "../../usuarios/usuarios.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private router: Router, public usuarioService: UsuariosService) {}

  ngOnInit(): void {
  }

  login() {
    const usuario = {email: this.email, password: this.password};
    this.usuarioService.login(usuario).subscribe( data => {
      console.log("LoginComponent.login() data");
      console.log(data);
      if(data.status_code===200){

        this.router.navigateByUrl('/dashboard');
      }else{
        this.router.navigateByUrl('/login');
      }
    });
  }

}
