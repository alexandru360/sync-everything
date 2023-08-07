import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherOneComponent } from './other-one.component';

describe('OtherOneComponent', () => {
  let component: OtherOneComponent;
  let fixture: ComponentFixture<OtherOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtherOneComponent]
    });
    fixture = TestBed.createComponent(OtherOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
