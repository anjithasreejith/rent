import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserbookComponent } from './userbook.component';

describe('UserbookComponent', () => {
  let component: UserbookComponent;
  let fixture: ComponentFixture<UserbookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserbookComponent]
    });
    fixture = TestBed.createComponent(UserbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
