import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneStatComponent } from './one-stat.component';

describe('OneStatComponent', () => {
  let component: OneStatComponent;
  let fixture: ComponentFixture<OneStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneStatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
