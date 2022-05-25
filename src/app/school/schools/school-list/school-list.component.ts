import { Component, OnInit } from '@angular/core';
import { School } from '../../models/school';
import { SchoolService } from '../../services/school.service';

@Component({
  selector: 'lng-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.scss'],
})
export class SchoolListComponent implements OnInit {
  schools: School[] = [];

  constructor(private schoolService: SchoolService) {}

  ngOnInit(): void {
    this.schools = this.schoolService.getSchools();
  }

  deleteSchool($event: number): void {
    const school = this.schools.find((s) => s.id === $event) as School;
    alert(school ? `Deleting - (${school.id}) ${school.name}` : 'Wrong data');
  }

  updateSchool($event: number): void {
    const school = this.schools.find((s) => s.id === $event) as School;
    alert(school ? `Updating - (${school.id}) ${school.name}` : 'Wrong data');
  }
}
