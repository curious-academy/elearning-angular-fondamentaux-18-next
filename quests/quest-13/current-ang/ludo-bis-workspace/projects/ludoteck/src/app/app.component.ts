import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleService } from './stores/title.service';
import { ChildOneComponent } from './pocs/child-one/child-one.component';
import { ResumeOneComponent } from './features/videogames/components/resume-one/resume-one.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChildOneComponent, ResumeOneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  private readonly service = inject(TitleService)
  title = this.service.asSignal

  id = signal(0)

  update(): void {
    this.id.update(old => old + 1)
  }

  ngOnInit(): void {
    setTimeout(() => {
      console.info('avant', this.title)
//      this.title.set('Ma ludoteck')
        this.service.dispatch('Ma ludoteck')
      console.info('apres', this.title)
    }, 1000)
  }
}
