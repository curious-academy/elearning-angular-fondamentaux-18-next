import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { RouterOutlet } from '@angular/router';
@Component({
    imports: [RouterOutlet, MatSliderModule],
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
