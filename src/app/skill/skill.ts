import { Component, computed, input } from '@angular/core';
import { ResumeSkill } from '../shared/resume/resume-skill-types';
import { LEVEL_LABEL_MAP, LEVEL_SCORE_MAP } from '../shared/resume/resume-skill-utils';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.html',
})
export class Skill {
  readonly skill = input.required<ResumeSkill>();

  protected levelMap = LEVEL_LABEL_MAP;

  protected dots = Array(5).fill('');

  protected score = computed(() => {
    const level = this.skill().level;
    return level ? LEVEL_SCORE_MAP[level] : 0;
  });
}
