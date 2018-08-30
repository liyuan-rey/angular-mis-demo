import { Injectable } from '@angular/core';

import { CURRENT_LOGIN_USER } from './mock-users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() {}

  getCurrentUser() {
    return CURRENT_LOGIN_USER;
  }
}
