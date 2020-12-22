import { Routes } from '@angular/router';

import { HomeComponent } from '../../pages/home/home.component';
import { MisionComponent } from '../../pages/mision/mision.component';
import { LoginComponent } from '../../pages/login/login.component';


export const PublicoLayoutRoutes: Routes = [
    { path: 'home',      component: HomeComponent },
    { path: 'mision',    component: MisionComponent },
    { path: 'login',    component: LoginComponent }

];
