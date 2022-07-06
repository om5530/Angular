import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReuseableComponentComponent } from './reuseable-component.component';

describe('ReuseableComponentComponent', () => {
  let component: ReuseableComponentComponent;
  let fixture: ComponentFixture<ReuseableComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReuseableComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReuseableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
