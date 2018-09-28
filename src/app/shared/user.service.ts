import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { handleError } from '../incidents/shared/common';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loginUserUrl = 'api/login-user';

  constructor(private http: HttpClient) {}

  getLoginUser(): Observable<User> {
    return this.http.get<User>(this.loginUserUrl).pipe(
      tap(_ =>
        console.log(`fetched login-user id=${_.id}, name=${_.username}`)
      ),
      catchError(handleError<User>(`getLoginUser`))
    );
  }
}
