import { TestBed } from '@angular/core/testing';

import { RappelService } from './rappel.service';

describe('RappelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RappelService = TestBed.get(RappelService);
    expect(service).toBeTruthy();
  });
});
