import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppStatLeaderComponent } from './app-stat-leader.component';

describe('AppStatLeaderComponent', () => {
  let component: AppStatLeaderComponent;
  let fixture: ComponentFixture<AppStatLeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppStatLeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppStatLeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
