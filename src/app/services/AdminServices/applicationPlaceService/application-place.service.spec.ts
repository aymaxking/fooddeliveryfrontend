import { TestBed } from '@angular/core/testing';

import { ApplicationPlaceService } from './application-place.service';

describe('ApplicationPlaceService', () => {
  let service: ApplicationPlaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicationPlaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
