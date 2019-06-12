import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vaccine-list',
  templateUrl: './vaccine-list.component.html',
  styleUrls: ['./vaccine-list.component.scss']
})
export class VaccineListComponent implements OnInit {
  vaccines;
  constructor() {
    this.vaccines = [{
      name: 'polio',
      date: '22-Aug-2019'
    }, {
      name: 'typhoid',
      date: '26-Aug-2019'
    }]
   }

  ngOnInit() {
  }

}
