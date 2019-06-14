import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChildService {

  url: string = `${environment.API_ENDPOINT}child/`;

  constructor(private http: HttpClient) { }


  fetchAll(postData) {
    return this.http.post(`${this.url}fetch-all`, postData).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occured");
      }
    );
  }

  edit(id) {
    return this.http.get(`${this.url}edit/${id}`).subscribe(
      res => {
        return res;
      },
      err => {
        console.log("Error occured");
      }
    );
  }

  create(postData) {
    return this.http.post(`${this.url}create`, postData).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occured");
      }
    );
  }
}
