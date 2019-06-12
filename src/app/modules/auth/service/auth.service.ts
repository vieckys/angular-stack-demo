import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  register(postData) {
    return this.http.post(`${environment.API_ENDPOINT}users/create`, postData).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occured");
      }
    );
  }

  login(postData) {
    return this.http.post(`${environment.API_ENDPOINT}users/login`, postData).subscribe(
      (res: Response) => {
        if (res.status == 1) {
          this.setSession(res);
          this.router.navigate(['/dashboard']);
          console.log(res);
        }
        else {
          alert('Wrong credentials!!!');
        }
      },
      err => {
        console.log("Error occured");
      }
    );
  }

  setSession(res) {
    window.localStorage.setItem('vt_user', JSON.stringify(res.data));
  }

  getUser() {
    return JSON.parse(window.localStorage.getItem('vt_user'));
  }

  logout() {
    window.localStorage.removeItem('vt_user');
    this.router.navigate(['/home']);
  }
}
