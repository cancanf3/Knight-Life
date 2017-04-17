import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ClubPage } from '../club/club';
import { OrgService } from '../../app/services/org.service';
import { Club } from './Club';

@Component({
    selector: 'page-clubs',
    templateUrl: 'clubs.html'
})
export class ClubsPage {

    items: any[];
    clubs: Club[];

    constructor(public navCtrl: NavController, private orgService:OrgService) {
        this.clubs = [];
        console.log("baby");
    }

    itemSelected(item) {
        this.navCtrl.push(ClubPage, {
            item: item,
        });
        console.log('pushed item:');
        console.log(item);
    }

    ngOnInit() {
        this.getOrgs();
        console.log('mama');
    }

    getOrgs() {
        this.orgService.getOrgs().subscribe(response => {
            this.items = response;
            console.log(response[0]);
            this.createOrgs();
        });
    }

    createOrgs() {
        for(var i of this.items) {
            var club = new Club();
            club.name = i.name;
            club.description = i.description;
            club.owner = i.owner;
            club.image = i.image;
            this.clubs.push(club);
        }
        //console.log(this.clubs[0]);
    }

}
