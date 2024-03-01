import { Component, Host, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanningModule } from "../../directives/panning.module";
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-principal-content',
  templateUrl: './principal-content.component.html',
  styleUrls: ['./principal-content.component.scss'],
  standalone: true,
  imports: [PanningModule, CommonModule]
})
@HostListener('window: scroll', ['$event'])
export class PrincipalContentComponent implements OnInit {
  selectedImage: number = 0;
  arImages: any | undefined = [
    {src: "../../assets/cuero.png", alt:"leatherCutters"},
    {src: "../../assets/announcment.png", alt:"announcment"},
    {src: "../../assets/benefits.png", alt:"benefits"},
    {src: "../../assets/Winner.jpg", alt:"winner"},
    ];

  onScroll($event: any){
    console.log($event);

  }

  constructor() { }

  ngOnInit() {}

  updatePosition($event: any, index: number){
    if (this.selectedImage == this.arImages.length - 1 ) {
      this.selectedImage = 0;
    }
    else{
      this.selectedImage++;
    }
  }

  changeSlider($event: any){
    let currentImg =  $event.target;
    // console.log($event.target);
    // currentImg!.style.transition = "all ease-in-out .5s";
    currentImg!.style.transform = "translateX(-110%)";
  }

}
