import { Routes } from '@angular/router';
import { NotFoundComponent } from '../shared/errors/not-found/not-found.component';

export const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/jeux-videos',
  //   pathMatch: 'full',
  //   //children: videoGamesRoutes
  // },
  {
    path: 'jeux-videos',
    loadChildren: () => import('../features/video-games/video-games.routes').then(item => item.videoGamesRoutes)
  },
  //...videoGamesRoutes,
  {
    path: '**',
    component: NotFoundComponent
  }
];
