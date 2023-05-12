import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorcomponentComponent } from './calculatorcomponent.component';

describe('CalculatorcomponentComponent', () => {
  let component: CalculatorcomponentComponent;
  let fixture: ComponentFixture<CalculatorcomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatorcomponentComponent]
    });
    fixture = TestBed.createComponent(CalculatorcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
