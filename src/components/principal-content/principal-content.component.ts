import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal-content',
  templateUrl: './principal-content.component.html',
  styleUrls: ['./principal-content.component.scss'],
  standalone: true,
})
export class PrincipalContentComponent implements OnInit {
  images: any | undefined = [
    {src: "../../assets/announcment.png", alt:"announcment"},
    {src:"../../assets/leather.jpg", alt:"leather"},
    {src:"../../assets/limits.png", alt:"announcment"},
    {src: "../../assets/announcment.png", alt:"announcment"},
    {src:"../../assets/leather.jpg", alt:"leather"},
    {src:"../../assets/limits.png", alt:"announcment"}
  ];
  currentPos = 0;
  winner = {
    name: 'Elbanerys Luciano',
    totalProduced: 6769.77,
    bonus: 1353.95,
    attendance: 200,
    total: 700,
    summarized: 9023.72
  }
  constructor() { }

  ngOnInit() {
    // this.reposition();
  }

  reposition($event: any, index: number){
    let image = document.getElementById('inner-slider') as HTMLElement;
    let firstImage = this.images[0];
    if ($event.button == 0) {
      image.style.transform = 'translateX(' + index * -45 +'%)';
      // this.images.splice(0, 1);
      // if (this.images.length < 1) {
        this.images.push(firstImage)
      // }
    }
  }

}
