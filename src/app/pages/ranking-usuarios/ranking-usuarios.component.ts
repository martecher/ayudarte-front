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
      this.usuariosService.rankingUsuarios().subscribe( data => {
     // console.log("RankingUsuariosComponent.ngOnInit data: "+ JSON.stringify(data))  ;
      if(data.status=="ok"){ 
        this.rankingUsuarios = data.data;
      //console.log("RankingUsuariosComponent.ngOnInit rankingUsuarios: "+ JSON.stringify(this.rankingUsuarios))  ;
      }
    });
  }

}
