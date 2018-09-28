import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { NotExpr } from '@angular/compiler';
import { Injectable } from '@angular/core';

import { handleError } from '../incidents/shared/common';
import { Notice } from './notice';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {
  noticeList: Notice[];

  constructor(private http: HttpClient) {
    this.noticeList = [];
  }

  getNoticeCount(): Observable<number> {
    const url = 'api/notice-count';
    return this.http.get<number>(url).pipe(
      tap(_ => console.log('fetched notice count')),
      catchError(handleError<number>('getNoticeCount', NaN))
    );
  }
}
