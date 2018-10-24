import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';

import { IncidentService } from './incident.service';

describe('IncidentService', () => {
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [IncidentService]
    });

    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', inject(
    [IncidentService],
    (service: IncidentService) => {
      expect(service).toBeTruthy();
    }
  ));
});
