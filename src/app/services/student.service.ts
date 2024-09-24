import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) {}

  // Add a student
  addStudent(
    id: number,
    name: string,
    email: string
  ): Observable<any> {
    const url = 'http://localhost:8091/student/add-student';
    return this.http.post(url, { id, name, email });
  }

  // Get all students
  getAllStudent(): Observable<any> {
    const url = 'http://localhost:8091/student/get-all-students';
    return this.http.get(url);
  }
}
