import { Component, HostListener, OnInit  } from '@angular/core';
import { Router } from "@angular/router";
import { CommonModule, ViewportScroller } from '@angular/common';
import { PanningModule } from "../../directives/panning.module";
import { SliderShowLeatherComponent } from "../../components/sliderShow-leather/sliderShow-leather.component";
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-principal-content',
  templateUrl: './principal-content.component.html',
  styleUrls: ['./principal-content.component.scss'],
  standalone: true,
  imports: [PanningModule, CommonModule, SliderShowLeatherComponent,MatIconModule],
})
export class PrincipalContentComponent implements OnInit {
  selectedImage: number = 0;
  arImages: any | undefined = [
    {src: "../../assets/cuero.png", alt:"leatherCutters"},
    {src: "../../assets/benefits.png", alt:"benefits"},
    {src: "../../assets/Rank1.jpg", alt:"winner"},
    {src: "../../assets/Rank2.jpg", alt:"winner"},
    {src: "../../assets/Rank3.jpg", alt:"winner"},
  ];

  constructor(private router: Router, private readonly scroller: ViewportScroller) { }

  ngOnInit() {}

  updatePosition(){
    if (this.selectedImage == this.arImages.length - 1) {
      this.selectedImage = 0;
    }
    else{
      this.selectedImage++;
    }
  }

  @HostListener('window:scroll', ['$event'])
  doSomething() {
    // this.scroller.scrollToAnchor('slidershow')
  }

  redirect() {
    this.router.navigate(['/NotFound']);
  }
}
