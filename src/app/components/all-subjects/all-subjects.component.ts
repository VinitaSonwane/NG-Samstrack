import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-all-subjects',
  templateUrl: './all-subjects.component.html',
  styleUrls: ['./all-subjects.component.css']
})
export class AllSubjectsComponent implements OnInit {
  subjects: any[] = [];

  constructor(private subjectService: SubjectService) {}

  ngOnInit(): void {
    this.getAllSubjects();
  }

  getAllSubjects() {
    this.subjectService.getAllSubjects().subscribe(
      (response: any) => {
        this.subjects = response;
      },
      (error: any) => {
        console.error('Error fetching subjects', error);
      }
    );
  }
}
