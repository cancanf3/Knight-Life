import { Component, ViewChild } from '@angular/core';
import { NavController }    from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login-page/login-page';
import { EventService } from './services/event.service';

@Component({
  templateUrl: 'app.html',
  providers: [EventService]

})
export class MyApp {
  @ViewChild('myNav') nav: NavController
  public rootPage = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
