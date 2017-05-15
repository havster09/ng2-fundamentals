import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'session-list',
    templateUrl: 'app/events/event-details/session-list.component.html'
})
export class SessionListComponent {
    @Input() sessions:any[];
    @Output() logToParent = new EventEmitter();

    onClick(sessionName) {
        this.logToParent.emit(sessionName);
    }
}
