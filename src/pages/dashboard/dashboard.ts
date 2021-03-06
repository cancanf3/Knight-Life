import { Component } 					from '@angular/core';
import { NavController, NavParams } 	from 'ionic-angular';
import { ClubPage } 					from '../club/club';
import { DashBoardService }  			from './dashboard.service';
import { Club } from '../clubs/Club';


/*
  Generated class for the Dashboard page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {

	items: any[];
    clubs: Club[];
    clubsInitial: Club[];
    searching: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dashboardservice:DashBoardService) {
  }

	ionViewDidLoad() {
	    console.log('ionViewDidLoad DashboardPage');
	}


    itemSelected(item) {
        this.navCtrl.push(ClubPage, {
            item: item,
        });
    }

    ionViewWillEnter() {
        console.log('cargando');
        this.clubs = [];
        this.clubsInitial = [];
        this.searching = '';
        this.getOrgs();
    }

    getOrgs() {
        this.dashboardservice.getOrgs().subscribe(response => {
            this.items = response;
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
            this.clubsInitial.push(club);
        }
    }

    removeItem(name, slidingitem) {
        slidingitem.close();
        this.dashboardservice.defavorite(name).subscribe( response => {

            for ( var i = 0 ; i < this.clubs.length ; i++ ) {
                if (this.clubs[i].name == name )
                    this.clubs.splice(i,1);
            } 


            // for ( let club of this.clubs )
            //     if (club.name == name )
            //         this.clubs.pop(club);

        })
    }

    search(club) {
        this.clubs = this.clubsInitial;
        console.log("Parameter:");
        console.log(club);
        var value = club.path[0].value;

        if(value == undefined) {
            return;
        }

        // if the value is an empty string don't filter the items
        if (value.trim() == '') {
            return;
        }

        this.clubs = this.clubs.filter((v) => {
            if(v.name.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                return true;
            }
            if(v.description.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                return true;
            }
            return false;
        })
    }
}

