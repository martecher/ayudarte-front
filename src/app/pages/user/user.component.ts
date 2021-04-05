import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../servicios/usuarios.service';
import { UsuarioGuardadoService } from "../../servicios/usuarioguardado.service";
import { Usuario } from '../../models/usuario';
import { TareasService } from "../../servicios/tareas.service";
import { Router } from '@angular/router';
import { ActividadesRealizadas } from "../../models/actividadesRealizadas";

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit{

  public usuario:Usuario;
  public tareas: number;
  public horas: string;
  public valoracion: string;
  public tSolicitadas: number;
  public tRealizadas: number;
  public listaTareasAsignadasPropias: ActividadesRealizadas[];
  public listaTareasNoAsignadas: ActividadesRealizadas[];
  constructor(
    public router: Router,
    public usuarioGuardado:UsuarioGuardadoService,
    public tareasService:TareasService,
    public usuarioService: UsuariosService,
    
    ) { 

     }

  ngOnInit(){ 
  
    this.horas =this.usuarioGuardado.getBolsaHora();
    this.valoracion =this.usuarioGuardado.getReputacion();

    this.tareasService.solicitadasPorUsuario(this.usuarioGuardado.getToken(),this.usuarioGuardado.getUsuarioId()).subscribe( data => {
      this.listaTareasNoAsignadas = data.data;
      this.tSolicitadas = this.listaTareasNoAsignadas.length;
      this.tareasService.realizadasPorUsuario(this.usuarioGuardado.getToken(),this.usuarioGuardado.getUsuarioId()).subscribe( data => {
            this.listaTareasAsignadasPropias = data.data;
            this.tRealizadas = this.listaTareasAsignadasPropias.length;
            this.tareas = this.tSolicitadas + this.tRealizadas;
      });
  });
     
  }
}
