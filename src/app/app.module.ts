import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp }           from './app.component';
import { EventsPage }        from '../pages/events/events-page';
import { TabsPage }        from '../pages/tabs/tabs';
import { ClubsPage }       from '../pages/clubs/clubs';
import { ClubPage }        from '../pages/club/club';
import { LoginPage }       from '../pages/login-page/login-page';
import { RegisterPage }    from '../pages/login-page/register-page';
import { LoginService }    from '../pages/login-page/login-page-service';
import { EventPage }       from '../pages/event/event';
import { SettingPage }     from '../pages/setting/setting';
import { FaqPage }     from '../pages/faq/faq';
import { StatusBar }       from '@ionic-native/status-bar';
import { SplashScreen }    from '@ionic-native/splash-screen';
import { EventService }    from '../app/services/event.service';
import { OrgService }      from '../app/services/org.service';
import { DashboardPage }   from '../pages/dashboard/dashboard';
import { CalendarPage }            from '../pages/calendar/calendar';
import { DashBoardService }        from '../pages/dashboard/dashboard.service';

@NgModule({
  declarations: [
    MyApp,
    EventsPage,
    TabsPage,
    LoginPage,
    EventPage,
    SettingPage,
    ClubsPage,
    ClubPage,
    RegisterPage,
    FaqPage,
    DashboardPage,
    CalendarPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EventsPage,
    TabsPage,
    LoginPage,
    EventPage,
    SettingPage,
    ClubsPage,
    ClubPage,
    RegisterPage,
    FaqPage,
    DashboardPage,
    CalendarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginService,
    EventService,
    OrgService,
    DashBoardService

  ]
})
export class AppModule {}
