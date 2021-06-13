import { TestBed } from '@angular/core/testing';

import { AccountDetailsApiService } from './account-details-api.service';

describe('AccountDetailsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccountDetailsApiService = TestBed.get(AccountDetailsApiService);
    expect(service).toBeTruthy();
  });
});
