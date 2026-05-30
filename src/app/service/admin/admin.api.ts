import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminApi {
  constructor(private http: HttpClient) {}

  private apiUrl = 'https://mvm-athur-new.onrender.com/api/admin';

  login(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, data);
  }
}
