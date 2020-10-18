import React, { lazy } from 'react';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Home from '../views/Home';
import About from '../views/About';
import Contact from '../views/Contact';
import Projects from '../views/Projects';

export default {
  projectName: 'Konrad Rudnicki',
  views: [
    {
      title: 'Home',
      pageName: `Home · Konrad Rudnicki`,
      path: '/home',
      Component: Home,
      fLine: `Welcome to my`,
      sLine: `personal portfolio`,
      content: `My name is Konrad. I'm a software engineer specializing in web and mobile app development.`,
      bText: 'Get to know me',
      bPath: '/about',
      bIcon: [<EmojiPeopleIcon />],
    },
    {
      title: 'About',
      pageName: `About · Konrad Rudnicki`,
      path: '/about',
      Component: About,
      fLine: `Want to know`,
      sLine: `more about me?`,
      content: `I present a holistic approach to what I make. From graphic design, wireframes, and mockups through architecture, coding, and deployment. And I enjoy every step of that process!`,
      bText: 'Read more about me',
      bIcon: [<ArrowDropDownIcon />],
      p1: {
        title: 'Who am I?',
        fLine: 'My name is Konrad',
        body: `My journey began in late 2019 when I decided to end up my past career and dive into the depths of coding. I picked the front-end path as I was an obvious choice for a person with a drive towards art and aesthetics as well as providing a great user experience!`,
      },
      p2: {
        title: 'Skills',
        fLine: 'Technologies I know',
        sLine: 'And use some everyday',
        body: `To deliver the aforementioned statements, I develop my skills accordingly. I always try to learn and use the greatest, and most up to date technology out there. Check what I use daily along with my proficiency in each technology.`,
      },
      banner: {
        fLine: 'Want to check out my projects?',
        sLine: 'Check them here!',
        content: `There is a saying that no words depict someone more than his doings. In the same manner for a software engineer project he or she makes tells all about them. So, what are you waiting for? Go ahead and check my work.`,
        bText: 'Go to projects',
        bPath: '/projects',
      },
    },
    {
      title: 'Projects',
      pageName: `Projects · Konrad Rudnicki`,
      path: '/projects',
      Component: Projects,
      fLine: `They say it's all about the projects`,
      sLine: `See what I've done!`,
      content: `I picked a few projects of mine that I think showcase my skills in the most significant areas of my expertise. They present my path from relatively simple apps to more and more advanced ones. I try to learn and implement something new in each app I set out to make.`,
      bText: 'See my projects',
      bIcon: [<VisibilityIcon />],
      p1: {
        fLine: 'I put my whole heart in each',
        sLine: 'and every single project',
        body: `My projects are like my children, I want them to be the best as they could be. So if you have any constructive criticism you are more to welcome to hear from you.`,
      },
      banner: {
        fLine: 'Do you feel like',
        sLine: 'reaching out to me?',
        content: `Now, after you at least have scrolled through my projects, maybe there is a chance you liked something. If this is a case, hit me up and give me some feedback!`,
        bText: 'Get in touch',
        bPath: '/contact',
      },
    },
    {
      title: 'Contact',
      pageName: `Contact · Konrad Rudnicki`,
      path: '/contact',
      Component: Contact,
      fLine: `Lets connect`,
      sLine: `Email me`,
      content: `If you came up here, please drop me a message on any subject. Either if you want to give me feedback on one of my projects, have an idea of a cool project I could help you with, or maybe a job offer. I'm open to all, for sure, I will take my time to respond to all of your inquiries!`,
    },
  ],
};
