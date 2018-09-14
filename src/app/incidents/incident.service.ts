import { Observable, of } from 'rxjs';
import { catchError, map, mapTo, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { handleError } from './shared/common';
import { Incident, IncidentJSON } from './shared/incident';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {
  private incidentsUrl = 'api/incidents';

  constructor(private http: HttpClient) {}

  getIncidentCount(): Observable<number> {
    const url = `${this.incidentsUrl}/$count`;
    return this.http.get<number>(url).pipe(
      tap(_ => console.log('fetched incident count')),
      catchError(handleError<number>('getIncidentCount', NaN))
    );
  }

  getIncidents(): Observable<Incident[]> {
    return this.http.get<IncidentJSON[]>(this.incidentsUrl).pipe(
      tap(_ => console.log('fetched incidents')),
      map(json => json.map<Incident>(obj => Incident.fromJSON(obj))),
      catchError(handleError<Incident[]>('getIncidents', []))
    );
  }

  getIncidentsSimple(): Observable<any[]> {
    const url = `${this.incidentsUrl}?$select=id,title,reportTime,level`;
    return this.http.get<any[]>(url).pipe(
      tap(_ => console.log('fetched incidents simplified')),
      catchError(handleError<any[]>('getIncidentsSimple', []))
    );
  }

  getIncident(id: string): Observable<Incident> {
    const url = `${this.incidentsUrl}/${id}`;
    return this.http.get<IncidentJSON>(url).pipe(
      tap(_ => console.log(`fetched incident id=${id}`)),
      map(json => Incident.fromJSON(json)),
      catchError(handleError<Incident>(`getIncident id=${id}`))
    );
  }

  getIncidentNo404(id: string): Observable<Incident> {
    const url = `${this.incidentsUrl}/?id=${id}`;
    return this.http.get<Incident>(url).pipe(
      tap(i => {
        const outcome = i ? 'fetched' : 'did not find';
        console.log(`${outcome} incident id=${id}`);
      }),
      map(incidents => incidents[0]), // returns a {0|1} element array
      catchError(handleError<Incident>(`getIncidentNo404 id=${id}`))
    );
  }
}
