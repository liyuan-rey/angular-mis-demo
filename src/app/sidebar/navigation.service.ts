import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { handleError } from '../shared/common';
import { NavigationItem } from './shared/navigation-item';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private navSettingsUrl = 'api/navigation-settings';

  constructor(private http: HttpClient) {}

  getNavigationSettings(): Observable<NavigationItem[]> {
    return this.http.get<NavigationItem[]>(this.navSettingsUrl).pipe(
      tap(_ => console.log('fetched navigation settings')),
      catchError(handleError<NavigationItem[]>('getNavigationSettings', []))
    );
  }
}
