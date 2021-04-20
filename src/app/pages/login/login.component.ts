import { Component, OnInit } from '@angular/core';
import { UsuariosService } from "../../servicios/usuarios.service";
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

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
//      console.log("LoginComponent.login() data");
//      console.log(data);
      if(data.status_code===200){
        //guardamos en local storage
        this.router.navigateByUrl('/panel');
      }else{
        Swal.fire("Los datos introducidos no son correctos", " ", "error");
        this.router.navigateByUrl('/login');
      }
    });
  }

}
