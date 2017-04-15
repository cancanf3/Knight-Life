import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { LoginPage }  from '../login-page/login-page';
import { App } 		  from 'ionic-angular';

import 'rxjs/add/operator/map';




@Injectable()
export class LoginService {
	token: string;
	constructor(http: Http, public app: App) {}

	login(username: string, password:string): Observable<string> {
		if (username === 'test' && password === 'test') {
			this.token = 'test';
			localStorage.setItem('CurrentUser', this.token);
			return Observable.create( observer => {
				observer.next(this.token);
				observer.complete();
			});
		}
		else
			return Observable.create( observer => {
				observer.next('false');
				observer.complete();
			});
			
	}	

	logout() {
		localStorage.removeItem('CurrentUser');
		this.app.getRootNav().setRoot(LoginPage);
	}
}