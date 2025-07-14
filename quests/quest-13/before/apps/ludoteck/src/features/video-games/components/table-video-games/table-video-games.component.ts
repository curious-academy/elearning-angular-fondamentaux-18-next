import { Component, inject, input, output } from '@angular/core';
import { VideoGame, VideoGames } from '../../models/video-game';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-video-games',
  standalone: true,
  imports: [],
  templateUrl: './table-video-games.component.html',
  styleUrl: './table-video-games.component.css'
})
export class TableVideoGamesComponent {
  private readonly router = inject(Router)

  editOne(item: VideoGame): void {
    this.router.navigate(['jeux-videos', item.id])
  }

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
