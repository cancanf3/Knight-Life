import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
Generated class for the Club page.

See http://ionicframework.com/docs/v2/components/#navigation for more info on
Ionic pages and navigation.
*/
@Component({
    selector: 'page-club',
    templateUrl: 'club.html'
})
export class ClubPage {
    item: any;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.item = navParams.get('item');
        if(!this.item.image) {
            this.item.image = "https://static.yocket.in/images/universities/logos/ucf_logo.jpg";
        }
        console.log(this.item);
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ClubPage');
    }

}
