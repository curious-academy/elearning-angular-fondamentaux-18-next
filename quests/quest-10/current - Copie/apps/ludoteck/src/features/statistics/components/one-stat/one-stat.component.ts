import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-one-stat',
  imports: [AsyncPipe],
  templateUrl: './one-stat.component.html',
  styleUrl: './one-stat.component.css'
})
export class OneStatComponent {
  private readonly route = inject(ActivatedRoute)

  protected readonly titleColor$ = this.route.data.pipe(
    map<{ [key: string | symbol]: any }, string>(data => data['titleColor'])
  )
}
