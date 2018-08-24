import { Component, OnInit } from '@angular/core';

import svc from '../../../sdk/ClientSDK';
import common from '../shared/common';

@Component({
  selector: 'incidents-pending-list',
  templateUrl: './pending-list.component.html',
  styleUrls: ['./pending-list.component.css']
})
export class PendingListComponent implements OnInit {
  cmn: any;
  incidents: any[];
  currentIncident: any;

  constructor() {}

  ngOnInit() {
    this.cmn = common;
    this.incidents = svc.getIncidentListSimple();
    this.currentIncident = svc.getIncidentInfo();
  }

  selectIncident(e, id) {
    e.preventDefault();

    if (this.currentIncident && this.currentIncident.id === id) {
      return;
    }

    this.currentIncident = svc.getIncidentInfo(id);
  }
}
