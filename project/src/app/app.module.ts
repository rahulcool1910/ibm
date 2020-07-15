import { environment } from './../environments/environment.prod';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyDW0MJ24FVO78EkOfVZr15AjlWOv-wCF7U',
      authDomain: 'ibm-project-11077.firebaseapp.com',
      databaseURL: 'https://ibm-project-11077.firebaseio.com',
      projectId: 'ibm-project-11077',
      storageBucket: 'ibm-project-11077.appspot.com',
      messagingSenderId: '321465652249',
      appId: '1:321465652249:web:0f104a5ff329554d934688',
      measurementId: 'G-958N923L87',
    }),
    AngularFirestoreModule.enablePersistence(),
    AngularFireDatabaseModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
