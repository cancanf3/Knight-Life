import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginService } from './login-page-service';

/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login-page',
  templateUrl: 'login-page.html'
})
export class LoginPagePage {

	username: string;
	password: string;
	result: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private loginservice: LoginService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPagePage');
  }


  onSubmit() {
  	this.loginservice.login(this.username, this.password).subscribe(bool => this.result = bool);
  }

}
