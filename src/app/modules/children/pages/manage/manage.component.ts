import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
  manageForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    let name: string = null;
    let dob: string = null;
    let gender: string = null;
    let height: string = null;
    let weight: string = null;
    let specialCare: string = null;

    this.manageForm = new FormGroup({
      name: new FormControl(name, Validators.required),
      dob: new FormControl(dob, Validators.required),
      gender: new FormControl(gender, Validators.required),
      height: new FormControl(height, Validators.required),
      weight: new FormControl(weight, Validators.required),
      specialCare: new FormControl(specialCare),
    });
  }

  onSubmit() {
    console.log(this.manageForm.value);
  }

}
