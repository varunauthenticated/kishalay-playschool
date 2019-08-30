import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summer',
  templateUrl: './summer.component.html',
  styleUrls: ['./summer.component.css']
})
export class SummerComponent implements OnInit {
  imglnk: any[] = [
    {
      imgpath: '../../../assets/summer/1.JPG',
      progress: true
    },
    {
      imgpath: '../../../assets/summer/2.JPG',
      progress: true
    },
    {
      imgpath: '../../../assets/summer/3.JPG',
      progress: true
    },
    {
      imgpath: '../../../assets/summer/4.JPG',
      progress: true
    },
    {
      imgpath: '../../../assets/summer/5.JPG',
      progress: true
    },
    {
      imgpath: '../../../assets/summer/6.JPG',
      progress: true
    },
    {
      imgpath: '../../../assets/summer/7.JPG',
      progress: true
    },
    {
      imgpath: '../../../assets/summer/8.jpg',
      progress: true
    },
    {
      imgpath: '../../../assets/summer/9.jpg',
      progress: true
    },
    {
      imgpath: '../../../assets/summer/10.jpg',
      progress: true
    },
    {
      imgpath: '../../../assets/summer/11.jpg',
      progress: true
    },
    {
      imgpath: '../../../assets/summer/12.jpg',
      progress: true
    },
    {
      imgpath: '../../../assets/summer/13.jpg',
      progress: true
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
