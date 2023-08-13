import { Component, Input } from '@angular/core';
import { Institute } from 'src/app/models/institute';

@Component({
  selector: 'app-edu-item',
  templateUrl: './edu-item.component.html',
  styleUrls: ['./edu-item.component.scss']
})
export class EduItemComponent {

  constructor() { }

  @Input() education: Institute = {
    "id": 0,
    "institute": "",
    "courses": [
      {
        "id": 0,
        "date": "",
        "title": "",
        "description": []
      }
    ]
  }

  get courses() {
    return this.education.courses;
  }

  getClass() {
    let institute = this.education.institute;
    return institute.replace(/\s+/g, '-').toLowerCase();
  }
}
