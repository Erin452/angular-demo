import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  urlIP = "http://localhost:18000";

  constructor(
    private http: HttpClient
  ) { }

  getData() {
    let url = this.urlIP + "/accounts";
    let header = new HttpHeaders({
      "Content-Type": "application/json",
    });

    return this.http.get<any>(url, { headers: header });
  }
}
