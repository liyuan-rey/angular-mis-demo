import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GroundForcesComponent } from './ground-forces/ground-forces.component';

const routes: Routes = [
  { path: 'forces/ground-forces', component: GroundForcesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForcesRoutingModule {}
