import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rivals',
  templateUrl: './rivals.component.html',
  styleUrls: ['./rivals.component.scss'],
  standalone: true
})
export class RivalsComponent implements OnInit {
  date: string = '';
  currentDate: Date = new Date();
  targetDate: Date = new Date('2024-03-30');
  voteCounter: number = 0;

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
    setInterval(() => {
      // let random = Math.random();
      this.date = this.formatDate(new Date);
      // this.voteCounter = Math.floor(random * 30) + 1;
    }, 200);
  }

}
