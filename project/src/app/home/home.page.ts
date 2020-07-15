import { Component, OnInit } from '@angular/core';
import { DataService, Message } from '../services/data.service';
// import f from 'firebase/app'
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  loading: boolean = false;
  constructor(private afs: AngularFirestore) {}
  colors: any[] = [
    ['#EB2B2B', '#E99494'],
    ['#00FFDE', '#8EECDF'],
    ['#8306FF', '#C39FE6'],
  ];
  present_date = '';
  data: any = {
    positive_percentage: 30,
    negative_percentage: 50,
    neutral_percentage: 20,
  };
  ngOnInit() {
    this.present_date = new Date().toISOString();
    this.afs
      .doc(`tweets/${this.present_date.slice(0, 10)}`)
      .valueChanges()
      .subscribe((fetched) => {
        this.data = fetched;
        this.loading = true;
      });
    // this.afs.doc(`tweets/2020-06-22`).set({
    //   negative_percentage: 25,
    //   neutral_percentage: 45,
    //   positive_percentage: 30,
    // });
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  date(eve: any) {
    this.afs
      .doc(`tweets/${eve.detail.value.slice(0, 10)}`)
      .valueChanges()
      .subscribe((fetched_data) => {
        this.data = fetched_data;
        console.log(this.data);
      });
  }
}
