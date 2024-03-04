import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageSliderComponent } from '../components/image-slider/image-slider.component';
import { PrincipalContentComponent } from "../components/principal-content/principal-content.component";
import {Clipboard} from '@angular/cdk/clipboard';
import { HeaderComponent } from "../components/header-component/header.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ImageSliderComponent, PrincipalContentComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
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
