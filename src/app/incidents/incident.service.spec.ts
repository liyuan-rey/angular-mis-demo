import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';

import { urlIncidentService as urls } from '../shared/web-api-urls';
import { IncidentService } from './incident.service';
import { Incident } from './shared/incident';

describe('IncidentService', () => {
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [IncidentService]
    });

    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', inject(
    [IncidentService],
    (service: IncidentService) => {
      expect(service).toBeTruthy();
    }
  ));

  it('#getIncidents should return test value from observable and HttpClient called once', inject(
    [IncidentService],
    (service: IncidentService) => {
      const expected: Incident[] = [
        {
          id: 'id01',
          title: 'title01',
          reportTime: new Date(),
          level: 1,
          description: 'description01'
        } as Incident
      ];

      service.getIncidents().subscribe(data => expect(data).toEqual(expected));

      const req = httpTestingController.expectOne(urls.incidents);

      expect(req.request.method).toEqual('GET');

      req.flush(expected);
    }
  ));
});
