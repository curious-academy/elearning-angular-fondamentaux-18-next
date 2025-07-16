import { TestBed } from '@angular/core/testing';

import { GetListFriendsService } from './get-list-friends.service';

describe('GetListFriendsService', () => {
  let service: GetListFriendsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetListFriendsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
