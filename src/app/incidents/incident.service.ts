import { Observable, of } from 'rxjs';
import { catchError, map, mapTo, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { handleError } from '../shared/common';
import { urlIncidentService as urls } from '../shared/web-api-urls';
import { Incident, IncidentJSON } from './shared/incident';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {
  constructor(private http: HttpClient) {}

  getIncidents(): Observable<Incident[]> {
    return this.http.get<IncidentJSON[]>(urls.incidents).pipe(
      tap(_ => console.log(`fetched ${_.length} incident(s)`)),
      map(json => json.map<Incident>(obj => Incident.fromJSON(obj))),
      catchError(handleError<Incident[]>('getIncidents', []))
    );
  }

  getIncidentsSimple(): Observable<any[]> {
    const url = `${urls.incidents}?$select=id,title,reportTime,level`;
    return this.http.get<any[]>(url).pipe(
      tap(_ => console.log(`fetched ${_.length} incident(s) simplified`)),
      catchError(handleError<any[]>('getIncidentsSimple', []))
    );
  }

  getIncident(id: string): Observable<Incident> {
    const url = `${urls.incidents}/${id}`;
    return this.http.get<IncidentJSON>(url).pipe(
      tap(_ => console.log(`fetched incident id=${id}`)),
      map(json => Incident.fromJSON(json)),
      catchError(handleError<Incident>(`getIncident id=${id}`))
    );
  }

  getIncidentNo404(id: string): Observable<Incident> {
    const url = `${urls.incidents}/?id=${id}`;
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
