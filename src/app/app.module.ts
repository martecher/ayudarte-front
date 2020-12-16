import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ActividadesComponent } from './actividades/actividades.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { HomeComponent } from './home/home.component';
import { HomePrivadoComponent } from './home-privado/home-privado.component';
import { MisionComponent } from './mision/mision.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    HabilidadesComponent,
    ActividadesComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent,
    HomePrivadoComponent,
    MisionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
