import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatLeaderBoxComponent } from './stat-leader-box.component';

describe('StatLeaderBoxComponent', () => {
  let component: StatLeaderBoxComponent;
  let fixture: ComponentFixture<StatLeaderBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatLeaderBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatLeaderBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
