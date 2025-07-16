import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableVideoGamesComponent } from './table-video-games.component';

describe('TableVideoGamesComponent', () => {
  let component: TableVideoGamesComponent;
  let fixture: ComponentFixture<TableVideoGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableVideoGamesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableVideoGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
