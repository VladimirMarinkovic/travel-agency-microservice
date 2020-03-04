import { TestBed } from '@angular/core/testing';

import { ZaposleniService } from './zaposleni.service';

describe('ZaposleniService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZaposleniService = TestBed.get(ZaposleniService);
    expect(service).toBeTruthy();
  });
});
