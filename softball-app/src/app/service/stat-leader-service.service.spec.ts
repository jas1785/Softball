import { TestBed, inject } from '@angular/core/testing';

import { StatLeaderServiceService } from './stat-leader-service.service';

describe('StatLeaderServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StatLeaderServiceService]
    });
  });

  it('should be created', inject([StatLeaderServiceService], (service: StatLeaderServiceService) => {
    expect(service).toBeTruthy();
  }));
});
