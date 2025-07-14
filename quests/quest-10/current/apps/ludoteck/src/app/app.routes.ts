import { Routes } from '@angular/router';
import { NotFoundComponent } from '../shared/errors/not-found/not-found.component';
import { statisticsRoutes } from '../features/statistics/statistics.routes';
import { videoGamesRoutes } from '../features/video-games/video-games.routes';
import { requireAuthenticatedGuard } from '../features/authentication/guards/require-authenticated.guard';
import { authenticationRoutes } from '../features/authentication/authentication.routes';
import { statsResolver } from '../features/statistics/resolvers/statistics.resolver';

export const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/jeux-videos',
  //   pathMatch: 'full',
  //   //children: videoGamesRoutes
  // },
  {
    path: 'jeux-videos',
    children: videoGamesRoutes,
    canActivate: [requireAuthenticatedGuard]
  },
  {
    path: 'stats',
    loadChildren: () => import('../features/statistics/statistics.routes').then(item => item.statisticsRoutes),
    data: {
      title: 'Mes stats de jeux',
      titleColor: '#007bff'
    },
    canActivate: [requireAuthenticatedGuard],
    resolve: {
      stats: statsResolver
    }
  },
  ...authenticationRoutes,
  //...videoGamesRoutes,
  {
    path: '**',
    component: NotFoundComponent
  }
];
