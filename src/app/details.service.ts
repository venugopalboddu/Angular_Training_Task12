import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  private servUrl = 'http://localhost:3000/employees';
  constructor(private http: HttpClient) { }
  getEmployees() {
    return this.http.get(this.servUrl);
  }
}
