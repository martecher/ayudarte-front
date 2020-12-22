import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PublicoLayoutRoutes } from './publico-layout.routing';

import { HomeComponent } from '../../pages/home/home.component';
import { MisionComponent } from '../../pages/mision/mision.component';
import { LoginComponent } from '../../pages/login/login.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PublicoLayoutRoutes),
    FormsModule,
    NgbModule
  ],
  declarations: [
    HomeComponent,
    MisionComponent,
    LoginComponent
  ]
})

export class PublicoLayoutModule {}
