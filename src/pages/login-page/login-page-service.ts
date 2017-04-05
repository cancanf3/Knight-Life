import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';




@Injectable()
export class LoginService {
	token: string;
	constructor(http: Http) {}

	login(username: string, password:string): Observable<boolean> {
		if (username === 'test' && password === 'test') {
			this.token = 'test';
			localStorage.setItem('CurrentUser', this.token);
			return Observable.create(true);
		}
		else
			return Observable.create(false);		
	}
}