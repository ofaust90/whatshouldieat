import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestdetailviewComponent } from './suggestdetailview.component';

describe('SuggestdetailviewComponent', () => {
  let component: SuggestdetailviewComponent;
  let fixture: ComponentFixture<SuggestdetailviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestdetailviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuggestdetailviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
