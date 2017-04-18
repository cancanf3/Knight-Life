import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventPage } from '../event/event';
import { EventService } from '../../app/services/event.service';
import { Event } from './Event';
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    items: any[];
    events: Event[];
    eventsInitial: Event[];
    searched: String;

    constructor(public navCtrl: NavController, private eventService:EventService) {
        this.events = [];
        this.eventsInitial = [];
        this.searched = '';
    }

    itemSelected(item) {
        this.navCtrl.push(EventPage, {
            item: item,
        });
    }

    ngOnInit() {
        this.getEvents();
    }

    getEvents() {
        this.eventService.getEvents().subscribe(response => {
            this.items = response;
            console.log(response[0]);
            this.createEvents();
        });
    }

    createEvents() {
        var today = new Date();
        for(var i of this.items) {
            var event = new Event();
            event.title = i.title;
            event.description = i.description;
            event.owner = i.owner;
            event.email = i.email;
            event.tags = i.tags;
            event.date = new Date(i.date);
            event.dateEnd = new Date(i.dateEnd);
            event.eid = i.eid;
            event.location = i.location;

            if(event.date > today) {
                this.events.push(event);
                this.eventsInitial.push(event);
            }
        }
        //console.log(this.events[0]);
    }

    search(event) {
        this.events = this.eventsInitial;
        var value = event.path[0].value;

        if(value == undefined) {
            return;
        }

        // if the value is an empty string don't filter the items
        if (value.trim() == '') {
            return;
        }

        this.events = this.events.filter((v) => {
            if(v.title.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                return true;
            }
            if(v.description.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                return true;
            }
            return false;
        })
    }
}
