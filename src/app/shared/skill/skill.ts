import { Component, computed, input } from '@angular/core';
import { LEVEL_LABEL_MAP, LEVEL_SCORE_MAP } from './skill-constants';
import { ResumeSkill } from './skill-types';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.html',
})
export class Skill {
  readonly skill = input.required<ResumeSkill>();

  protected dots = Array(5).fill('');

  protected score = computed(() => {
    const level = this.skill().level;
    return level ? LEVEL_SCORE_MAP[level] : 0;
  });

  protected levelLabelMap = LEVEL_LABEL_MAP;
}
