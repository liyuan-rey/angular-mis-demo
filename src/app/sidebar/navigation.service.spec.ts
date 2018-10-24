import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';

import { urlNavigationService as urls } from '../shared/web-api-urls';
import { NavigationService } from './navigation.service';
import { NavigationItem } from './shared/navigation-item';

describe('NavigationService', () => {
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NavigationService]
    });

    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', inject(
    [NavigationService],
    (service: NavigationService) => {
      expect(service).toBeTruthy();
    }
  ));

  it('#getNavigationSettings should return test value from observable and HttpClient called once', inject(
    [NavigationService],
    (service: NavigationService) => {
      const expected: NavigationItem[] = [
        {
          id: 'id01',
          label: 'label01',
          children: [
            { id: 'id02', label: 'label02', uri: 'uri02' },
            { id: 'id03', label: 'label03', uri: 'uri03' }
          ]
        }
      ];

      service
        .getNavigationSettings()
        .subscribe(data => expect(data).toEqual(expected));

      const req = httpTestingController.expectOne(urls.navigationSettings);

      expect(req.request.method).toEqual('GET');

      req.flush(expected);
    }
  ));
});
