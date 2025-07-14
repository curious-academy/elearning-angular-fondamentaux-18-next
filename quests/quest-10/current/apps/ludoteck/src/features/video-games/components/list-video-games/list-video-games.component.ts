import { Component, inject } from '@angular/core';
import { VideoGame, VideoGames } from '../../models/video-game';
import { TableVideoGamesComponent } from '../table-video-games/table-video-games.component';
import { AddVideoGameComponent } from '../add-video-game/add-video-game.component';
import { FiltersVideoGamesComponent } from '../filters-video-games/filters-video-games.component';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-list-video-games',
  standalone: true,
  imports: [
    AsyncPipe,
    TableVideoGamesComponent,
    AddVideoGameComponent,
    FiltersVideoGamesComponent
  ],
  templateUrl: './list-video-games.component.html',
  styleUrl: './list-video-games.component.css',
  // encapsulation:ViewEncapsulation.Emulated
})
export class ListVideoGamesComponent {
  title$ = inject(ActivatedRoute).title

  list:VideoGames = [
    {id: 1, label: 'Final fantasy 14', year: 2020},
    {id: 2, label: 'Final fantasy 10', year: 2001},
  ];

  toRemoveOneElementParent(value: string): void {
    console.info(value);
    this.list.pop();
  }

  toRemoveOneElementParentSpecific(item: VideoGame): void {
    this.list = this.list.filter(it => it.id != item.id);
  }
}
