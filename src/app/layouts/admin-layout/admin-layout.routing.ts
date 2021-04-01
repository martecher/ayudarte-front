import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';

import { IconsComponent } from '../../pages/icons/icons.component';


import { ActividadComponent }       from '../../pages/actividad/actividad.component';
import { NuevaActividadComponent }       from '../../pages/nueva-actividad/nueva-actividad.component';
import { RankingUsuariosComponent }       from '../../pages/ranking-usuarios/ranking-usuarios.component';
import { LogoutComponent }       from '../../pages/logout/logout.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'panel',      component: DashboardComponent },
    { path: 'usuario',           component: UserComponent },
    { path: 'actividades',          component: TableComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'actividad/:id/:operacion',        component: ActividadComponent },
    { path: 'nueva-actividad',        component: NuevaActividadComponent},
    { path: 'rankingUsuarios',        component: RankingUsuariosComponent},
    { path: 'logout',        component: LogoutComponent},
    
];
