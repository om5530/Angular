import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSingleViewComponent } from './student-single-view.component';

describe('StudentSingleViewComponent', () => {
  let component: StudentSingleViewComponent;
  let fixture: ComponentFixture<StudentSingleViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentSingleViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSingleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
