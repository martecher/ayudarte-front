import { Component, OnInit } from '@angular/core';
import { UsuariosService } from "../usuarios/usuarios.service";

import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, public usuarioService: UsuariosService

  	) { }

  ngOnInit(): void {
   }

}
