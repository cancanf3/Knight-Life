import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

/*
Generated class for the SubmitEv page.

See http://ionicframework.com/docs/v2/components/#navigation for more info on
Ionic pages and navigation.
*/
@Component({
    selector: 'page-submit-ev',
    templateUrl: 'submit-ev.html'
})
export class SubmitEvPage {
    title: String;
    description: String;
    location: String;
    date: Date;

    constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
        this.title = '';
        this.description = '';
        this.location = '';
        this.date = new Date();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SubmitEvPage');
    }

    showAlert() {
        let alert = this.alertCtrl.create({
            title: 'Request submitted!',
            subTitle: 'Your request has been sent to a SGA representative, once it\'s approved, it\'ll be added to the events list',
            buttons: ['OK']
        });
        this.title = '';
        this.description = '';
        this.location = '';
        this.date = new Date();
        alert.present();
    }

}
