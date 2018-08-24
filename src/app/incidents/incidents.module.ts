import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncidentsRoutingModule } from './incidents-routing.module';
import { PendingListComponent } from './pending-list/pending-list.component';

@NgModule({
  imports: [CommonModule, IncidentsRoutingModule],
  exports: [PendingListComponent],
  declarations: [PendingListComponent]
})
export class IncidentsModule {}
