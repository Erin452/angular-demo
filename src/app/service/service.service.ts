import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(
    private http: HttpClient
  ) { }

  getData() {
    let url = "https://github.com/Erin452/angular-demo/blob/develop/src/app/data/data.json";
    let header = new HttpHeaders({
      "Content-Type": "application/json",
    });

    return this.http.get<any>(url, { headers: header });
  }
}
