import { Routes } from "@angular/router";
import { ListVideoGamesComponent } from "./components/list-video-games/list-video-games.component";
import { EditVideoGameComponent } from "./components/edit-video-game/edit-video-game.component";

// '/jeux-videos/'
export const videoGamesRoutes: Routes = [
  {
    path: '',
    component: ListVideoGamesComponent,
    title: 'Liste des jeux vidéos'
  },
  {
    path: ':id',
    component: EditVideoGameComponent
  }
]
