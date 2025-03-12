import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MainMenuComponent } from '../shared/menus/main-menu/main-menu.component';
@Component({
    imports: [RouterOutlet, RouterLink, MatSliderModule, MainMenuComponent],
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
