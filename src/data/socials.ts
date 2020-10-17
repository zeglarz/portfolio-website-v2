import {
  github,
  linkedin,
  mail,
  stackoverflow,
  twitter,
} from '../components/Hero/SocialIcons/icons';

interface ISocial {
  name: string;
  link: string;
  icon: string;
  footer?: boolean;
}

export const SOCIAL: ISocial[] = [
  {
    name: 'GitHub',
    link: 'https://github.com/zeglarz',
    icon: github,
    footer: true,
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/KonradRudnicki6',
    icon: twitter,
  },
  {
    name: 'Stack Overflow',
    link: 'https://stackoverflow.com/users/10702224/indyanin',
    icon: stackoverflow,
    footer: true,
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/konradrudnicki/',
    icon: linkedin,
    footer: true,
  },
  {
    name: 'Mail',
    link:
      'mailto:konrad.rudnicki@gmail.com?subject=Hello%20from%20konradrudnicki.com',
    icon: mail,
    footer: true,
  },
];
