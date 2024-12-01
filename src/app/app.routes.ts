import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'blog-preview-card',
    loadComponent: () => import('./preview-card/preview-card.component'),
  },
  {
    path: '**',
    redirectTo: 'blog-preview-card',
    pathMatch: 'full',
  },
];
