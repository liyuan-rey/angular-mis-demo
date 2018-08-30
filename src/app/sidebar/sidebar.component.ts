import { Component, OnInit } from '@angular/core';

import { NavigationService } from './navigation.service';
import { NavigationItem } from './shared/navigation-item';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  navData: NavigationItem[];
  activedPageId: string;
  currentItemId: string;

  constructor(private navigationService: NavigationService) {}

  ngOnInit() {
    this.navData = this.navigationService.getNavigationConfig();
    this.activedPageId = this.navData[0].id;
    this.currentItemId = this.navData[0].children[0].id;
  }

  isPageActived(p) {
    return p.id === this.activedPageId;
  }

  togglePage(e, p) {
    e.preventDefault();
    this.activedPageId = !this.isPageActived(p) ? p.id : null;
  }

  itemClick(e, item) {
    e.preventDefault();
    e.stopPropagation();
    this.currentItemId = item.id;
  }
}
