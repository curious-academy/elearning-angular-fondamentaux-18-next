import { Routes } from '@angular/router';
import { NotFoundComponent } from '../shared/errors/not-found/not-found.component';
import { statisticsRoutes } from '../features/statistics/statistics.routes';
import { videoGamesRoutes } from '../features/video-games/video-games.routes';

export const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/jeux-videos',
  //   pathMatch: 'full',
  //   //children: videoGamesRoutes
  // },
  {
    path: 'jeux-videos',
    children: videoGamesRoutes
  },
  {
    path: 'stats',
    loadChildren: () => import('../features/statistics/statistics.routes').then(item => item.statisticsRoutes)
  },
  //...videoGamesRoutes,
  {
    path: '**',
    component: NotFoundComponent
  }
];
