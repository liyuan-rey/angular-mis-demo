import { Injectable } from '@angular/core';

import { INCIDENTS } from './shared/mock-incidents';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {
  constructor() {}

  getIncidentCount() {
    return INCIDENTS.length;
  }

  getIncidentListSimple() {
    return INCIDENTS.map(incident => ({
      id: incident.id,
      title: incident.title,
      reportTime: incident.reportTime,
      level: incident.level
    }));
  }

  getIncidentInfo(id: string) {
    return INCIDENTS.find(incident => incident.id === id);
  }
}
