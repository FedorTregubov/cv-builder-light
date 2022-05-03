import { nanoid } from 'nanoid';
import { cvInit } from '@/data/mocks/cv.mock.data';

export interface SkillInput {
  title?: string;
  value?: number;
}

const defaultSkill: Omit<SkillInput, 'id'> = {
  ...cvInit.experienceInfo.skills[0],
};

export class Skill {
  public id!: string;
  public title!: string;
  public value!: number;

  constructor (model?: SkillInput) {
    this.id = nanoid();
    this.title = String(model?.title ?? defaultSkill.title);
    this.value = Number(model?.value ?? defaultSkill.value);
  }
}
