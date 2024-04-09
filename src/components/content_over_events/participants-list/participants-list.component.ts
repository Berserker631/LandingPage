import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from "@angular/common"
import * as confetti from 'canvas-confetti';
import { Employee } from '../../../interfaces/Employee';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ParticipantsService } from './participants.service';

@Component({
  selector: 'app-participants-list',
  templateUrl: './participants-list.component.html',
  styleUrls: ['./participants-list.component.scss'],
  standalone: true,
  imports: [MatIconModule, CommonModule, HttpClientModule]
})
export class ParticipantsListComponent implements OnInit {
  chosenParticipant: number = 0;
  selectedEmployee: Employee = {
    name: '',
    area: ''
  };
  alreadyVote: boolean = false;
  confirmSelection: boolean = false;
  members: Employee[] = [];
  index: number = 0;

  constructor(private participantService: ParticipantsService) { }



  ngOnInit() {
    this.participantService.loadMembers().subscribe({
      next: (response) => {
        this.members = response;
      },
      error: (err) => {
        console.log(err);
      }
    })

    this.animateText();
    this.alreadyVote = localStorage.getItem("voteAlready") === "true";
  }

  animateText() {
    const txts = document.querySelector(".animate-text")!.children;
    const textInTimer = 3000;
    const textOutTimer = 2800;

    for (let i = 0; i < txts.length; i++) {
      txts[i].classList.remove("text-in", "text-out");
    }
    txts[this.index].classList.add("text-in");

    setTimeout(() => {
      txts[this.index].classList.add("text-out");
    }, textOutTimer)

    setTimeout(() => {
      if (this.index == txts.length - 1) {
        this.index = 0;
      }
      else {
        this.index++;
      }
      this.animateText();
    }, textInTimer);
  }

  celebrate() {
    confetti.create()({
      shapes: ['square'],
      particleCount: 100,
      spread: 90,
      origin: {
        y: 0
      }
    });
  }

  hideModal(response: boolean) {
    if (response) {
      this.confirmSelection = true;
      // this.alreadyVote = true;
      this.celebrate()
      localStorage.setItem("voteAlready", "true");
      this.voteFiltering(this.chosenParticipant)
    }
    else {
      this.confirmSelection = false;
    }
    this.confirmSelection = false;
  }

  processVote($index: number, member: any) {
    this.selectedEmployee.name = member.name;
    this.selectedEmployee.area = member.area;
    this.confirmSelection = true;
    this.chosenParticipant = $index;
  }

  voteFiltering(employee: number) {
    if (this.chosenParticipant > 0) {
      return employee == this.chosenParticipant ? false : true;
    }
    else {
      return false;
    }
  }
}
