import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    let email: string = null;
    let password: string = null;

    this.loginForm = new FormGroup({
      email: new FormControl(email, Validators.required),
      password: new FormControl(password, Validators.required),
    })
  }

  onSubmit() {
    console.log(this.loginForm.value);
  }

}
