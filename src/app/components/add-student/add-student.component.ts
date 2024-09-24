import { Component } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';



@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})


export class AddStudentComponent {
  student = {
    id: 0,
    name: '',
    email: ''
  };

  successMessage: string = '';
  errorMessage: string = '';

  constructor(private studentService: StudentService) {}

  onSubmit() {
    // Call the addStudent method from the service and subscribe to the result
    this.studentService.addStudent(this.student.id, this.student.name, this.student.email)
      .subscribe(
        (response: any) => {
          console.log('Student added successfully!', response);
          this.successMessage = 'Student added successfully!'; // Set success message
          this.resetForm(); // Reset form after success
        },
        (error: any) => {
          console.error('Error adding student', error);
          this.errorMessage = 'Error adding student. Please try again.'; // Set error message
        }
      );
  }

  resetForm() {
    // Reset the form values to their default state
    this.student = {
      id: 0,
      name: '',
      email: ''
    };
  }
}
