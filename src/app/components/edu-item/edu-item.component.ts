import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-edu-item',
  templateUrl: './edu-item.component.html',
  styleUrls: ['./edu-item.component.scss']
})
export class EduItemComponent {

  constructor() { }

  @Input() education = {
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
