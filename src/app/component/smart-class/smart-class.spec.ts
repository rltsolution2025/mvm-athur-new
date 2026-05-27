import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartClass } from './smart-class';

describe('SmartClass', () => {
  let component: SmartClass;
  let fixture: ComponentFixture<SmartClass>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartClass],
    }).compileComponents();

    fixture = TestBed.createComponent(SmartClass);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
