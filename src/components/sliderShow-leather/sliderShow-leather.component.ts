import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sliderShow-leather',
  templateUrl: './sliderShow-leather.component.html',
  styleUrls: ['./sliderShow-leather.component.scss'],
  standalone: true,
})
export class SliderShowLeatherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  changeSlider($event: any){
    let currentImg =  $event.target;
    currentImg!.style.transform = "translateX(-110%)";
  }

}
