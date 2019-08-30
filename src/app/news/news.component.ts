import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../shared/school.service';
import { ToastrService } from 'ngx-toastr';
import { AngularFirestore } from '@angular/fire/firestore';
import { News } from '../shared/news.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newsList: News[];

  constructor(public service: SchoolService,
              private firestore: AngularFirestore,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
    this.service.getNews().subscribe(actionArray => {
        this.newsList = actionArray.map(item => {
          return {
            id: item.payload.doc.id,
            ...item.payload.doc.data()
          } as News;
        });
      });
  }
  resetForm(form?: NgForm) {
    if (form != null) {
    form.resetForm();
    }
    this.service.formData = {
      id: null,
      topic: '',
      date: '',
      desc: ''
    };
  }
  onSubmit(form: NgForm) {
    const data = Object.assign({}, form.value);
    delete data.id;
    if (form.value.id == null) {
    this.firestore.collection('newsfeed').add(data);
    this.resetForm(form);
    this.toastr.success('Submitted Successfully' , 'NEWS/EVENTS');
    } else {
    this.firestore.doc('newsfeed/' + form.value.id).update(data);
    this.resetForm(form);
    this.toastr.success('Updated Successfully' , 'NEWS/EVENTS');
    }
  }


  onEdit(news: News) {
    this.service.formData = Object.assign({}, news);
  }
  onDelete(id: string) {
    if (confirm('Are you sure to delete this record')) {
      this.firestore.doc('newsfeed/' + id).delete();
      this.toastr.warning('Deleted successfully', 'NEWS/Notification');
    }
}
}
