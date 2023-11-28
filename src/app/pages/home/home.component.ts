import { Component } from '@angular/core';
import { PersonalDataService } from '../../services/personal-data.service';
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
  loading: boolean = true;

  constructor(private personalDataService: PersonalDataService) { }

  ngOnInit() {
    this.loading;
    this.personalDataService.getAllData().subscribe(data => {
      const { name, occupation, summary, description, social_media, cv, education, skills, projects } = data;

      this.personalInfo = { name, occupation, summary, description };
      this.social = {
        github: { url: social_media.github.url, user: social_media.github.user },
        linkedin: { url: social_media.linkedin.url, user: social_media.linkedin.user },
        email: social_media.email
      }
      this.cv = cv;
      this.education = education;
      this.hardSkills = skills.hard_skills;
      this.softSkills = skills.soft_skills;
      this.projects = projects;

      this.loading = false;
    });
  }
}
