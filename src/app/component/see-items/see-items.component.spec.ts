import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeItemsComponent } from './see-items.component';

describe('SeeItemsComponent', () => {
  let component: SeeItemsComponent;
  let fixture: ComponentFixture<SeeItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
