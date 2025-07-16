import { Component, inject, resource, signal } from '@angular/core';
import { GetListSessionsService } from '../../services/get-list-sessions.service';
import { GameSession, VideoGameDto } from '../../models';
import { rxResource } from '@angular/core/rxjs-interop';
import { GetListFriendsService } from '../../services/get-list-friends.service';
import { httpResource } from '@angular/common/http';

@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  private readonly service = inject(GetListSessionsService);
  private readonly friendsService = inject(GetListFriendsService);

  // protected sessions = signal<GameSession[]>([]);
  protected sessionsResource = resource({
    defaultValue: [],
    loader: () => this.service.getAll()
  })

  protected friendsResource = rxResource({
    defaultValue: [],
    stream: () => this.friendsService.getAll()
  })

  protected moviesResource = httpResource<VideoGameDto[]>(() => 'https://api.opencritic.com/api/game', { defaultValue: []})

  ngOnInit(): void {
    // this.service.getAll()
    //             .then(items => this.sessions.set(items))
  }
}
