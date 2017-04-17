import { Injectable } 				from '@angular/core';
import { Http, Headers, Response, RequestOptions, URLSearchParams }  from '@angular/http';
import { Observable } 				from 'rxjs/Observable';
import { LoginPage }  				from '../login-page/login-page';
import { App } 		  				from 'ionic-angular';

import 'rxjs/add/operator/map';




@Injectable()
export class LoginService {
	token: string;
	http;
	url = "http://sample-env-1.bpxnebd5xy.us-east-1.elasticbeanstalk.com/knightlife/rest/auth/";
	payload;

	constructor(http: Http, public app: App) {
		this.http = http;
	}

	login(username: string, password:string): Observable<string> {
		this.payload = "username="+username+"&"+"password="+password;

		var options = new RequestOptions({
      		headers: new Headers({
        	'Content-Type': 'application/x-www-form-urlencoded'
      		})
    	});

		return this.http.post(
		  this.url+"login",this.payload,
          options).map(res => {


          	let body = res.text(); 
          	if (body == "Username or Password Incorrect")
          		localStorage.setItem('CurrentUser', "false");
          	else
          		localStorage.setItem('CurrentUser', body); 
          	return body;
          });
			
	}


	register(username: string, password:string): Observable<string> {
		this.payload = "username="+username+"&"+"password="+password;

		var options = new RequestOptions({
      		headers: new Headers({
        	'Content-Type': 'application/x-www-form-urlencoded'
      		})
    	});

		return this.http.post(
		  this.url+"create",this.payload,
          options).map(res => {
          	return res.text();
          });
			
	}

	createSession(data) {
		
		return data;
	}	

	logout() {
		localStorage.removeItem('CurrentUser');
		this.app.getRootNav().setRoot(LoginPage);
	}
}