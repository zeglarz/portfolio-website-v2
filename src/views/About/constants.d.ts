export enum LEVELS {
    beginner = 'Beginner',
    competent = 'Competent',
    proficient = 'Proficient',
    expert = 'Expert'
};

interface IStack {
    name: string,
    proficiency: LEVELS
}

export interface ITechs {
    title: string,
    stack: IStack[]
}

