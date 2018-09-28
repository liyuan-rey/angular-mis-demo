import { Component, OnInit } from '@angular/core';

import { IncidentService } from '../incidents/incident.service';
import { User } from '../shared/user';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  loginUser?: User;
  noticeCount: number;

  constructor(
    private userService: UserService,
    private incidentService: IncidentService
  ) {}

  ngOnInit() {
    this.userService
      .getLoginUser()
      .subscribe(loginUser => (this.loginUser = loginUser));

    this.incidentService.getIncidentCount().subscribe(count => {
      this.noticeCount = count;
    });
  }
}
