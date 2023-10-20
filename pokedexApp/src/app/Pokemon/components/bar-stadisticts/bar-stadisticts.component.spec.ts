import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarStadistictsComponent } from './bar-stadisticts.component';

describe('BarStadistictsComponent', () => {
  let component: BarStadistictsComponent;
  let fixture: ComponentFixture<BarStadistictsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarStadistictsComponent]
    });
    fixture = TestBed.createComponent(BarStadistictsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
