import { Injectable } from '@angular/core';
import { School } from '../models/school';

@Injectable({
  providedIn: 'root',
})
export class SchoolService {
  constructor() {}

  getSchools(): School[] {
    return [
      {
        id: 1,
        name: 'Kalarab Kinder Garten',
        address: 'Kalir Bazar, Narayanganj',
      },
      { id: 2, name: 'Narayanganj High School', address: 'DIT, Narayanganj' },
    ];
  }
}
