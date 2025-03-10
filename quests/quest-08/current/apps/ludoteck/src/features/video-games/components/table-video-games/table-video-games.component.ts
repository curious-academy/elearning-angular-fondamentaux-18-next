import { Component, input, output } from '@angular/core';
import { VideoGame, VideoGames } from '../../models/video-game';

@Component({
    selector: 'app-table-video-games',
    imports: [],
    templateUrl: './table-video-games.component.html',
    styleUrl: './table-video-games.component.css'
})
export class TableVideoGamesComponent {
  items = input.required<VideoGames>();
  title = input.required<string>();

  askToRemoveOneElement = output<string>();
  askToRemoveOneSpecific = output<VideoGame>();

  clickToRemove(): void {
    this.askToRemoveOneElement.emit('test');
  }

  clickToRemoveSpecificElement(item: VideoGame): void {
    this.askToRemoveOneSpecific.emit(item);
  }
}
