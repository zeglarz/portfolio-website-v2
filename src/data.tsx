import React from 'react';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import Projects from './views/Projects';

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
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi delectus distinctio doloremque' +
        ' dolores dolorum, earum facere, id illum in ipsum, itaque laudantium magni maiores molestiae mollitia neque nostrum qui repellendus.',
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
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi delectus distinctio doloremque' +
        ' dolores dolorum, earum facere, id illum in ipsum, itaque laudantium magni maiores molestiae mollitia neque nostrum qui repellendus.',
      bText: 'Read more about me',
      bIcon: [<ArrowDropDownIcon />],
      p1: {
        title: 'Who am I?',
        fLine: 'My name is Konrad',
        body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusamus beatae commodi consectetur cum dolorem doloribus,
                fugiat id libero minima molestiae necessitatibus nihil odio quam
                quia quisquam quo tenetur ullam voluptas!`,
      },
      p2: {
        title: 'Skills',
        fLine: 'Technologies I know',
        sLine: 'And use some everyday',
        body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusamus beatae commodi consectetur cum dolorem doloribus,
                fugiat id libero minima molestiae necessitatibus nihil odio quam
                quia quisquam quo tenetur ullam voluptas!`,
      },
      banner: {
        fLine: 'Want to check out my projects?',
        sLine: 'Check them here!',
        content:
          ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae commodi consectetur cum' +
          ' dolorem doloribus, fugiat id libero minima molestiae necessitatibus nihil odio quam quia quisquam quo' +
          ' tenetur ullam voluptas!',
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
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi delectus distinctio doloremque' +
        ' dolores dolorum, earum facere, id illum in ipsum, itaque laudantium magni maiores molestiae mollitia neque nostrum qui repellendus.',
      bText: 'See my projects',
      bIcon: [<VisibilityIcon />],
      p1: {
        body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusamus beatae commodi consectetur cum dolorem doloribus,
                fugiat id libero minima molestiae necessitatibus nihil odio quam
                quia quisquam quo tenetur ullam voluptas!`,
        fLine: 'I put my whole heart in each',
        sLine: 'and every single project',
      },
      banner: {
        fLine: 'Do you feel like',
        sLine: 'reaching out to me?',
        content:
          ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae commodi consectetur cum' +
          ' dolorem doloribus, fugiat id libero minima molestiae necessitatibus nihil odio quam quia quisquam quo' +
          ' tenetur ullam voluptas!',
        bText: 'Get in touch',
        bPath: '/contact',
      },
    },
    {
      title: 'Contact',
      pageName: `Contact · Konrad Rudnicki`,
      path: '/contact',
      Component: Contact,
      fLine: `Contact`,
      sLine: `Send me an email`,
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi delectus distinctio doloremque' +
        ' dolores dolorum, earum facere, id illum in ipsum, itaque laudantium magni maiores molestiae mollitia neque nostrum qui repellendus.',
    },
  ],
};
