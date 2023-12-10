import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      links: [
        {
          text: 'Challenge',
          href: 'https://www.nasa.gov/learning-resources/app-development-challenge/about-nasa-app-development-challenge-adc/',
        },
        {
          text: 'Team',
          href: getPermalink('/about/team'),
        },
        {
          text: 'Outreach',
          href: getPermalink('/about/outreach'),
        },
      ],
    },
    {
      text: 'Overview',
      links: [
        {
          text: 'Development',
          href: getPermalink('/overview/development'),
        },
        {
          text: 'Challenges',
          href: getPermalink('/overview/challenges'),
        },
      ],
    },
    {
      text: 'Blog',
      href: 'blog',
    },
    {
      text: 'Media',
      href: '/media',
    },
  ],
  actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'About',
      links: [
        {
          text: 'Challenge',
          href: 'https://www.nasa.gov/learning-resources/app-development-challenge/about-nasa-app-development-challenge-adc/',
        },
        { text: 'Team', href: '/about/team' },
        { text: 'Outreach', href: '/about/outreach' },
      ],
    },
    {
      title: 'Overview',
      links: [
        { text: 'Developement', href: '/overview/development' },
        { text: 'Challenges', href: '/overview/challenges' },
      ],
    },
    {
      title: 'Blog',
      links: [{ text: 'Posts', href: '/blog' }],
    },
    {
      title: 'Media',
      links: [
        { text: 'Videos', href: '/media' },
        { text: 'Content', href: '/media' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Mail', icon: 'tabler:mail', href: 'mailto:contact@dvexplorers.codes' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/dvexplorers/' },
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/aiworld2020/nasa-adc-2023' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: '/media' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm">🌒</span>
    Created with an <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://astro.build/"> Astro</a> template by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/"> onWidget</a> · Modified by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://dvexplorers.codes/"> DVExplorers</a> · All rights reserved.
  `,
};
