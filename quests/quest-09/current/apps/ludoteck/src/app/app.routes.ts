import { Routes } from '@angular/router';
import { ListVideoGamesComponent } from '../features/video-games/components/list-video-games/list-video-games.component';

export const routes: Routes = [
  {
    path: 'jeux-videos',
    component: ListVideoGamesComponent
  }
];
