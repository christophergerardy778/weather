import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreditionCardComponent } from './predition-card.component';

describe('PreditionCardComponent', () => {
  let component: PreditionCardComponent;
  let fixture: ComponentFixture<PreditionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreditionCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreditionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
