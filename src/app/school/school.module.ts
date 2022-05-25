import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolRoutingModule } from './school-routing.module';
import { StudentComponent } from './student/student.component';
import { LibraryComponent } from './library/library.component';
import { TeacherComponent } from './teacher/teacher.component';
import { SchoolListComponent } from './school-list/school-list.component';
import { BootstrapIconsModule } from 'ng-bootstrap-icons';
import { allIcons } from 'ng-bootstrap-icons/icons';

@NgModule({
  declarations: [
    StudentComponent,
    LibraryComponent,
    TeacherComponent,
    SchoolListComponent,
  ],
  imports: [
    CommonModule,
    SchoolRoutingModule,
    BootstrapIconsModule.pick(allIcons),
  ],
})
export class SchoolModule {}
