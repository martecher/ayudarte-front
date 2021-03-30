import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/panel',     title: 'Panel',         icon:'nc-bank',       class: '' },
    { path: '/usuario',          title: 'Cuenta Usuario',      icon:'nc-single-02',  class: '' },
    { path: '/actividades',         title: 'Actividades',        icon:'nc-tile-56',    class: '' },
    { path: '/rankingUsuarios',         title: 'Ranking Usuarios',        icon:'nc-user-run',    class: '' },
    { path: '/logout',         title: 'Salir',        icon:'nc-button-power',    class: '' },
    { path: '/icons',         title: 'Iconos',        icon:'nc-tile-56',    class: '' },

];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
