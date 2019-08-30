import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
imglnk: any[] = [
  {
    imgpath: '../../assets/galery/1.JPG',
    progress: true
  },
  {
    imgpath: '../../assets/galery/2.JPG',
    progress: true
  },
  {
    imgpath: '../../assets/galery/3.JPG',
    progress: true
  },
  {
    imgpath: '../../assets/galery/4.JPG',
    progress: true
  },
  {
    imgpath: '../../assets/galery/5.JPG',
    progress: true
  },
  {
    imgpath: '../../assets/galery/6.JPG',
    progress: true
  },
  {
    imgpath: '../../assets/galery/7.JPG',
    progress: true
  },
  {
    imgpath: '../../assets/galery/8.JPG',
    progress: true
  },
  {
    imgpath: '../../assets/galery/9.JPG',
    progress: true
  },
  {
    imgpath: '../../assets/galery/10.JPG',
    progress: true
  },
  {
    imgpath: '../../assets/galery/11.JPG',
    progress: true
  },
  {
    imgpath: '../../assets/galery/12.JPG',
    progress: true
  },
  {
    imgpath: '../../assets/galery/13.JPG',
    progress: true
  },
  {
    imgpath: '../../assets/galery/14.JPG',
    progress: true
  },
  {
    imgpath: '../../assets/galery/15.JPG',
    progress: true
  },
  {
    imgpath: '../../assets/galery/16.JPG',
    progress: true
  },
  {
    imgpath: '../../assets/galery/17.JPG',
    progress: true
  },
  {
    imgpath: '../../assets/galery/18.JPG',
    progress: true
  },
  {
    imgpath: '../../assets/galery/19.JPG',
    progress: true
  },
  {
    imgpath: '../../assets/galery/20.JPG',
    progress: true
  },
  {
    imgpath: '../../assets/galery/21.JPG',
    progress: true
  },
  {
    imgpath: '../../assets/galery/22.JPG',
    progress: true
  },
  {
    imgpath: '../../assets/galery/23.JPG',
    progress: true
  },
  {
    imgpath: '../../assets/galery/24.JPG',
    progress: true
  },
  {
    imgpath: '../../assets/galery/25.JPG',
    progress: true
  },
  {
    imgpath: '../../assets/galery/26.JPG',
    progress: true
  },
  {
    imgpath: '../../assets/galery/27.JPG',
    progress: true
  },
  {
    imgpath: '../../assets/galery/28.JPG',
    progress: true
  },
  {
    imgpath: '../../assets/galery/29.JPG',
    progress: true
  },
  {
    imgpath: '../../assets/galery/30.JPG',
    progress: true
  },
  {
    imgpath: '../../assets/galery/31.JPG',
    progress: true
  },
  {
    imgpath: '../../assets/galery/32.JPG',
    progress: true
  },
  {
    imgpath: '../../assets/galery/33.JPG',
    progress: true
  },
  {
    imgpath: '../../assets/galery/34.jpg',
    progress: true
  },
  {
    imgpath: '../../assets/galery/35.jpg',
    progress: true
  },
  {
    imgpath: '../../assets/galery/36.jpg',
    progress: true
  },
  {
    imgpath: '../../assets/galery/37.jpg',
    progress: true
  },
  {
    imgpath: '../../assets/galery/38.jpg',
    progress: true
  },
  {
    imgpath: '../../assets/galery/39.jpg',
    progress: true
  },
  {
    imgpath: '../../assets/galery/40.jpg',
    progress: true
  },
  {
    imgpath: '../../assets/galery/41.jpg',
    progress: true
  },
  {
    imgpath: '../../assets/galery/42.jpg',
    progress: true
  },
  {
    imgpath: '../../assets/galery/43.jpg',
    progress: true
  },
  {
    imgpath: '../../assets/galery/44.jpg',
    progress: true
  },
  {
    imgpath: '../../assets/galery/45.jpg',
    progress: true
  },
  {
    imgpath: '../../assets/galery/46.jpg',
    progress: true
  },
  {
    imgpath: '../../assets/galery/47.jpg',
    progress: true
  },
  {
    imgpath: '../../assets/galery/48.jpg',
    progress: true
  },
  {
    imgpath: '../../assets/galery/49.jpg',
    progress: true
  },
  {
    imgpath: '../../assets/galery/50.jpg',
    progress: true
  },
  {
    imgpath: '../../assets/galery/51.jpg',
    progress: true
  },
  {
    imgpath: '../../assets/galery/52.jpg',
    progress: true
  },
  {
    imgpath: '../../assets/galery/53.jpg',
    progress: true
  },
  {
    imgpath: '../../assets/galery/54.jpg',
    progress: true
  },
  {
    imgpath: '../../assets/galery/55.jpg',
    progress: true
  },
  {
    imgpath: '../../assets/galery/56.jpg',
    progress: true
  },
  {
    imgpath: '../../assets/galery/57.jpg',
    progress: true
  },
  {
    imgpath: '../../assets/galery/58.jpg',
    progress: true
  },
  {
    imgpath: '../../assets/galery/59.jpg',
    progress: true
  },
  {
    imgpath: '../../assets/galery/60.jpg',
    progress: true
  },
  {
    imgpath: '../../assets/galery/61.jpg',
    progress: true
  },
  {
    imgpath: '../../assets/galery/62.jpg',
    progress: true
  },
  {
    imgpath: '../../assets/galery/63.jpg',
    progress: true
  },
  {
    imgpath: '../../assets/galery/64.jpg',
    progress: true
  },
  {
    imgpath: '../../assets/galery/65.jpg',
    progress: true
  },
  {
    imgpath: '../../assets/galery/66.jpg',
    progress: true
  },
  {
    imgpath: '../../assets/galery/67.jpg',
    progress: true
  },
  {
    imgpath: '../../assets/galery/68.jpg',
    progress: true
  },
  {
    imgpath: '../../assets/galery/69.jpg',
    progress: true
  },
  {
    imgpath: '../../assets/galery/70.jpg',
    progress: true
  },
  {
    imgpath: '../../assets/galery/71.jpg',
    progress: true
  },
  {
    imgpath: '../../assets/galery/72.jpg',
    progress: true
  },
  {
    imgpath: '../../assets/galery/73.jpg',
    progress: true
  },
  {
    imgpath: '../../assets/galery/74.jpg',
    progress: true
  },
  {
    imgpath: '../../assets/galery/75.jpg',
    progress: true
  },
  {
    imgpath: '../../assets/galery/76.jpg',
    progress: true
  },
  {
    imgpath: '../../assets/galery/77.jpg',
    progress: true
  },
  {
    imgpath: '../../assets/galery/78.jpg',
    progress: true
  },
  {
    imgpath: '../../assets/galery/79.jpg',
    progress: true
  },
  {
    imgpath: '../../assets/galery/80.jpg',
    progress: true
  }
];

constructor() { }

ngOnInit() {
}

}
