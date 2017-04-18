import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginService } 				 from '../login-page/login-page-service';
import { FaqPage } from '../faq/faq';
/*
  Generated class for the Setting page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
  //entryComponents:[ FaqPage ]
})
export class SettingPage {

    notf: String;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  			  private loginservice: LoginService ) {
                  this.notf = 'Disable';
              }

              

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

  logout(){
  	this.loginservice.logout();
  }

  goToFAQ() {
    this.navCtrl.push(FaqPage);
  }

  toggleTitle() {
      if(this.notf == 'Enable') {
          this.notf = 'Disable';
      }
      else {
          this.notf = 'Enable';
      }
  }

}
