import {github, stackoverflow, twitter, linkedin} from './SocialIcons/icons';

interface ISocial {
    name: string,
    link: string,
    icon: string
}

export const SOCIAL: ISocial[] = [
    {
        name: 'GitHub',
        link: 'https://github.com/zeglarz',
        icon: github
    },
    {
        name: 'Twitter',
        link: 'https://twitter.com/KonradRudnicki6',
        icon: twitter
    },
    {
        name: 'Stack Overflow',
        link: 'https://stackoverflow.com/users/10702224/indyanin',
        icon: stackoverflow
    },
    {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/konradrudnicki/',
        icon: linkedin
    }
]

