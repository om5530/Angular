import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMyCollegeComponent } from './about-my-college.component';

describe('AboutMyCollegeComponent', () => {
  let component: AboutMyCollegeComponent;
  let fixture: ComponentFixture<AboutMyCollegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMyCollegeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMyCollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
