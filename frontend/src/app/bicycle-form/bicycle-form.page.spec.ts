import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BicycleFormPage } from './bicycle-form.page';

describe('BicycleFormPage', () => {
  let component: BicycleFormPage;
  let fixture: ComponentFixture<BicycleFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BicycleFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
