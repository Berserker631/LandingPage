import { CommonModule } from "@angular/common";
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

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
    {
      url: '../../assets/banner5.jpg',
      title: 'leather-portrait',
      leyend: {
        big_Title: 'Hickory DR',
        slogan: '',
        lit_Title: '',
        big_Subtitle: '',
        lit_Subtitle: '',
        image: '../../assets/hw.gif',
        footer: ''
      }
    },

    {
      url: '../../assets/banner1.jpg',
      title: 'experience',
      leyend: {
        big_Title: '',
        lit_Title: '¿No tienes experiencia?',
        big_Subtitle: 'Nosotros te capacitamos',
        lit_Subtitle: '',
        image: '',
        footer: ''
      }
    },
  ]

  ngOnInit() {
    this.onChangeImage();
  }

  onChangeImage() {
    // setInterval(() => {
      if (this.vaCurrentSlide < this.arSlides.length - 1) {
        this.vaCurrentSlide++;
      }
      else {
        this.vaCurrentSlide = 0
      }
    // }, 10000)
  }

  onPreviousClick() {
    const previous = this.vaCurrentSlide - 1;
    this.vaCurrentSlide = previous < 0 ? this.arSlides.length - 1 : previous
  }

  onNextClick() {
    const next = this.vaCurrentSlide + 1;
    this.vaCurrentSlide = next === this.arSlides.length ? 0 : next;
  }

}
