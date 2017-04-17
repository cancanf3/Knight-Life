import { Component } from '@angular/core';
import { DashboardPage } from '../dashboard/dashboard';
import { HomePage } 	from '../home/home';
import { LoginPage } 	from '../login-page/login-page';
import { SettingPage }  from '../setting/setting';
import { ClubsPage }    from '../clubs/clubs';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = DashboardPage;
  tab2Root: any = HomePage;
  tab3Root: any = ClubsPage;
  tab4Root: any = SettingPage;

  constructor() {

  }
}
