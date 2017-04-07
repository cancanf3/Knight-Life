import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';




@Injectable()
export class LoginService {
	token: string;
	constructor(http: Http) {}

	login(username: string, password:string): Observable<string> {
		if (username === 'test' && password === 'test') {
			this.token = 'test';
			localStorage.setItem('CurrentUser', this.token);
		}
		return Observable.create("success");
	}	

	logout() {
		localStorage.removeItem('CurrentUser');
	}
}