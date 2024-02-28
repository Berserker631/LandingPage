import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanningModule } from "../../directives/panning.module";
@Component({
  selector: 'app-principal-content',
  templateUrl: './principal-content.component.html',
  styleUrls: ['./principal-content.component.scss'],
  standalone: true,
  imports: [PanningModule, CommonModule]
})
export class PrincipalContentComponent implements OnInit {
  selectedImage: number = 0;
  images: any | undefined = [
    {src: "../../assets/cuero.png", alt:"leatherCutters"},
    {src: "../../assets/announcment.png", alt:"announcment"},
    {src: "../../assets/benefits.png", alt:"benefits"},
    {src: "../../assets/employeeOfWeek.png", alt:"winner"},
    {src: "../../assets/cuero.png", alt:"announcment"},
  ];
  winner = {
    name: 'Elbanerys Luciano',
    totalProduced: 6769.77,
    bonus: 1353.95,
    attendance: 200,
    total: 700,
    summarized: 9023.72
  }
  constructor() { }

  ngOnInit() {}

  updatePosition($event: any, index: number){
    if (this.selectedImage == this.images.length - 1 ) {
      this.selectedImage = 0;
    }
    else{
      this.selectedImage++;
    }
  }
}
