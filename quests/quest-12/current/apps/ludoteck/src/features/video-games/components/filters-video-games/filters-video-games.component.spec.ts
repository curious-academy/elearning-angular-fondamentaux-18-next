import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersVideoGamesComponent } from './filters-video-games.component';

describe('FiltersVideoGamesComponent', () => {
  let component: FiltersVideoGamesComponent;
  let fixture: ComponentFixture<FiltersVideoGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltersVideoGamesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltersVideoGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
