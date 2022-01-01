import { TestBed } from '@angular/core/testing';

import { ApplicationDeliveryService } from './application-delivery.service';

describe('ApplicationDeliveryService', () => {
  let service: ApplicationDeliveryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicationDeliveryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
