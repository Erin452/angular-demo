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
    let url = "http://localhost:18000/accounts";
    let header = new HttpHeaders({
      "Content-Type": "application/json",
    });

    return this.http.get<any>(url, { headers: header });
  }
}
