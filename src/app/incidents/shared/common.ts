import { Observable, of } from 'rxjs';

const LevelStyle = {
  1: ['level-urgent', '紧急'],
  2: ['', ''],
  3: ['level-normal ', '普通'],
  4: ['', '']
};

export function getLevelStyle(level: number): string {
  return LevelStyle[level + ''][0];
}

export function getLevelTitle(level: number): string {
  return LevelStyle[level + ''][1];
}

/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
export function handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    // this.log(`${operation} failed: ${error.message}`);
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
