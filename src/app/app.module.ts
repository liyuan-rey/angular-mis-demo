import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { IncidentsModule } from './incidents/incidents.module';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SidebarComponent
  ],
  imports: [BrowserModule, IncidentsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
