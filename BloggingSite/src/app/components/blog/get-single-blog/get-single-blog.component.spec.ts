import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSingleBlogComponent } from './get-single-blog.component';

describe('GetSingleBlogComponent', () => {
  let component: GetSingleBlogComponent;
  let fixture: ComponentFixture<GetSingleBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetSingleBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetSingleBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
