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
          id: '01',
          label: '警情管理',
          children: [
            { id: '02', label: '当前警情', uri: '/incidents/pending-list' },
            { id: '03', label: '历史警情', uri: '' }
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
