import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadedCoursesComponent } from './uploaded-courses.component';

describe('UploadedCoursesComponent', () => {
  let component: UploadedCoursesComponent;
  let fixture: ComponentFixture<UploadedCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadedCoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadedCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
