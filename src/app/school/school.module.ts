import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolRoutingModule } from './school-routing.module';
import { StudentComponent } from './student/student.component';
import { LibraryComponent } from './library/library.component';
import { TeacherComponent } from './teacher/teacher.component';


@NgModule({
  declarations: [
    StudentComponent,
    LibraryComponent,
    TeacherComponent
  ],
  imports: [
    CommonModule,
    SchoolRoutingModule
  ]
})
export class SchoolModule { }
