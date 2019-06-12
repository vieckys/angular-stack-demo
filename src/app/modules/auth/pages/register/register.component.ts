import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private authService: AuthService) { }

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
    this.authService.register(this.registerForm.value);
    console.log(this.registerForm.value);
  }

}
