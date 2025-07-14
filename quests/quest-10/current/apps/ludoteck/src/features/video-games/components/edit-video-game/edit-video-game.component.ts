import { Component, computed, inject, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-video-game',
  imports: [],
  templateUrl: './edit-video-game.component.html',
  styleUrl: './edit-video-game.component.css'
})
export class EditVideoGameComponent implements OnInit {
  private readonly route = inject(ActivatedRoute)
  videoGameParams = toSignal(this.route.params)
  videoGameId = computed(() => {
    let id = 0
    const params = this.videoGameParams()

    if(params) {
      id = params['id']
    }

    return id
  })

  ngOnInit(): void {
    console.info(this.route.snapshot.params['id'])

    this.route.params.subscribe({
      next: item => {
        console.info(item['id'])
      }
    })
  }

}
