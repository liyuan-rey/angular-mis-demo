import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForcesRoutingModule } from './forces-routing.module';
import { GroundForcesComponent } from './ground-forces/ground-forces.component';

@NgModule({
  imports: [
    CommonModule,
    ForcesRoutingModule
  ],
  declarations: [GroundForcesComponent]
})
export class ForcesModule { }
