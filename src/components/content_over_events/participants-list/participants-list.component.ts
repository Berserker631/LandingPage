import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-participants-list',
  templateUrl: './participants-list.component.html',
  styleUrls: ['./participants-list.component.scss'],
  standalone: true
})
export class ParticipantsListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.animateText();
  }

  animateText() {
    let txts = document.querySelector(".animate-text")!.children;
    let txtsLen = txts.length;
    let index = 0;
    let textInTimer = 3000;
    let textOutTimer = 2800;

    for (let i = 0; i < txtsLen; i++) {
      txts[i].classList.remove("text-in", "text-out");
    }
    txts[index].classList.add("text-in");

    setTimeout(function () {
      txts[index].classList.add("text-out");
    }, textOutTimer)

    setTimeout( () => {
      if (index == txtsLen - 1) {
        index = 0;
      }
      else {
        index++;
        this.animateText();
      }
    }, textInTimer);
    window.onload = this.animateText;
  }

}
