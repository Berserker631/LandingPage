import { CommonModule } from "@angular/common";
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  standalone: true,
  imports: [RouterOutlet, CommonModule, MatIconModule],
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
  animations: [
    trigger('slide', [

    ])
  ]
})
export class ImageSliderComponent implements OnInit {
  vaCurrentSlide: number = 0;

  arSlides = [
    {url: '../../assets/banner5.png', title: 'portrait'},
    // {url: '../../assets/banner2.png', title: 'money'},
    // {url: '../../assets/banner1.png', title: 'TimeIsMoney'}
  ]
  constructor() { }

  ngOnInit() {
    this.onChangeImage();
  }

  onChangeImage(){
    setInterval(()=>{
      if (this.vaCurrentSlide < this.arSlides.length - 1) {
        this.vaCurrentSlide++;
      }
      else {
        this.vaCurrentSlide = 0
      }
    }, 5000)
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
