import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderBoxComponent } from './leader-box.component';

describe('LeaderBoxComponent', () => {
  let component: LeaderBoxComponent;
  let fixture: ComponentFixture<LeaderBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaderBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
