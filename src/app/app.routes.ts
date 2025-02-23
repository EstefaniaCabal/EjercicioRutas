import { Routes } from '@angular/router';
import { GamesComponent } from './pages/games/games.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'contacto',
        component: ContactoComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'games',
        component: GamesComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
