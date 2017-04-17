import { Component, OnInit }                   from '@angular/core';
import { NavController, NavParams, App }    from 'ionic-angular';
import { LoginService }                from './login-page-service';
import { TabsPage }                    from '../tabs/tabs';
import { RegisterPage }                from './register-page';
/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login-page',
  templateUrl: 'login-page.html'
})
export class LoginPage implements OnInit {

	username = '';
	password = '';
  check: boolean;
  pushPage = RegisterPage;
  login = false;
  loginHeader = false;

  constructor(public navCtrl: NavController, 
              public app: App, 
              private loginservice: LoginService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPagePage');
    this.login = false;
    this.loginHeader = false;
  }

  ngOnInit() {
    if ("false" != localStorage.getItem("CurrentUser") && undefined != localStorage.getItem("CurrentUser"))
      this.navCtrl.push(TabsPage);
  }

  onSubmit() {
    this.check = false;
    this.login = true;
    this.loginHeader = true;
  	this.loginservice.login(this.username, this.password).subscribe( msg => {
      if ("false" == localStorage.getItem("CurrentUser")) {
        this.check = true;
        this.login = false;
      }
      else {
        this.navCtrl.push(TabsPage);
      }
             
    });
  }

  reset() {
    this.check = false;
  }

}
