import { Component, Input } from '@angular/core';
import { Skill } from 'src/app/models/skill';

@Component({
  selector: 'app-soft-skill',
  templateUrl: './soft-skill.component.html',
  styleUrls: ['./soft-skill.component.scss']
})
export class SoftSkillComponent {
  @Input() softSkill: Skill = { "id": 0, "name": "", "icon": "" };
}
