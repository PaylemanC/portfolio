import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hard-skill',
  templateUrl: './hard-skill.component.html',
  styleUrls: ['./hard-skill.component.scss']
})
export class HardSkillComponent {
  @Input() hardSkill = { "name": "", "icon": "" };
}
