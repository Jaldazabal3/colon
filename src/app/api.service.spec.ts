import { TestBed } from '@angular/core/testing';

import { FormPostService } from './form-post.service';

describe('ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormPostService = TestBed.get(FormPostService);
    expect(service).toBeTruthy();
  });
});
