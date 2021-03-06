import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PendingListComponent } from './pending-list/pending-list.component';

const routes: Routes = [
  { path: 'incidents/pending-list', component: PendingListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncidentsRoutingModule {}
