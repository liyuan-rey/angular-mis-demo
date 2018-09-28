import { Component, OnInit } from '@angular/core';

import { IncidentService } from '../incidents/incident.service';
import { NoticeService } from '../shared/notice.service';
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
    private noticeService: NoticeService
  ) {}

  ngOnInit() {
    this.userService
      .getLoginUser()
      .subscribe(loginUser => (this.loginUser = loginUser));

    this.noticeService.getNoticeCount().subscribe(count => {
      this.noticeCount = count;
    });
  }
}
