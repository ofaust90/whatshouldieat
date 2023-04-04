import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooditemsoverviewComponent } from './fooditemsoverview.component';

describe('FooditemsoverviewComponent', () => {
  let component: FooditemsoverviewComponent;
  let fixture: ComponentFixture<FooditemsoverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooditemsoverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooditemsoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
