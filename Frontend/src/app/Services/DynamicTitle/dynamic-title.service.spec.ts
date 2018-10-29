import { TestBed } from '@angular/core/testing';

import { DynamicTitleService } from './dynamic-title.service';

describe('DynamicTitleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DynamicTitleService = TestBed.get(DynamicTitleService);
    expect(service).toBeTruthy();
  });
});
