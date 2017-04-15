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
  check: boolean;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private loginservice: LoginService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPagePage');
  }


  onSubmit() {
    this.check = false;
  	this.loginservice.login(this.username, this.password).subscribe( msg => {
      if (msg == 'false')
        this.check = true;
      else
        this.navCtrl.push(TabsPage);  
       
    });
  }

  reset() {
    this.check = false;
  }

}
