import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class OrgService {
    http:any;
    url:String;

    constructor(http:Http) {
        this.http = http;
        this.url = 'http://teamflightclubproject.com/jsons/RSOs.json';
    }

    getOrgs() {
        return this.http.get(this.url)
            .map(res => res.json());
    }
}
