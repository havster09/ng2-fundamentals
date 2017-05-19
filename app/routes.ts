import {Routes} from "@angular/router";
import {EventListComponent} from "./events/events-list.component";
import {PlayersListComponent} from "./players/player-list.component";
import {JunkComponent} from "./junk/junk.component";
import {GamesComponent} from "./games/games.component";
export const appRoutes: Routes = [
    {path: 'events', component: EventListComponent},
    {path: 'players', component: PlayersListComponent},
    {path: 'games', component: GamesComponent},
    {path: 'junk', component: JunkComponent},
    {path: '', redirectTo: '/players', pathMatch: 'full'},
];