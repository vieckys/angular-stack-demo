import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-card',
  templateUrl: './child-card.component.html',
  styleUrls: ['./child-card.component.scss']
})
export class ChildCardComponent implements OnInit {
  child;
  constructor() {
    this.child = {
      name: 'Ankit',
      age: 10,
      gender: 'male',
      childId: 1
    }
   }

  ngOnInit() {
  }

}
