import {Injectable} from '@angular/core';
import { Http, Headers, RequestOptions }  from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class OrgService {
    http:any;
    url:String;

    constructor(http:Http) {
        this.http = http;
        this.url = 'http://sample-env-1.bpxnebd5xy.us-east-1.elasticbeanstalk.com/knightlife/rest/organizations';
    }

    getOrgs() {
        return this.http.get(this.url)
            .map(res => res.json());
    }


    favorite(name) {
         
        var options = new RequestOptions({
              headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
              })
        });

        return this.http.post(
          this.url+"/favorite/"+localStorage.getItem("CurrentUser"),"organization="+name,
          options).map(res => {
              return res;
          });
    }
}
