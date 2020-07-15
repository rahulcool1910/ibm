import { environment } from './../../environments/environment.prod';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { MessageComponentModule } from '../message/message.module';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessageComponentModule,
    HomePageRoutingModule,
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
    AngularFireDatabaseModule,
    AngularFirestoreModule.enablePersistence(),
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300,
    }),
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
