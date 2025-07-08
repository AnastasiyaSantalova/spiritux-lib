import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spiritux } from './spiritux';

describe('Spiritux', () => {
  let component: Spiritux;
  let fixture: ComponentFixture<Spiritux>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Spiritux]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Spiritux);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
