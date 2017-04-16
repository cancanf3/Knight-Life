import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class EventService {
    http:any;
    url:String;

    constructor(http:Http) {
        this.http = http;
        this.url = 'http://sample-env-1.bpxnebd5xy.us-east-1.elasticbeanstalk.com/knightlife/rest/events';
    }

    getEvents() {
        return this.http.get(this.url)
            .map(res => res.json());
    }
}
