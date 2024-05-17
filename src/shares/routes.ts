import { RouteItem } from './types';

const routes: RouteItem[] = [
  {
    title: 'WHO WE ARE',
    href: '#',
  },
  {
    title: 'WHAT WE DO',
    href: '#',
    subroute: [
      {
        title: 'Integrated Digital Marketing',
        href: '#',
      },
      {
        title: 'Social Media Marketing',
        href: '#',
      },
      {
        title: 'Performance Marketing',
        href: '#',
      },
      {
        title: 'Social Media Intelligence',
        href: '#',
      },
      {
        title: 'Web Design & Development',
        href: '#',
      },
      {
        title: 'AI & Data Science',
        href: '#',
      },
      {
        title: 'Digital Experiential Marketing',
        href: '#',
      },
      {
        title: 'Content Marketing',
        href: '#',
      },
    ],
  },
  {
    title: 'OUR WORK',
    href: '#',
  },
  {
    title: 'HEADLINES',
    href: '#',
  },
  {
    title: 'CONTACT US',
    href: '#',
  },
];

export default routes;
