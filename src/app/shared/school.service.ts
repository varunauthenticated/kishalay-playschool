import { Injectable } from '@angular/core';
import { News } from './news.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  formData: News;
  user = 'abcd';
  password = '123456';
  valid = false;

  getNews() {
    return this.firestore.collection('newsfeed').snapshotChanges();
  }

  constructor(private firestore: AngularFirestore) {}

  checkUser(usr: string, pwd: string) {
    if (usr === this.user && pwd === this.password) {
    this.valid = true;
    }
  }
}
