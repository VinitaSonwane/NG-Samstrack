import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { AllStudentsComponent } from './components/all-students/all-students.component';
import { AddSubjectComponent } from './components/add-subject/add-subject.component';
import { AllSubjectsComponent } from './components/all-subjects/all-subjects.component';

const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  {
    path:"home",component:HomeComponent
  },
  {
    path:'add-user',component:AddUserComponent
  },
  {
    path:'get-all-users',component:AllUsersComponent
  },
  {
    path:'add-student',component:AddStudentComponent
  }, 
  {
    path:'get-all-students' , component:AllStudentsComponent
  },
  {
    path:'add-subject' , component:AddSubjectComponent
  },
  {
    path:'all-subjects' , component:AllSubjectsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
