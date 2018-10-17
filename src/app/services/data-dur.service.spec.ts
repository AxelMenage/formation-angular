import { TestBed } from '@angular/core/testing';

import { DataDurService } from './data-dur.service';

describe('DataDurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataDurService = TestBed.get(DataDurService);
    expect(service).toBeTruthy();
  });
});
