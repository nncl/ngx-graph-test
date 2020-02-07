import { TestBed } from '@angular/core/testing';

import { LazyLoaderService } from './lazy-loader.service';

describe('LazyLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LazyLoaderService = TestBed.get(LazyLoaderService);
    expect(service).toBeTruthy();
  });
});
