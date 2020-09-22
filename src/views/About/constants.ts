import { ITechs, LEVELS } from './constants.d';
import * as img from '../../assets/skills';


export const TECHS: ITechs[] = [
    {
        title: 'Front-end',
        stack: [
            {
                name: 'HTML',
                proficiency: LEVELS.proficient,
                image: img.html5,
            },
            {
                name: 'CSS',
                proficiency: LEVELS.proficient,
                image: img.css3,
            },
            {
                name: 'JavaScript',
                proficiency: LEVELS.proficient,
                image: img.javascript,
            },
            {
                name: 'TypeScript',
                proficiency: LEVELS.beginner,
                image: img.typescript,

            },
            {
                name: 'React JS',
                proficiency: LEVELS.proficient,
                image: img.react,
            },
            {
                name: 'Sass',
                proficiency: LEVELS.competent,
                image: img.sass,
            },
            {
                name: 'Gatsby',
                proficiency: LEVELS.beginner,
                image: img.gatsby,
            },
            {
                name: 'Styled Components',
                proficiency: LEVELS.proficient,
                image: img.styledcomponents,
            },
        ],
    },
    {
        title: 'Back-end',
        stack: [
            {
                name: 'NodeJS',
                proficiency: LEVELS.competent,
                image: img.nodejs,
            },
            {
                name: 'PostgreSQL',
                proficiency: LEVELS.beginner,
                image: img.postgres,
            },
            {
                name: 'MongoDB',
                proficiency: LEVELS.competent,
                image: img.mongodb,
            },
            {
                name: 'Express',
                proficiency: LEVELS.competent,
                image: img.express,
            },
        ],
    },
    {
        title: 'Software & other tools',
        stack: [
            {
                name: 'VSCode',
                proficiency: LEVELS.competent,
                image: img.vscode,
            },
            {
                name: 'Postman',
                proficiency: LEVELS.competent,
                image: img.postman,
            },
            {
                name: 'Adobe Xd',
                proficiency: LEVELS.beginner,
                image: img.adobexd,
            },
            {
                name: 'Adobe Illustrator',
                proficiency: LEVELS.beginner,
                image: img.illustrator,
            },
            {
                name: 'GitHub',
                proficiency: LEVELS.competent,
                image: img.github,
            },
            {
                name: 'Sketch',
                proficiency: LEVELS.competent,
                image: img.sketch,
            },
            {
                name: 'Webstorm',
                proficiency: LEVELS.competent,
                image: img.webstorm,
            },
        ],
    },
    {
        title: 'I use these as well',
        stack: [
            {
                name: 'Git',
                proficiency: LEVELS.competent,
                image: img.git,
            },
            {
                name: 'Firebase',
                proficiency: LEVELS.beginner,
                image: img.firebase,
            },
            {
                name: 'GraphQL',
                proficiency: LEVELS.beginner,
                image: img.graphql,
            },
            {
                name: 'Redux',
                proficiency: LEVELS.competent,
                image: img.redux,
            },
            {
                name: 'Jest',
                proficiency: LEVELS.beginner,
                image: img.jest,
            },
            {
                name: 'Socket IO',
                proficiency: LEVELS.beginner,
                image: img.socketio,
            },
            {
                name: 'Apollo',
                proficiency: LEVELS.beginner,
                image: img.apollo,
            },
            {
                name: 'NPM',
                proficiency: LEVELS.proficient,
                image: img.npm,
            },
            {
                name: 'Webpack',
                proficiency: LEVELS.competent,
                image: img.webpack,
            },
        ],
    },
];
