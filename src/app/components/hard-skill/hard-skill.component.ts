import { Component, Input } from '@angular/core';
import { Skill } from '../../models/skill';

@Component({
  selector: 'app-hard-skill',
  templateUrl: './hard-skill.component.html',
  styleUrls: ['./hard-skill.component.scss']
})
export class HardSkillComponent {
  @Input() hardSkill: Skill = { "id": 0, "name": "", "icon": "" };
}
