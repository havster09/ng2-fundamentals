import {Component, OnInit} from '@angular/core';
import {EventService} from "./shared/event.service";

@Component({
    selector:'events-list',
    templateUrl: 'app/events/events-list.component.html'
})
export class EventListComponent implements OnInit{
    private events: any[];
    constructor(private EventService:EventService){}
    ngOnInit():void {
        this.EventService.getEvents().subscribe((events => {
            this.events = events;
        }));
    }


    handleTestClick(event) {
        console.log(event);
    }

    handleMouseOver(greet) {
        console.log(greet);
    }
}
