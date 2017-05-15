import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { EventsAppComponent } from './events-app.component'
import { EventsListComponent } from './events/events-list.component'
import { EventThumbnailComponent } from './events/event-thumbnail.component'
import { NavBarComponent } from './nav/navbar.component'
import {SessionListComponent} from "./events/event-details/session-list.component";
import {PlayerThumbnailComponent} from "./events/player-thumbnail.component";

@NgModule({
  imports: [BrowserModule],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    SessionListComponent,
    PlayerThumbnailComponent
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule {}