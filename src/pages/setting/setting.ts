import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginService } 				 from '../login-page/login-page-service';
/*
  Generated class for the Setting page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})
export class SettingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
  			  private loginservice: LoginService ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

  logout(){
  	this.loginservice.logout();
  }

}
