import {Routes} from "@angular/router";
import {EventListComponent} from "./events/events-list.component";
import {PlayersListComponent} from "./players/player-list.component";
export const appRoutes: Routes = [
    {path: 'events', component: EventListComponent},
    {path: 'players', component: PlayersListComponent},
    {path: '', redirectTo: '/players', pathMatch: 'full'},
];