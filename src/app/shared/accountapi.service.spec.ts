import { TestBed } from '@angular/core/testing';

import { AccountapiService } from './accountapi.service';

describe('AccountapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccountapiService = TestBed.get(AccountapiService);
    expect(service).toBeTruthy();
  });
});
