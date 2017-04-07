import { Component }                   from '@angular/core';
import { NavController, NavParams }    from 'ionic-angular';
import { LoginService }                from './login-page-service';
import { TabsPage }                    from '../tabs/tabs';
/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login-page',
  templateUrl: 'login-page.html'
})
export class LoginPage {

	username = '';
	password = '';

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private loginservice: LoginService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPagePage');
  }


  onSubmit() {
  	this.loginservice.login(this.username, this.password);
    this.navCtrl.push(TabsPage);

  }

}
