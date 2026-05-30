import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactApi {
  private apiUrl = 'http://localhost:5000/api/contact';
  constructor(private http: HttpClient) {}

  submitContact(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/add`, data);
  }
  getContact(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?t=${Date.now()}`);
  }
}
