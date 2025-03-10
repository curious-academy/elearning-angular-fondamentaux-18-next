import { Component } from '@angular/core';
import { ListVideoGamesComponent } from '../features/video-games/components/list-video-games/list-video-games.component';

@Component({
    imports: [ListVideoGamesComponent],
    selector: 'app-root',
    // template: `
    // <div class="coucou">
    //     <app-list-video-games></app-list-video-games>
    // </div>
    // `,
    templateUrl: './app.component.html',
    //styles: ['div.coucou {}'],
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ludoteck';
}
