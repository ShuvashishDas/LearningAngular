import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './school/library/library.component';
import { SchoolListComponent } from './school/school-list/school-list.component';
import { StudentComponent } from './school/student/student.component';
import { TeacherComponent } from './school/teacher/teacher.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'schools', redirectTo: 'school/list', pathMatch: 'full' },
  { path: 'school/list', component: SchoolListComponent },
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
