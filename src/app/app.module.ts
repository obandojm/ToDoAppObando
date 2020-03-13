import { DataBaseService } from './Services/data-base.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { ModaltodoPageModule } from './pages/modaltodo/modaltodo.module';
import { ProfilePageModule } from './pages/profile/profile.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
     AppRoutingModule, ModaltodoPageModule, ProfilePageModule],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFirestore,
    DataBaseService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
