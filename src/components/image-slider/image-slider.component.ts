import { CommonModule } from "@angular/common";
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

@Component({
  standalone: true,
  imports: [RouterOutlet, CommonModule, MatIconModule],
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
})
export class ImageSliderComponent implements OnInit {
  vaCurrentSlide: number = 0;

  arSlides = [
    {url: '../../assets/banner1.png', title: 'TimeIsMoney'},
    {url: '../../assets/banner2.png', title: 'Chart'},
    {url: '../../assets/banner3.png', title: 'Worker'}
  ]
  constructor() { }

  ngOnInit() {
    this.onChangeImage();
  }

  onChangeImage(){
    // setInterval(()=>{
    //   if (this.vaCurrentSlide < 2) {
    //     this.vaCurrentSlide++;
    //   }
    //   else {
    //     this.vaCurrentSlide = 0
    //   }
    // }, 5000)
  }

  onPreviousClick(){
    const previous = this.vaCurrentSlide - 1;
    this.vaCurrentSlide = previous < 0 ? this.arSlides.length - 1 : previous
  }

  onNextClick(){
    const next  = this.vaCurrentSlide + 1;
    this.vaCurrentSlide = next === this.arSlides.length ? 0 : next;
  }
}
