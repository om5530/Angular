import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBoxValComponent } from './input-box-val.component';

describe('InputBoxValComponent', () => {
  let component: InputBoxValComponent;
  let fixture: ComponentFixture<InputBoxValComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputBoxValComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputBoxValComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
