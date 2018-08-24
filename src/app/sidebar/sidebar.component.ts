import { Component, OnInit } from '@angular/core';
import svc from '../../sdk/ClientSDK';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  navData: any;
  activedPageId: number;
  currentItemId: number;

  constructor() {}

  ngOnInit() {
    this.navData = svc.getNavigatorInfo();
    this.activedPageId = this.navData[0].key;
    this.currentItemId = this.navData[0].items[0].key;
  }

  isPageActived(p) {
    return p.key === this.activedPageId;
  }

  togglePage(e, p) {
    e.preventDefault();
    this.activedPageId = !this.isPageActived(p) ? p.key : null;
  }

  itemClick(e, item) {
    e.preventDefault();
    e.stopPropagation();
    this.currentItemId = item.key;
  }
}
