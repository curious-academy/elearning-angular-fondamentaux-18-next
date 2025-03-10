import { Component } from '@angular/core';
import { ListVideoGamesComponent } from '../features/video-games/components/list-video-games/list-video-games.component';

@Component({
  standalone: true,
  imports: [ListVideoGamesComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ludoteck';
}
