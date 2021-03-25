import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/panel',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
    { path: '/usuario',          title: 'Cuenta Usuario',      icon:'nc-single-02',  class: '' },
    { path: '/actividades',         title: 'Actividades',        icon:'nc-tile-56',    class: '' }
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
