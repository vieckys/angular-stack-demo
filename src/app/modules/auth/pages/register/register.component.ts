import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor() { }

  initForm() {
    let name: string;
    let email: string;
    let password: string;

    this.registerForm = new FormGroup({
      name: new FormControl(name, Validators.required),
      email: new FormControl(email, Validators.required),
      password: new FormControl(password, Validators.required)
    })
  }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    console.log(this.registerForm.value);
  }

}
