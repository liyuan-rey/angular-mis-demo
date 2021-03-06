import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { handleError } from './common';
import { Notice } from './notice';
import { urlNoticeService as urls } from './web-api-urls';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {
  noticeList: Notice[];

  constructor(private http: HttpClient) {
    this.noticeList = [];
  }

  getNoticeCount(): Observable<number> {
    return this.http.get<number>(urls.noticeCount).pipe(
      tap(_ => console.log(`fetched notice count = ${_}`)),
      catchError(handleError<number>('getNoticeCount', NaN))
    );
  }
}
