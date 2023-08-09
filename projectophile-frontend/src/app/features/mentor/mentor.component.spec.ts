import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorComponent } from './mentor.component';

describe('MentorComponent', () => {
  let component: MentorComponent;
  let fixture: ComponentFixture<MentorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MentorComponent]
    });
    fixture = TestBed.createComponent(MentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
