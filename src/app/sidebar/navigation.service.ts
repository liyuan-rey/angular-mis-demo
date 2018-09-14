import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';

import { NAVIGATION_CONFIG } from './shared/navigation-config';
import { NavigationItem } from './shared/navigation-item';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  constructor() {}

  getNavigationConfig(): Observable<NavigationItem[]> {
    return of(NAVIGATION_CONFIG);
  }
}
