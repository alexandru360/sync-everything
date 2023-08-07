import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherTwoComponent } from './other-two.component';

describe('OtherTwoComponent', () => {
  let component: OtherTwoComponent;
  let fixture: ComponentFixture<OtherTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtherTwoComponent]
    });
    fixture = TestBed.createComponent(OtherTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
