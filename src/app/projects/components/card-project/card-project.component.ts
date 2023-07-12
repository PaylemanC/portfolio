import { Component } from '@angular/core';
import { Project } from '../../../models/project';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.scss']
})
export class CardProjectComponent {
  project: Project = {
    id: 0,
    title: 'Project Title',
    description: 'Quis ex aliquip sunt irure excepteur reprehenderit tempor Lorem. Eu commodo nulla laborum occaecat. Consectetur officia dolor culpa esse tempor reprehenderit. Aliquip amet sint exercitation consectetur eiusmod ad minim qui laboris cupidatat esse. Nisi aliqua do magna dolor sunt proident dolor esse ea quis deserunt adipisicing labore. Voluptate ullamco eu esse ipsum et exercitation nulla Lorem',
    skills: ['Angular', 'TypeScript', 'SCSS'],
    github: 'https://github.com/PaylemanC',
    deploy: ''
  }
}
