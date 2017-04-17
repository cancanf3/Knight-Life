import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp }           from './app.component';
import { AboutPage }       from '../pages/about/about';
import { HomePage }        from '../pages/home/home';
import { TabsPage }        from '../pages/tabs/tabs';
import { ClubsPage }       from '../pages/clubs/clubs';
import { ClubPage }        from '../pages/club/club';
import { LoginPage }       from '../pages/login-page/login-page';
import { RegisterPage }    from '../pages/login-page/register-page';
import { LoginService }    from '../pages/login-page/login-page-service';
import { EventPage }       from '../pages/event/event';
import { SettingPage }     from '../pages/setting/setting';
import { StatusBar }       from '@ionic-native/status-bar';
import { SplashScreen }    from '@ionic-native/splash-screen';
import { EventService }    from '../app/services/event.service';
import { OrgService }      from '../app/services/org.service';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    LoginPage,
    EventPage,
    SettingPage,
    ClubsPage,
    ClubPage,
    RegisterPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    LoginPage,
    EventPage,
    SettingPage,
    ClubsPage,
    ClubPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginService,
    EventService,
    OrgService

  ]
})
export class AppModule {}
