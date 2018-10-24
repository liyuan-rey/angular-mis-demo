import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { handleError } from './common';
import { User } from './user';
import { urlUserService as urls } from './web-api-urls';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loginUserUrl = 'api/login-user';

  constructor(private http: HttpClient) {}

  getLoginUser(): Observable<User> {
    return this.http.get<User>(urls.loginUser).pipe(
      tap(_ =>
        console.log(`fetched login-user id=${_.id}, name=${_.username}`)
      ),
      catchError(handleError<User>(`getLoginUser`))
    );
  }
}
