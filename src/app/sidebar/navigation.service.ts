import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { handleError } from '../shared/common';
import { urlNavigationService as urls } from '../shared/web-api-urls';
import { NavigationItem } from './shared/navigation-item';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  constructor(private http: HttpClient) {}

  getNavigationSettings(): Observable<NavigationItem[]> {
    return this.http.get<NavigationItem[]>(urls.navigationSettings).pipe(
      tap(_ => console.log(`fetched ${_.length} navigation setting(s)`)),
      catchError(handleError<NavigationItem[]>('getNavigationSettings', []))
    );
  }
}
