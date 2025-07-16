import { Component, input, linkedSignal } from '@angular/core';

@Component({
  selector: 'app-resume-one',
  imports: [],
  templateUrl: './resume-one.component.html',
  styleUrl: './resume-one.component.css'
})
export class ResumeOneComponent {
  id = input.required()
  videoGame = linkedSignal(() => ({ id: this.id(), title: 'Example Game'}))

  update(): void {
    this.videoGame.update(old => ({ ...old, title: 'Last of Us' }))
  }
}
