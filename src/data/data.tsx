import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import GitlabIcon from '../components/Icon/GitlabIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Zain Shahid CV Website',
  description: "Zain Shahid CV Website",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Zain Shahid.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a London based <strong className="text-stone-100">Data Engineer and Full Stack Developer</strong>, currently working
        at <strong className="text-stone-100">Brilliant Planet</strong> helping build tools to support carbon removal system using algae.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me <strong className="text-stone-100">rock climbing</strong> in nature,
        <strong className="text-stone-100"> knitting</strong> something cosy, or hiking along the beautiful scenary of the{' '}
        <strong className="text-stone-100">UK</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a Data Engineer and Full Stack Developer experienced with various programming languages including Python, Javascript and C, cloud computing services such as AWS and both frontend and backend web development. Additionally, I am a PhD candidate awaiting a final viva.`,
  aboutItems: [
    { label: 'Location', text: 'London, UK', Icon: MapIcon },
    { label: 'Age', text: '26', Icon: CalendarIcon },
    { label: 'Nationality', text: 'British / Pakistani', Icon: FlagIcon },
    { label: 'Interests', text: 'Rock climbing, knitting, hiking, literature', Icon: SparklesIcon },
    {
      label: 'Study', text: 'University of Manchester', Icon: AcademicCapIcon
    },
    { label: 'Employment', text: 'Brilliant Planet', Icon: BuildingOffice2Icon },
  ],
};

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'September 2023',
    location: 'University of Salford',
    title: 'PhD Prosthetics and Orthotics',
    content: <p>Thesis title: Development of an industrial test platform for foot health devices.
      <p>I created a robotic system and 3D printed human foot model to test prosthetic and orthotic foot products against clinical standards to provide a test solution for industry.</p>
      <li><strong>Data Processing and Analysis:</strong> Matlab, Python</li>
      <li><strong>CAD and Other:</strong> Solidworks, Cura, Vicon/Qualisys, Visual3D</li>
    </p>,
  },
  {
    date: 'March 2023',
    location: 'HyperionDev/University of Edinburgh',
    title: 'Data Science Bootcamp',
    content: <p>3 month intensive Data Science Bootcamp.
      <li><strong>Python for Data Science</strong></li>
      <li><strong>Data Analytics and Exploration:</strong> MySQL, Pandas, Numpy, Seaborn, Matplotlib, Tableau</li>
      <li><strong>Machine Learning and AI:</strong> regression, supervised learning, unsupervised learning, neural networks </li>
    </p>,
  },
  {
    date: 'September 2019',
    location: 'University of Manchester',
    title: 'BEng Mechatronic Engineering with an Industrial Placement',
    content: <p>Thesis title: Development of an industrial test platform for foot health devices.
      <p>I created a robotic system and 3D printed human foot model to test prosthetic and orthotic foot products against clinical standards to provide a test solution for industry.</p>
      <li><strong>Data Processing and Analysis:</strong> Matlab, Python</li>
      <li><strong>CAD and Other:</strong> Solidworks, Cura, Vicon/Qualisys, Visual3D</li>
    </p>,
  }
];

export const experience: TimelineItem[] = [
  {
    date: 'July 2023 - Present',
    location: 'Brilliant Planet',
    title: 'Data Engineer / Full Stack Developer',
    content: (
      <p>
        Building data analysis dashboard with visualizations of live and past wind turbine performance metrics
        Development of error/event detection through machine learning protocols
      </p>
    ),
  },
  {
    date: 'March 2023 - June 2023',
    location: 'Eleven-I',
    title: 'Data Scientist/Analyst',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Spanish',
        level: 8,
      },
      {
        name: 'Urdu',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'Dash',
        level: 8,
      },
      {
        name: 'React',
        level: 7,
      },
      {
        name: 'Typescript',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Cloud development/Other',
    skills: [
      {
        name: 'Git',
        level: 8,
      },
      {
        name: 'AWS including API Gateway, EC2, Lambda',
        level: 7,
      },
      {
        name: 'Docker',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Please reach out through email or LinkedIn.',
  items: [
    {
      type: ContactType.Email,
      text: 'shahidzain67@gmail.com',
      href: 'mailto:shahidzain67@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'London, UK',
      href: 'https://goo.gl/maps/sCpU991L4Pf3Qurt7',
    },
    {
      type: ContactType.Github,
      text: 'shahidzain67',
      href: 'https://github.com/shahidzain67',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  { label: 'Github', Icon: GithubIcon, href: 'https://github.com/shahidzain67' },
  { label: 'Gitlab', Icon: GitlabIcon, href: 'https://gitlab.com/shahidzain67' },
  { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/zshahidresearch/' },
  { label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/zshahidresearch' },
];
