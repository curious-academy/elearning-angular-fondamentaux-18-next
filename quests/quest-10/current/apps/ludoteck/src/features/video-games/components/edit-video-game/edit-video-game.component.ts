import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { UpdateOneVideoGameService } from '../../services/update-one-video-game.service';
import { VideoGame } from '../../models/video-game';
import { GetOneVideoGameService } from '../../services/get-one-video-game.service';
import { concatMap, distinctUntilChanged, map, pairwise, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-edit-video-game',
  imports: [ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './edit-video-game.component.html',
  styleUrl: './edit-video-game.component.css'
})
export class EditVideoGameComponent implements OnInit {
  private readonly formBuilder = inject(FormBuilder)
  private readonly getOneService = inject(GetOneVideoGameService)
  private readonly updateOneService = inject(UpdateOneVideoGameService)

  protected readonly isLoading = signal(false)

  protected readonly videoGameFormGroup = this.formBuilder.nonNullable.group({
    label: ['', [Validators.required, Validators.minLength(3)]],
    year: [new Date().getFullYear(), [Validators.required, Validators.max(new Date().getFullYear())]],
  })

  private readonly route = inject(ActivatedRoute)

  protected readonly setVideoGame$ = this.route.params
    .pipe(
      tap(() => this.isLoading.set(true)),
      map<{ [key: string | symbol]: any }, number>(params => params['id']),
      switchMap(id => this.getOneService.getOne(id)),
      tap(() => this.isLoading.set(false)),
    )

  protected readonly detectChanges$ = this.videoGameFormGroup.valueChanges
    .pipe(
      pairwise(),
      distinctUntilChanged(),
      takeUntilDestroyed()
    )

  videoGameParams = toSignal(this.route.params)
  videoGameId = computed(() => {
    let id = 0
    const params = this.videoGameParams()

    if (params) {
      id = params['id']
    }

    return id
  })

  ngOnInit(): void {
    console.info(this.route.snapshot.params['id'])

    this.setVideoGame$
      .subscribe({
        next: item => {
          this.videoGameFormGroup.patchValue(item)
        }
      })


    this.detectChanges$
    .subscribe({
      next: change => console.info(change)
    })
  }

  saveOne(): void {
    const videoGame: VideoGame = {
      label: '',
      year: 0
    };

    if (this.videoGameFormGroup.value.label) {
      videoGame.label = this.videoGameFormGroup.value.label;
    }
    if (this.videoGameFormGroup.value.year) {
      videoGame.year = this.videoGameFormGroup.value.year;
    }

    this.updateOneService.updateOne(videoGame).subscribe()
  }
}
