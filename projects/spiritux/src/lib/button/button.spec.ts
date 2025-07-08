import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpirituxButtonComponent } from './button';

describe('Button', () => {
  let component: SpirituxButtonComponent;
  let fixture: ComponentFixture<SpirituxButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpirituxButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpirituxButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
