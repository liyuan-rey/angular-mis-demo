import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForcesModule } from './forces/forces.module';
import { InMemoryDataService } from './in-memory-data.service';
import { IncidentsModule } from './incidents/incidents.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';

@NgModule({
  declarations: [AppComponent, TopbarComponent, SidebarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      delay: 200,
      dataEncapsulation: false
    }),
    IncidentsModule,
    ForcesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
