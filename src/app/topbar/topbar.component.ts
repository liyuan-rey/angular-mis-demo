import { Component, OnInit } from '@angular/core';

import { IncidentService } from '../incidents/incident.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  noticeCount: number;
  username: string;

  constructor(
    private userService: UserService,
    private incidentService: IncidentService
  ) {}

  ngOnInit() {
    this.incidentService.getIncidentCount().subscribe(count => {
      this.noticeCount = count;
    });
    this.username = this.userService.getCurrentUser().username;
  }
}
