import { Component } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent {
  subject: any = { id: null, name: '' };
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private subjectService: SubjectService) {}

  onSubmit() {
    this.subjectService.addSubject(this.subject.id, this.subject.name).subscribe(
      (response: any) => {
        this.successMessage = 'Subject added successfully!';
        this.errorMessage = null; // Clear previous error
        this.resetForm();
      },
      (error: any) => {
        this.errorMessage = 'Error adding subject. Please try again.';
        this.successMessage = null; // Clear previous success message
      }
    );
  }

  resetForm() {
    this.subject = { id: null, name: '' }; // Reset form
  }
}
