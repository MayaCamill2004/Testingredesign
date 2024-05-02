import { TestBed } from '@angular/core/testing';

import { DiagnosticStateService } from './diagnostic-state.service';

describe('DiagnosticStateService', () => {
  let service: DiagnosticStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiagnosticStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
