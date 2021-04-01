import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../servicios/usuarios.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-ranking-usuarios',
  templateUrl: './ranking-usuarios.component.html',
  styleUrls: ['./ranking-usuarios.component.css']
})
export class RankingUsuariosComponent implements OnInit {
  private rankingUsuarios : Usuario[];
  constructor(
        private usuariosService: UsuariosService,

  ) { }

  ngOnInit(): void {
    console.log("RankingUsuariosComponent.ngOnInit: ")  ;
    this.usuariosService.getRanking$().subscribe( data => {
//      console.log("RankingUsuariosComponent.ngOnInit: "+ JSON.stringify(data))  ;
      this.rankingUsuarios = data;
      console.log("RankingUsuariosComponent.ngOnInit: "+ JSON.stringify(this.rankingUsuarios))  ;

    });
  }

}
