import { TestBed, inject } from '@angular/core/testing';

import { MockPlayerServiceService } from './mock-player-service.service';

describe('MockPlayerServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockPlayerServiceService]
    });
  });

  it('should be created', inject([MockPlayerServiceService], (service: MockPlayerServiceService) => {
    expect(service).toBeTruthy();
  }));
});
