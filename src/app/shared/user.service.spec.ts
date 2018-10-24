import { HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { urlUserService as urls } from './web-api-urls';

describe('UserService testing', () => {
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });

    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  it('#getLoginUser should return test value from observable and HttpClient called once', inject(
    [UserService],
    (service: UserService) => {
      const expected = { id: 'id01', username: 'username01' };

      service.getLoginUser().subscribe(data => expect(data).toEqual(expected));

      const req = httpTestingController.expectOne(urls.loginUser);

      expect(req.request.method).toEqual('GET');

      req.flush(expected);
    }
  ));
});
