import { Component, Host, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanningModule } from "../../directives/panning.module";
import { HostListener } from '@angular/core';
import { SliderShowLeatherComponent } from "../../components/sliderShow-leather/sliderShow-leather.component";
@Component({
  selector: 'app-principal-content',
  templateUrl: './principal-content.component.html',
  styleUrls: ['./principal-content.component.scss'],
  standalone: true,
  imports: [PanningModule, CommonModule, SliderShowLeatherComponent]
})
@HostListener('window: scroll', ['$event'])
export class PrincipalContentComponent implements OnInit {
  selectedImage: number = 0;
  arImages: any | undefined = [
    {src: "../../assets/cuero.png", alt:"leatherCutters"},
    {src: "../../assets/benefits.png", alt:"benefits"},
    {src: "../../assets/Rank1.jpg", alt:"winner"},
    {src: "../../assets/Rank2.jpg", alt:"winner"},
    {src: "../../assets/Rank3.jpg", alt:"winner"},
    ];

  onScroll($event: any){ }

  constructor() { }

  ngOnInit() {}

  updatePosition($event: any, index: number){
    if (this.selectedImage == this.arImages.length - 1) {
      this.selectedImage = 0;
    }
    else{
      this.selectedImage++;
    }
  }


}
