import { Component, OnInit } from '@angular/core';

import { IncidentService } from '../incident.service';
import common from '../shared/common';
import { Incident } from '../shared/incident';

@Component({
  selector: 'incidents-pending-list',
  templateUrl: './pending-list.component.html',
  styleUrls: ['./pending-list.component.css']
})
export class PendingListComponent implements OnInit {
  cmn: any;
  incidents: any[];
  currentIncident: Incident;

  constructor(private incidentService: IncidentService) {}

  ngOnInit() {
    this.cmn = common;
    this.incidents = this.incidentService.getIncidentListSimple();
    this.currentIncident = this.incidentService.getIncidentInfo('');
  }

  selectIncident(e, id) {
    e.preventDefault();

    if (this.currentIncident && this.currentIncident.id === id) {
      return;
    }

    this.currentIncident = this.incidentService.getIncidentInfo(id);
  }
}
