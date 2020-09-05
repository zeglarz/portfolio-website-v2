import {ITechs, LEVELS} from './constants.d';


export const TECHS: ITechs[] = [
    {
        title: 'Front-end',
        stack: [
            {
                name: 'HTML',
                proficiency: LEVELS.proficient,
                image: module.html5
            },
            {
                name: 'CSS',
                proficiency: LEVELS.proficient
            },
            {
                name: 'JavaScript',
                proficiency: LEVELS.proficient
            },
            {
                name: 'TypeScript',
                proficiency: LEVELS.beginner
            },
            {
                name: 'React JS',
                proficiency: LEVELS.proficient
            },
            {
                name: 'Sass',
                proficiency: LEVELS.competent
            },
            {
                name: 'Gatsby',
                proficiency: LEVELS.beginner
            },
            {
                name: 'Styled Components',
                proficiency: LEVELS.proficient
            }
        ]
    },
    {
        title: 'Back-end',
        stack: [
            {
                name: 'NodeJS',
                proficiency: LEVELS.competent
            },
            {
                name: 'PostgreSQL',
                proficiency: LEVELS.beginner
            },
            {
                name: 'MongoDB',
                proficiency: LEVELS.competent
            },
            {
                name: 'Express',
                proficiency: LEVELS.competent
            }
        ]
    },
    {
        title: 'Software & other tools',
        stack: [
            {
                name: 'VSCode',
                proficiency: LEVELS.competent
            },
            {
                name: 'Postman',
                proficiency: LEVELS.competent
            },
            {
                name: 'Adobe Xd',
                proficiency: LEVELS.beginner
            },
            {
                name: 'Adobe Illustrator',
                proficiency: LEVELS.beginner
            },
            {
                name: 'GitHub',
                proficiency: LEVELS.competent
            },
            {
                name: 'Sketch',
                proficiency: LEVELS.competent
            }
        ]
    },
    {
        title: 'I use these as well',
        stack: [
            {
                name: 'Git',
                proficiency: LEVELS.competent
            },
            {
                name: 'Firebase',
                proficiency: LEVELS.beginner
            },
            {
                name: 'GraphQL',
                proficiency: LEVELS.beginner
            },
            {
                name: 'Redux',
                proficiency: LEVELS.competent
            },
            {
                name: 'Jest',
                proficiency: LEVELS.beginner
            },
            {
                name: 'Socket IO',
                proficiency: LEVELS.beginner
            },
            {
                name: 'Apollo',
                proficiency: LEVELS.beginner
            },
            {
                name: 'NPM',
                proficiency: LEVELS.proficient
            },
            {
                name: 'Webpack',
                proficiency: LEVELS.competent
            }
        ]
    }
];
