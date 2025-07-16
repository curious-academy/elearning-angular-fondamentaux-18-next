import { computed, effect, Injectable, Signal, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private readonly title = signal('ludoteck')
  private readonly titleMaj = computed(() => {
    console.info('computed ?')
    return this.title().toUpperCase()
  })
  private readonly obs$ = toObservable(this.title)

  private readonly currentEffect = effect(() => {
    console.info('effect ?', this.title())
  })

  dispatch(title: string): void {
    this.title.set(title)
  }

  get asSignal(): Signal<string> {
    return this.title
  }

  get asMaj(): Signal<string> {
    return this.titleMaj
  }
}
