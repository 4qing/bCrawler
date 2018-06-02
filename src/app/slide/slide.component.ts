import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements AfterViewInit {
  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 4,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: false,
    autoplay: true,
  };
  constructor() { }

  ngAfterViewInit() {}
    
}
