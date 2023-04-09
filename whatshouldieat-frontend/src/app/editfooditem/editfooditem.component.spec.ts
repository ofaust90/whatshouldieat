import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfooditemComponent } from './editfooditem.component';

describe('EditfooditemComponent', () => {
  let component: EditfooditemComponent;
  let fixture: ComponentFixture<EditfooditemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditfooditemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditfooditemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
