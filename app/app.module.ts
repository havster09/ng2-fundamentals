import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {EventsAppComponent} from './events-app.component'
import {EventListComponent} from "./events/events-list.component";
import {EventThumbnailComponent} from "./events/event-thumbnail.component";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./routes";
import {NavBarComponent} from "./nav/navbar.component";
import {PlayersListComponent} from "./players/player-list.component";

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes, {useHash:true})
    ],
    declarations: [
        NavBarComponent,
        EventsAppComponent,
        EventThumbnailComponent,
        EventListComponent,
        PlayersListComponent
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule {
}