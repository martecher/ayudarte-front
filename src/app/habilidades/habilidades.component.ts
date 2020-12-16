import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegarHaciaUsuarios(){
	this.router.navigate(['/usuarios']);
  }
}
