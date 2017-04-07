import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventPage } from '../event/event';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    items: any[];
    constructor(public navCtrl: NavController) {
        this.items = [];
        for(let i = 0; i < 10; i++) {
            this.items.push({
                text: 'Item ' + i,
                id: i
            });
        }
    }

    itemSelected(item) {
        this.navCtrl.push(EventPage, {
            item: item,
        });
    }
}
