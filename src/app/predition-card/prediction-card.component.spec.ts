import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictionCardComponent } from './prediction-card.component';

describe('PreditionCardComponent', () => {
  let component: PredictionCardComponent;
  let fixture: ComponentFixture<PredictionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredictionCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
