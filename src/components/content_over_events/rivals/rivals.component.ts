import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rivals',
  templateUrl: './rivals.component.html',
  styleUrls: ['./rivals.component.scss'],
  standalone: true
})
export class RivalsComponent implements OnInit {
  date: string = '';
  voteCounter: number = 0;
  eventDate: number = new Date('2024-03-11').getTime();

  rivalsArray = [
    {
      name: 'JUANA  MENA'
    },
    {
      name: 'MARIA BEATO'
    },
    {
      name: 'WELDRY DIAZ'
    },
  ]
  constructor() { }

  ngOnInit() {
    this.initializeCronometer();
  }

  formatDate(date: any) {
    let hours = this.padTo2Digits(date.getHours());
    let minutes =  this.padTo2Digits(date.getMinutes());
    let seconds = this.padTo2Digits(date.getSeconds());

    return hours + ':' + minutes + ':' + seconds
  }

  padTo2Digits(num: any) {
    return num.toString().padStart(2, '0');
  }


  initializeCronometer(){
    if (Date.now() - this.eventDate) {
      let daysTime = (1000 * 60 * 60);
      setInterval(() => {
        let currentTime = new Date().getTime();
        let timeLeft = currentTime - this.eventDate;
        let days = Math.floor(timeLeft / (daysTime * 24));
        let hours =  Math.floor(timeLeft % (daysTime * 24) / (daysTime));
        let minutes = Math.floor((timeLeft % daysTime) / (1000 * 60));
        let seconds = Math.floor((timeLeft % (1000*60)) / 1000);
        this.date = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
      }, 1000);
    }
  }

}
