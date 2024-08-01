import { TestBed } from '@angular/core/testing';

import { VehilceService } from './vehilce.service';

describe('VehilceService', () => {
  let service: VehilceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehilceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
