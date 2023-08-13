import { Component } from '@angular/core';
import { PersonalDataService } from './services/personal-data.service';
import { LoaderService } from './services/loader.service';

import { Skill } from './models/skill';
import { Project } from './models/project';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myPortfolio';

  personalInfo = { name: '', occupation: '', summary: '', description: '' }
  social = {
    github: { url: '', user: '' },
    linkedin: { url: '', user: '' },
    email: '',
  }
  cv = '';
  education = []
  hardSkills: Skill[] = []
  softSkills: Skill[] = []
  projects: Project[] = []

  constructor(private personalDataService: PersonalDataService, public loaderService: LoaderService) { }

  ngOnInit() {
    this.loaderService.show()
    this.personalDataService.getAllData().subscribe(data => {
      this.personalInfo = {
        name: data.name,
        occupation: data.occupation,
        summary: data.summary,
        description: data.description
      };
      this.social = {
        github: { url: data.social_media.github.url, user: data.social_media.github.user },
        linkedin: { url: data.social_media.linkedin.url, user: data.social_media.linkedin.user },
        email: data.social_media.email
      };
      this.cv = data.cv;
      this.education = data.education;
      this.hardSkills = data.skills.hard_skills;
      this.softSkills = data.skills.soft_skills;
      this.projects = data.projects;
      this.loaderService.hide();
    });
  }

    // {
    //   "id": 7,
    //   "img": "./assets/imgs/accesible-portfolio.png",
    //   "title": "Portfolio Accesible",
    //   "description": "Un portfolio sencillo priorizando la accesibilidad web de acuerdo a los lineamientos de la WCAG, incluyendo accesibilidad para usuarios con teclado por navegación por tab y lectores de pantalla.",
    //   "skills": ["HTML", "CSS", "JavaScript"],
    //   "github": "https://github.com/PaylemanC/proyEj-portfolio-accesible--Platzi",
    //   "deploy": "https://master--portfolio-accesible.netlify.app/index.html",
    //   "status": "COMPLETED",
    //   "category": "Frontend"
    // },
    // {
    //   "id": 8,
    //   "img": "./assets/imgs/batatabit.png",
    //   "title": "Batatabit",
    //   "description": "Landing page responsive de la empresa ficticia de bitcoins Batatabit con enfoque en maquetación mobile first.",
    //   "skills": ["HTML", "CSS"],
    //   "github": "https://github.com/PaylemanC/Batabit--Platzi",
    //   "deploy": "https://batabit-crypto.netlify.app/",
    //   "status": "COMPLETED",
    //   "category": "Frontend"
    // }
}
