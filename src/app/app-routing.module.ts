import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './school/libraries/library.component';
import { SchoolDashboardComponent } from './school/schools/school-dashboard/school-dashboard.component';
import { SchoolEditComponent } from './school/schools/school-edit/school-edit.component';
import { SchoolListComponent } from './school/schools/school-list/school-list.component';
import { StudentComponent } from './school/student/student.component';
import { TeacherComponent } from './school/teacher/teacher.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  { path: 'schools', redirectTo: 'school/list', pathMatch: 'full' },
  { path: 'school/list', component: SchoolListComponent },
  { path: 'school/:id', component: SchoolEditComponent },
  { path: 'school/dashboard/:id', component: SchoolDashboardComponent },

  { path: 'school/student', component: StudentComponent },

  { path: 'school/teacher', component: TeacherComponent },

  { path: 'school/library', component: LibraryComponent },

  { path: 'admin', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
