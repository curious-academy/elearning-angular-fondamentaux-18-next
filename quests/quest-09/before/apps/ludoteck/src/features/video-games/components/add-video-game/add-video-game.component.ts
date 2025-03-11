import { Component, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { VideoGame } from '../../models/video-game';
import { JsonPipe } from '@angular/common';

@Component({
    selector: 'app-add-video-game',
    imports: [FormsModule, JsonPipe],
    templateUrl: './add-video-game.component.html',
    styleUrl: './add-video-game.component.css'
})
export class AddVideoGameComponent {
  videoGame: VideoGame = {
    label: '',
    year: (new Date()).getFullYear()
  }

  form = viewChild<NgForm>('videoGameForm')

  save(): void {
    console.info(this.form()?.form.valid)
    console.info(this.form()?.controls['label'].errors)

    console.info(this.videoGame)
  }
}
