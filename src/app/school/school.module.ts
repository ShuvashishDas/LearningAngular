import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolRoutingModule } from './school-routing.module';
import { StudentComponent } from './student/student.component';
import { LibraryComponent } from './libraries/library.component';
import { TeacherComponent } from './teacher/teacher.component';
import { BootstrapIconsModule } from 'ng-bootstrap-icons';
import { allIcons } from 'ng-bootstrap-icons/icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SchoolDashboardComponent } from './schools/school-dashboard/school-dashboard.component';
import { SchoolEditComponent } from './schools/school-edit/school-edit.component';
import { SchoolListComponent } from './schools/school-list/school-list.component';

@NgModule({
  declarations: [
    StudentComponent,
    LibraryComponent,
    TeacherComponent,
    SchoolListComponent,
    SchoolDashboardComponent,
    SchoolEditComponent,
  ],
  imports: [
    CommonModule,
    SchoolRoutingModule,
    BootstrapIconsModule.pick(allIcons),
    FontAwesomeModule,
  ],
})
export class SchoolModule {}
