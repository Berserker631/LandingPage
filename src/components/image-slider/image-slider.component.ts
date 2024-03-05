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
    {url: '../../assets/banner5.jpg', title: 'portrait', leyend: {header: 'Hickory Industries', body: 'LEATHER AND FABRIC COVERS INDUSTRY'}, first: true},
    {url: '../../assets/banner3.jpg', title: 'leathers', leyend: {
      header: '¿Quieres Trabajar?',
      body: 'Estamos ingresando Personal en todas las areas, no necesitas experiencia, tenemos horarios flexibles, nosotros te capacitamos. Todos los beneficios de ley, Tenemos transporte gratis para el personal!',
      footer: 'Interesados solo'
    }},
    {url: '../../assets/banner1.jpg', title: 'experience', leyend: {
      header: '¿No tienes experiencia?',
      body: 'Nosotros te capacitamos!',
      footer: 'Interesados solo'
    }},
  ]

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
