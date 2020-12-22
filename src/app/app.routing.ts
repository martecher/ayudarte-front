import { Routes } from '@angular/router';
 

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { PublicoLayoutComponent } from './layouts/publico-layout/publico-layout.component';
import { AuthGuard } from './guardas/authGuard';

export const AppRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  {
    path: '',
    component: PublicoLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/publico-layout/publico-layout.module#PublicoLayoutModule'
      }
    ]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard], 
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]
  },
   
  {
    path: '**',
    redirectTo: 'home'
  },
]
