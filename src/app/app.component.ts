import { DataBaseService } from 'src/app/Services/data-base.service';
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate: any;
  constructor(private platform    : Platform,
              private splashScreen: SplashScreen,
              private statusBar   : StatusBar, private database: DataBaseService) 
  {
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  sideMenu()
  {
    this.navigate =
    [
      {
        title : "Undone",
        url   : "/index",
        icon  : "checkmark-outline",
        color : "danger",
      },
      {
        title : "Done",
        url   : "/done",
        icon  : "checkmark-done-outline",
        color : "success"
      },
    ]
  }

  private logOut(){
    this.database.logOut();
  }
}
