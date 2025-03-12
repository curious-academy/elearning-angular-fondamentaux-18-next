import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { VideoGame, VideoGames } from '../../models/video-game';
import { TableVideoGamesComponent } from '../table-video-games/table-video-games.component';
import { AddVideoGameComponent } from '../add-video-game/add-video-game.component';


@Component({
    selector: 'app-list-video-games',
    imports: [TableVideoGamesComponent, AddVideoGameComponent],
    templateUrl: './list-video-games.component.html',
    styleUrl: './list-video-games.component.css',
    encapsulation: ViewEncapsulation.None
})
export class ListVideoGamesComponent implements OnInit, OnDestroy {
  list:VideoGames = [
    {id: 1, label: 'Final fantasy 14', year: 2020},
    {id: 2, label: 'Final fantasy 10', year: 2001},
  ];

  ngOnInit(): void {
    console.info('ListVideoGamesComponent::Init');
  }

  toRemoveOneElementParent(value: string): void {
    console.info(value);
    this.list.pop();
  }

  toRemoveOneElementParentSpecific(item: VideoGame): void {
    this.list = this.list.filter(it => it.id != item.id);
  }

  ngOnDestroy(): void {
    console.info('ListVideoGamesComponent::Destroy')
  }
}
