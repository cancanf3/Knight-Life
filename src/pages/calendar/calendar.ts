import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventPage } from '../event/event';
import { EventService } from '../../app/services/event.service';
import { Event } from './Event';

@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html'
})
export class CalendarPage {

  items: any[];
  eventss: Event[][];
  eventsInitial: Event[];
  searched: String;
  days: Date[];

  constructor(public navCtrl: NavController, private eventService:EventService) {
      this.eventss = [[],[]];
      this.eventsInitial = [];
      this.searched = '';
      this.days = [];

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
      var daysToAdd = 30;
      var endDate = new Date();
      var j = 0;
      endDate.setDate(today.getDate() + daysToAdd);
      var currentBlockDate = new Date();
      //currentBlockDate.getDate();

      this.eventss[j] = new Array();
      j++;

      debugger;
      for(var i of this.items) {

        var event = new Event();
        event.title = i.title;
        event.owner = i.owner;
        event.email = i.email;
        event.tags = i.tags;
        event.date = new Date(i.date);
        event.day = new Date(i.date).getDay();
        event.dateEnd = new Date(i.dateEnd);
        event.eid = i.eid;
        event.location = i.location;

        this.days[i] = new Date(i.date);

        if(event.date >= today && currentBlockDate.getDay() == event.day && event.date < endDate) {
          this.eventss[j].push(event);
          this.eventsInitial.push(event);
        }

        else if(event.date >= today && event.day < endDate.getDay()){
          this.eventss[j] = new Array();
          this.eventss[j].push(event);
          this.eventsInitial.push(event);
          j++;
          currentBlockDate = event.date;
        }
      }debugger;
      //console.log(this.events[0]);
  }

  /*search(event) {
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
  }*/
}
