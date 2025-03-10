import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVideoGamesComponent } from './list-video-games.component';

describe('ListVideoGamesComponent', () => {
  let component: ListVideoGamesComponent;
  let fixture: ComponentFixture<ListVideoGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListVideoGamesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListVideoGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
