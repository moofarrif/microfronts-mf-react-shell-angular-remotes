import { TestBed } from '@angular/core/testing';

import { MyLibNgService } from './my-lib-ng.service';

describe('MyLibNgService', () => {
  let service: MyLibNgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyLibNgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
