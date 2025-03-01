import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./shared/layouts/layouts.component'),
        children: [
            {
                path: 'peliculas',
                loadComponent: () => import('./pages/peliculas/peliculas.component')
            },
            {
                path: 'detalils/:id',
                loadComponent: () => import('./pages/detalils/detalils.component')
            },
            {
                path: 'formulario',
                loadComponent: () => import('./pages/formulario/formulario.component')
            },
            {
                path: '',
                redirectTo: 'peliculas',
                pathMatch: 'full'
            }

        ]
    }
];
