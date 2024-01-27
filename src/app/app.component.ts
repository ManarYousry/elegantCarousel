import { Component } from '@angular/core';
import { CarouselImage } from './Model/carouselImageObj';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'elegantCarousel';
  slides:Array<CarouselImage> = [
    { imgSrc: '/assets/image/banner-breadcrumb-doctor1.jpg', imgAlt: 'doctor1' },
    { imgSrc: '/assets/image/banner-breadcrumb-doctor2.jpg', imgAlt: 'doctor2' },
    { imgSrc: '/assets/image/banner-breadcrumb-doctor3.jpg', imgAlt: 'doctor3' },
    { imgSrc: '/assets/image/banner-breadcrumb-doctor4.jpg', imgAlt: 'doctor4' },
    { imgSrc: '/assets/image/banner-breadcrumb-doctor5.jpg', imgAlt: 'doctor5' },
  ];
}
