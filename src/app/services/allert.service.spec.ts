import { TestBed } from '@angular/core/testing';

import { AllertService } from './allert.service';

describe('AllertService', () => {
  let service: AllertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
