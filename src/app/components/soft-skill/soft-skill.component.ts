import { Component, Input } from '@angular/core';
import { Skill } from '../../models/skill';

@Component({
  selector: 'app-soft-skill',
  templateUrl: './soft-skill.component.html',
  styleUrls: ['./soft-skill.component.scss']
})
export class SoftSkillComponent {
  @Input() softSkill: Skill = { "name": "", "icon": "" };
}
