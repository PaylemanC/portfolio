import { Component } from '@angular/core';
import { PersonalDataService } from '../../services/personal-data.service';
import { LoaderService } from '../../services/loader.service';
import { Skill } from '../../models/skill';
import { Project } from '../../models/project';
import { Institute } from '../../models/institute';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  personalInfo = { name: '', occupation: '', summary: '', description: '' }
  social = {
    github: { url: '', user: '' },
    linkedin: { url: '', user: '' },
    email: '',
  }
  cv = '';
  education: Institute[] = []
  hardSkills: Skill[] = []
  softSkills: Skill[] = []
  projects: Project[] = []

  constructor(private personalDataService: PersonalDataService, public loaderService: LoaderService) { }

  ngOnInit() {
    window.onload = () => {
      this.loaderService.hide();
    };
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
}
