import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import 'rxjs/Rx';

import {EventsAppComponent} from './events-app.component'
import {EventListComponent} from "./events/events-list.component";
import {EventThumbnailComponent} from "./events/event-thumbnail.component";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./routes";
import {NavBarComponent} from "./nav/navbar.component";
import {PlayersListComponent} from "./players/player-list.component";
import {SessionListComponent} from "./events/event-details/session-list.component";
import {JunkComponent} from "./junk/junk.component";
import {GamesComponent} from "./games/games.component";
import {EventService} from "./events/shared/event.service";
import {HttpModule} from "@angular/http";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(appRoutes, {useHash:true})
    ],
    declarations: [
        NavBarComponent,
        EventsAppComponent,
        EventThumbnailComponent,
        EventListComponent,
        SessionListComponent,
        JunkComponent,
        GamesComponent,
        PlayersListComponent
    ],
    providers: [
        EventService
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule {
}