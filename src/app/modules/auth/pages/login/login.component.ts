import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    let email: string = null;
    let password: string = null;

    this.loginForm = new FormGroup({
      email: new FormControl(email, [Validators.required]),
      password: new FormControl(password, Validators.required),
    })
  }

  onSubmit() {
    this.authService.login(this.loginForm.value);
    console.log(this.loginForm.value);
  }

}
