import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/layout/layout').then((m) => m.Layout),
    children: [
      {
        path: 'introduccion',
        loadComponent: () => import('./features/introduccion/introduccion').then((m) => m.Introduccion),       

      },
      {
        path: 'objetivos',
        loadComponent: () => import('./features/objetivos/objetivos').then((m) => m.Objetivos),       

      },
      {
        path: 'contenido',
        loadComponent: () => import('./features/contenido/contenido').then((m) => m.Contenido),       

      },
      {
        path: 'actividad',
        loadComponent: () => import('./features/actividad/actividad').then((m) => m.Actividad),       

      }
    ]
  },
];
