import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdmissionApi {

  private apiUrl = 'https://mvm-athur-new.onrender.com/api/admission';

  constructor(private http: HttpClient) {}

  // CREATE ADMISSION
  submitAdmission(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/add`, data);
  }

  // GET ALL ADMISSIONS
  getAdmission(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?t=${Date.now()}`);
  }
}
