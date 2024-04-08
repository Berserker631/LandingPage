import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageSliderComponent } from '../image-slider/image-slider.component';
import { PrincipalContentComponent } from "../principal-content/principal-content.component";
import {Clipboard} from '@angular/cdk/clipboard';
import { HeaderComponent } from "../header-component/header.component";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [RouterOutlet, ImageSliderComponent, PrincipalContentComponent, HeaderComponent]
})
export class HomeComponent implements OnInit {
  headerOpacity: number = 1;
  title = 'landingPage';

  ngOnInit(): void {}

  constructor(private Clipboard: Clipboard){}

  onCopyToClipboard($event: any){
    const textoParrafo = ($event.target as HTMLParagraphElement).innerText;
    this.Clipboard.copy(textoParrafo);
    alert("Copied the text: " + textoParrafo);
  }

}
