import { Component, OnInit } from '@angular/core';

import { IncidentService } from '../incident.service';
import { Incident } from '../shared/incident';
import { getLevelStyle, getLevelTitle } from '../shared/utils';

@Component({
  selector: 'incidents-pending-list',
  templateUrl: './pending-list.component.html',
  styleUrls: ['./pending-list.component.css']
})
export class PendingListComponent implements OnInit {
  common: any;
  incidents: Incident[];
  currentIncident?: Incident;

  constructor(private incidentService: IncidentService) {}

  ngOnInit() {
    this.common = {
      getLevelStyle: getLevelStyle,
      getLevelTitle: getLevelTitle
    };
    this.currentIncident = null;

    this.incidentService.getIncidents().subscribe(incidents => {
      this.incidents = incidents;
    });
  }

  selectIncident(e, id) {
    e.preventDefault();

    if (this.currentIncident && this.currentIncident.id === id) {
      return;
    }

    this.incidentService.getIncident(id).subscribe(incident => {
      this.currentIncident = incident;
    });
  }
}
