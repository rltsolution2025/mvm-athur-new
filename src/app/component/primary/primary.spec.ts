import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Primary } from './primary';

describe('Primary', () => {
  let component: Primary;
  let fixture: ComponentFixture<Primary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Primary],
    }).compileComponents();

    fixture = TestBed.createComponent(Primary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
