import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { RouterOutlet } from '@angular/router';
import { MainMenuComponent } from '../shared/menus/main-menu/main-menu.component';
import { ComputePipe } from '../shared/tools/compute.pipe';
import { AutoFocusDirective } from '../shared/tools/auto-focus.directive';
@Component({
    imports: [AutoFocusDirective, ComputePipe, RouterOutlet, MatSliderModule, MainMenuComponent],
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
  value = 5

  ngOnInit(): void {
    setTimeout(() => {
      console.info('avant', this.title)
      this.title = 'My ludotek'
      console.info('apres', this.title)
    }, 1500);
  }

  myFunction(a: number, b: number): number {
    console.info('Coucou')

    return a + b
  }
}
