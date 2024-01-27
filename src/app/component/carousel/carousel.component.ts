import { Component, Input, OnInit } from '@angular/core';
import { CarouselImage } from 'src/app/Model/carouselImageObj';

import { trigger, transition, animate, style } from '@angular/animations';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0.4 }),
        animate('1.5s', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class CarouselComponent implements OnInit {
  @Input() slides: CarouselImage[] = [];

  currentIndex: number = 0;
  constructor() { }

  ngOnInit(): void {
  }



  Previous(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide
      ? this.slides.length - 1
      : this.currentIndex - 1;

    this.currentIndex = newIndex;
  }

  Next(): void {
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;

    this.currentIndex = newIndex;
  }
  navigateToSlide(slideIndex: number): void {
    this.currentIndex = slideIndex;
  }
  getCurrentSlideUrl() {
    return `url('${this.slides[this.currentIndex].imgSrc}')`;
  }
}
