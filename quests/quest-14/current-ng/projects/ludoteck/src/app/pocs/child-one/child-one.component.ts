import { Component, inject } from '@angular/core';
import { TitleService } from '../../stores/title.service';

@Component({
  selector: 'app-child-one',
  imports: [],
  templateUrl: './child-one.component.html',
  styleUrl: './child-one.component.css'
})
export class ChildOneComponent {
  private readonly service = inject(TitleService)
  title = this.service.asSignal
  titleMaj = this.service.asMaj
}
