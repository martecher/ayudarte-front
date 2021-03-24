import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { ActividadComponent }       from '../../pages/actividad/actividad.component';
import { NuevaActividadComponent }       from '../../pages/nueva-actividad/nueva-actividad.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'panel',      component: DashboardComponent },
    { path: 'usuario',           component: UserComponent },
    { path: 'actividades',          component: TableComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'actividad/:id/:operacion',        component: ActividadComponent },
    { path: 'nueva-actividad',        component: NuevaActividadComponent},
];
