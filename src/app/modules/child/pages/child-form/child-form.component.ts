import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ChildService } from '../../service/child.service';
import { AuthService } from 'src/app/modules/auth/service/auth.service';

@Component({
  selector: 'app-child-form',
  templateUrl: './child-form.component.html',
  styleUrls: ['./child-form.component.scss']
})
export class ChildFormComponent implements OnInit {
  childForm: FormGroup;
  constructor(private childService: ChildService, private authService: AuthService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    let name: string = null;
    let dob: string = null;
    let gender: string = null;
    let height: string = null;
    let weight: string = null;
    let remarks: string = null;
    let parentId: string = this.authService.getUser().id;

    this.childForm = new FormGroup({
      name: new FormControl(name, Validators.required),
      dob: new FormControl(dob, Validators.required),
      gender: new FormControl(gender, Validators.required),
      height: new FormControl(height, Validators.required),
      weight: new FormControl(weight, Validators.required),
      remarks: new FormControl(remarks),
      parent_id: new FormControl(parentId),
    });
  }

  onSubmit() {
    this.childService.create(this.childForm.value);
    console.log(this.childForm.value);
  }

}
