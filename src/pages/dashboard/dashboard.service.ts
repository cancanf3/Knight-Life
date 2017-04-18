import {Injectable} from '@angular/core';
import { Http, Headers, RequestOptions }  from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DashBoardService {
    http: any;
    url: string;

    constructor(http:Http) {
        this.http = http;
        this.url = 'http://sample-env-1.bpxnebd5xy.us-east-1.elasticbeanstalk.com//knightlife/rest/organizations/';
    }

    getOrgs() {
        return this.http.get(this.url+localStorage.getItem("CurrentUser"))
            .map(res => res.json());
    }

    defavorite(name) {
         
        var options = new RequestOptions({
              headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
              })
        });

        return this.http.post(
          this.url+"defavorite/"+localStorage.getItem("CurrentUser"),"organization="+name,
          options).map(res => {
              return res;
          });
    }
}