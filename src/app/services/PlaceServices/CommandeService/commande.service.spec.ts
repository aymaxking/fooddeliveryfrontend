import { TestBed } from '@angular/core/testing';

import { CommandeService } from './commande.service';

describe('PlaceService', () => {
  let service: CommandeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommandeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
