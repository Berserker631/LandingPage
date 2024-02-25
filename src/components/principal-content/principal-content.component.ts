import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal-content',
  templateUrl: './principal-content.component.html',
  styleUrls: ['./principal-content.component.scss'],
  standalone: true,
})
export class PrincipalContentComponent implements OnInit {
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
  }

}
