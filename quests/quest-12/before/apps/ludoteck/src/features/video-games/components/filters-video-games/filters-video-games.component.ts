import { AsyncPipe } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { filter, Observable, Subscription, tap } from 'rxjs';
import { Person } from '../../models/person';
import { GetAllPersonApplicatif } from '../../services/get-all-person.applicatif.service';
import { toSignal } from '@angular/core/rxjs-interop'

@Component({
  selector: 'app-filters-video-games',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './filters-video-games.component.html',
  styleUrl: './filters-video-games.component.css'
})
export class FiltersVideoGamesComponent implements OnInit, OnDestroy {
  private readonly subscription = new Subscription()
  private readonly peopleService = inject(GetAllPersonApplicatif)
  people$: Observable<Person[]> = this.peopleService.getAll().pipe(
    filter(items => items.length > 0 ),
    tap(items => console.info(items)) // debug facile de mon next de mon observable
  )
  people$$ = toSignal(this.people$) // on ne le voit pas mais appel via un effect, et donc appel du subscribe dans cet effect

  ngOnInit(): void {
    const currentSubscription = this.people$.subscribe({
      next: items => {
        console.info(items)
      }
    })
    this.subscription.add(currentSubscription)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
