import { Component }                   from '@angular/core';
import { NavController, NavParams }    from 'ionic-angular';
import { LoginService }                from './login-page-service';
/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'register-page',
  templateUrl: 'register-page.html'
})
export class RegisterPage {

	username = '';
	password = '';
	check: boolean;
	registering = false;


	constructor(public navCtrl: NavController, 
                private loginservice: LoginService) {
	}

	reset() {
    	this.check = false;
  	}


	onRegister() {
		this.check = false;
		this.registering = true;
		this.loginservice.register(this.username, this.password).subscribe(msg => {

	      if (msg == "Username already exist") {
	      	this.check = true;
	      	this.registering = false;
	      }
	      else {
	        this.navCtrl.pop();
	        this.check = false;
	        this.registering = false;
	      }
       	
    });
		console.log("sale");
	}



}