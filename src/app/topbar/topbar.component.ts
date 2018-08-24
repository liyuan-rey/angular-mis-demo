import { Component, OnInit } from '@angular/core';
import svc from '../../sdk/ClientSDK';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  noticeCount: number;
  username: string;
  logo: string;

  constructor() {}

  ngOnInit() {
    this.noticeCount = svc.getIncidentCount();
    this.username = svc.getCurrentUser().username;
    this.logo = '';
  }
}
