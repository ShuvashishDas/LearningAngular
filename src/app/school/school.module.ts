import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolRoutingModule } from './school-routing.module';
import { StudentComponent } from './student/student.component';
import { LibraryComponent } from './library/library.component';
import { TeacherComponent } from './teacher/teacher.component';
import { SchoolListComponent } from './school-list/school-list.component';


@NgModule({
  declarations: [
    StudentComponent,
    LibraryComponent,
    TeacherComponent,
    SchoolListComponent
  ],
  imports: [
    CommonModule,
    SchoolRoutingModule
  ]
})
export class SchoolModule { }
