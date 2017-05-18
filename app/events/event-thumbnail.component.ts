import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    template: `
        <div class="well hoverwell thumbnail">
            <h2>{{event.name}}</h2>
            <div>Date: {{event.date}}</div>
            <div>Time: {{event.time}}</div>
            <div>Price: \${{event.price}}</div>
            <div>
                <span>Location: {{event.location.address}}</span>
                <span class="pad-left">{{event.location.city}}, {{event.location.country}}</span>
            </div>
            <session-list [sessions]="event.sessions"  (logToParent)="handleLogToParent($event)"></session-list>
            <div>
                <span>Location: {{event.location.address}}</span>
                <span class="pad-left">{{event.location.city}}, {{event.location.country}}</span>
                <button class="btn btn-primary" (click)="handleClickMe($event)">Click</button>
                <button class="btn btn-primary" (click)="eventClick.emit('foo')">Foo</button>
                <button class="btn btn-primary" (mouseover)="eventMouseOver.emit(event.name)">MouseOver</button>
            </div>
        </div>
    `,
    styles: [`
        .pad-left {margin-left: 10px;}
        .well div:hover {color:red;}
    `]
})
export class EventThumbnailComponent {
    @Input() event: any;
    @Output() eventClick = new EventEmitter();
    @Output() eventMouseOver = new EventEmitter();
    somePoo:any = Math.floor(Math.random() * 10);
    handleClickMe($event) {
        this.eventClick.emit({
            browserEvent:$event,
            eventData:this.event
        });
    }

    logPoo(amount) {
        console.log(`${amount} poo`);
    }

    handleLogToParent(event) {
        console.log(event)
    }
}
