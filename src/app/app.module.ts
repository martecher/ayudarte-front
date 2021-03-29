import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';       
import { FormsModule } from "@angular/forms";

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';



import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { PublicoLayoutComponent } from './layouts/publico-layout/publico-layout.component';
import { HabilidadComponent } from './pages/habilidad/habilidad.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { NuevaActividadComponent } from './pages/nueva-actividad/nueva-actividad.component';
import { RankingUsuariosComponent } from './pages/ranking-usuarios/ranking-usuarios.component';
import { LogoutComponent } from './pages/logout/logout.component';
//import { ActividadComponent } from './pages/actividad/actividad.component';
 

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    PublicoLayoutComponent,
    HabilidadComponent,
    CategoriaComponent,
    NuevaActividadComponent,
    RankingUsuariosComponent,
    LogoutComponent,
//    ActividadComponent 
 
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
