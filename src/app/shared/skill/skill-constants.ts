import { ResumeSkill } from './skill-types';

export const LEVEL_LABEL_MAP: Record<Required<ResumeSkill>['level'], string> = {
  Beginner: 'Débutant',
  Intermediate: 'Intermédiaire',
  Advanced: 'Avancé',
  Expert: 'Expert',
  Master: 'Maîtrise',
};

export const LEVEL_SCORE_MAP: Record<Required<ResumeSkill>['level'], number> = {
  Beginner: 1,
  Intermediate: 2,
  Advanced: 3,
  Expert: 4,
  Master: 5,
};
