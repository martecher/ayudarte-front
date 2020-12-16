import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from './usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(private router: Router, public usuarioService: UsuariosService) { }

  ngOnInit(): void {
  }

  navegarHaciaHabilidades(){
		this.router.navigate(['/habilidades']);
	}
}
