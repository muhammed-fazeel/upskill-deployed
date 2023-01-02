import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbargoodlookingComponent } from './navbargoodlooking.component';

describe('NavbargoodlookingComponent', () => {
  let component: NavbargoodlookingComponent;
  let fixture: ComponentFixture<NavbargoodlookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbargoodlookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbargoodlookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
