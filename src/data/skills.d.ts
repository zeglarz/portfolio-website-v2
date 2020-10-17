export enum LEVELS {
  beginner = 'Beginner',
  competent = 'Competent',
  proficient = 'Proficient',
  expert = 'Expert',
}

interface IStack {
  name: string;
  proficiency: LEVELS;
  image: string;
}

interface ITechs {
  title: string;
  stack: IStack[];
}

export interface ITechObj {
  fontEnd: ITechs;
  backEnd: ITechs;
  software: ITechs;
  otherTools: ITechs;
}
