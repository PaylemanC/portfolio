import { Component, Input } from '@angular/core';
import { PersonalDataService } from '../../../services/personal-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  email: string = '';
  github = { url: '', user: '' };
  linkedin = { url: '', user: '' };
  name = '';

  constructor(private personalDataService: PersonalDataService) { }

  ngOnInit() {
    this.personalDataService.getAllData().subscribe(data => {
      this.email = data.social_media.email;
      this.github = { url: data.social_media.github.url, user: data.social_media.github.user },
      this.linkedin = { url: data.social_media.linkedin.url, user: data.social_media.linkedin.user };
      this.name = data.name;
    });
  }
}
