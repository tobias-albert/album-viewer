import { TestBed } from '@angular/core/testing';

import { DbToolService } from './db-tool.service';

describe('DbToolService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DbToolService = TestBed.get(DbToolService);
    expect(service).toBeTruthy();
  });
});
