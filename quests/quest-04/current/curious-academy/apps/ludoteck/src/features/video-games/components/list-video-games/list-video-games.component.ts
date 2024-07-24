import { Component } from '@angular/core';
import { VideoGames } from '../../models/video-game';

@Component({
  selector: 'app-list-video-games',
  standalone: true,
  imports: [],
  templateUrl: './list-video-games.component.html',
  styleUrl: './list-video-games.component.css',
  // encapsulation:ViewEncapsulation.Emulated
})
export class ListVideoGamesComponent {
  list:VideoGames = [
    {label: 'Final fantasy 14', year: 2020},
    {label: 'Final fantasy 10', year: 2001},
  ];

  toRemoveOneElement(): void {
    this.list.pop();
  }
}
