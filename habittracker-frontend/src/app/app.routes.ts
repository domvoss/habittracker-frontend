import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./features/login/login.component').then((lc) => lc.LoginComponent),
        title: 'Login'
    },
    {
        path: '', 
        loadComponent: () => import('./features/home-page/home-page.component').then((hc) => hc.HomePageComponent),
        title: 'Home'
    }
];
