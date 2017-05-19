import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {IEvent} from "./event.model";

@Injectable()
export class EventService {
    constructor(private http: Http){}

    getEvents():Observable<IEvent[]> {
        return this.http.get('/api/events').map((response: Response) => {
            return <IEvent[]>response.json();
        }).catch(this.handleError);
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}