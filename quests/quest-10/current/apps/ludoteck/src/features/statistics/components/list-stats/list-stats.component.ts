import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { StatList } from '../../models';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-list-stats',
  imports: [AsyncPipe],
  templateUrl: './list-stats.component.html',
  styleUrl: './list-stats.component.css'
})
export class ListStatsComponent implements OnInit {
  private readonly route = inject(ActivatedRoute)
  protected readonly stats$ = this.route.data.pipe(
    map<{[key: string | symbol]: any}, StatList>(data => data['stats'])
  )

  ngOnInit(): void {
    console.info('stats')
    this.stats$.subscribe(stats => {
      console.log(stats)
    })
  }
}
