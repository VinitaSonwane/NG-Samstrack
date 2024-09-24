import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent  implements OnInit {
subjects: any;
successMessage: any;
errorMessage: any;
  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.getAllStudent();
  }
 student: any;
  getAllStudent() {
    this.studentService.getAllStudent().subscribe((response: any) => {
      this.student = response;
    });
  }

 

  
}