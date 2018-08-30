import { Injectable } from '@angular/core';

import { NAVIGATION_CONFIG } from './shared/navigation-config';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  constructor() {}

  getNavigationConfig() {
    return NAVIGATION_CONFIG;
  }
}
