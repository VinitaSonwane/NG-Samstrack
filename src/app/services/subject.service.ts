import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private apiUrl = 'http://localhost:8091/subject'; // Set your API base URL

  constructor(private http: HttpClient) {}

  // Add a subject
  addSubject(id: number, name: string): Observable<any> {
    const url = `${this.apiUrl}/add-subject`;
    return this.http.post(url, { id, name });
  }

  // Get all subjects
  getAllSubjects(): Observable<any> {
    const url = `${this.apiUrl}/get-all-subjects`;
    return this.http.get(url);
  }
}
