import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandatoryPublicDisclosure } from './mandatory-public-disclosure';

describe('MandatoryPublicDisclosure', () => {
  let component: MandatoryPublicDisclosure;
  let fixture: ComponentFixture<MandatoryPublicDisclosure>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MandatoryPublicDisclosure],
    }).compileComponents();

    fixture = TestBed.createComponent(MandatoryPublicDisclosure);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
