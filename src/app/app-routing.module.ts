import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { HomeComponent } from './home/home.component';
import { MisionComponent } from './mision/mision.component';
import { HomePrivadoComponent } from './home-privado/home-privado.component';
import { AuthGuard } from './guardas/authGuard';



const routes: Routes = [
	{path: '', redirectTo: '/home', pathMatch: 'full'},
	{ path: "login", component: LoginComponent, pathMatch: "full" },
	{ path: "registro", component: RegistroComponent, pathMatch: "full" },
	{path: 'home', component: HomeComponent, pathMatch: "full"},
	{path: 'mision', component: MisionComponent, pathMatch: "full"},
	{path: 'home-privado', component: HomePrivadoComponent, canActivate: [AuthGuard]},
	{path: 'usuarios', component: UsuariosComponent, canActivate: [AuthGuard]},
	{path: 'habilidades', component: HabilidadesComponent, canActivate: [AuthGuard]},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
