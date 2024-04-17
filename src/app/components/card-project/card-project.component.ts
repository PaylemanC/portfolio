import { Component, Input } from '@angular/core';
import AOS from 'aos';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.scss']
})
export class CardProjectComponent {
  @Input() project: Project = {
    id: 0,
    img: '', //https://via.placeholder.com/300x150
    title: '',
    subtitle: '',
    description: '',
    skills: [],
    github: '',
    deploy: '',
    status: 'IN PROGRESS',
    category: 'Full Stack'
  }

  ngOnInit() {
    AOS.init();
  }

  get isEven(): boolean {
    return this.project.id % 2 === 0;
  }
}
