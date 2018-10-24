import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';

import { NoticeService } from './notice.service';
import { urlNoticeService as urls } from './web-api-urls';

describe('NoticeService', () => {
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NoticeService]
    });

    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    const service: NoticeService = TestBed.get(NoticeService);
    expect(service).toBeTruthy();
  });

  it('#getNoticeCount should return test value from observable and HttpClient called once', inject(
    [NoticeService],
    (service: NoticeService) => {
      const expected = 2;

      service
        .getNoticeCount()
        .subscribe(data => expect(data).toEqual(expected));

      const req = httpTestingController.expectOne(urls.noticeCount);

      expect(req.request.method).toEqual('GET');

      req.flush(expected);
    }
  ));
});
