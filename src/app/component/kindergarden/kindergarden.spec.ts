import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kindergarden } from './kindergarden';

describe('Kindergarden', () => {
  let component: Kindergarden;
  let fixture: ComponentFixture<Kindergarden>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kindergarden],
    }).compileComponents();

    fixture = TestBed.createComponent(Kindergarden);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
