import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageSliderComponent } from '../components/image-slider/image-slider.component';
import { PrincipalContentComponent } from "../components/principal-content/principal-content.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ImageSliderComponent, PrincipalContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'landingPage';

  ngOnInit(): void {
    this.repeat();
  }

  repeat(){
    // setTimeout(() => {
    //   this.loadSlider();
    //   this.repeat();
    // }, 2000);
  }

  loadSlider(){
  }
}
