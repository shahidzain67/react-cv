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
import heroImage from '../images/peak.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
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
  // Portfolio: 'portfolio',
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
        at <strong className="text-stone-100">Brilliant Planet</strong> helping build tools to support carbon removal using algae.
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
    content: <p> I undertook a PhD at the University of Salford to pursue my interest in engineering applications in medicine. My project titled "Development of an industrial test platform for foot health devices" involved the creation of a robotic system and 3D printed human foot model to test prosthetic and orthotic foot products against clinical standards and provide a test solution for industry. Through this I gained significant experience in outlining a specification to meet the needs of stakeholders and align with cutting edge research, design, develop and validate a product and ultimately deliver a test package to be implemented in industry.
      <li><strong>Data Processing and Analytics:</strong> Matlab, Python (Pandas)</li>
      <li><strong>CAD and Other:</strong> Solidworks, Cura, Vicon/Qualisys, Visual3D</li>
    </p>,
  },
  {
    date: 'March 2023',
    location: 'HyperionDev/University of Edinburgh',
    title: 'Data Science Bootcamp',
    content: <p>Following my degree, I completed a 3 month intensive Data Science Bootcamp alongside my PhD to further develop my understanding of gold standard data science practices. The course gave me an opportunity to apply my existing Python skills to advanced projects involving data wrangling, cleaning and analysis while also introducing me to core machine learning concepts.
      <li><strong>Python for Data Science</strong></li>
      <li><strong>Data Analytics and Exploration:</strong> MySQL, Pandas, Numpy, Seaborn, Matplotlib, Tableau</li>
      <li><strong>Machine Learning and AI:</strong> regression, supervised learning, unsupervised learning, neural networks </li>
    </p>,
  },
  {
    date: 'September 2019',
    location: 'University of Manchester',
    title: 'BEng Mechatronic Engineering with an Industrial Placement',
    content: <p>I completed my Bachelors of Mechatronic Engineering with an Industrial Placement at the University of Manchester and achieved a thorough education in the underlying theory, concepts, and science behind programming, robotics and electronic engineering. It was here that I discovered my passion for engineering applied in medical, financial and tech sectors, end-to-end application software development, and found that I have a knack for grasping new technologies quickly.
      <li><strong>Embedded systems:</strong> C, C++, Machine code, Arduino, Raspberry Pi</li>
    </p>,
  }
];

export const experience: TimelineItem[] = [
  {
    date: 'July 2023 - Present',
    location: 'Brilliant Planet',
    title: 'Data Engineer / Full Stack Developer',
    content: (
      <p> I am currently working as a Data Engineer / Full Stack Developer at Brilliant Planet. Operating in the carbon market, we are a startup building algae-based carbon capture technology to offset emissions. Here I am responsible for building the core technologies used by the science and engineering teams to wrangle large datasets, analyse this data, and visualise control systems, all through intuitive web applications.  
      <li><strong>Frontend:</strong> React/Typescript, Dash</li>
      <li><strong>Backend/Cloud/Database:</strong> AWS, MySQL, Docker, Gitlab CI/CD, Node </li>
      </p>
    ),
  },
  {
    date: 'March 2023 - June 2023',
    location: 'Eleven-I',
    title: 'Data Scientist/Analyst',
    content: (
      <p>
        Eleven-I is responsible for creating embedded devices for wind turbine management and analysis. I was brought on during my PhD to develop data science and analytics protocols currently in place, to provide further insight into the performance of individual wind turbines.
        <li><strong>Analytics:</strong> Tableau, Grafana, Python (Pandas, Numpy) </li>
        <li><strong>Core technologies:</strong> C, C++, Docker, Kubernetes </li>
      </p>
    ),
  },
  {
    date: 'June 2019 - September 2019',
    location: 'Codethink Ltd',
    title: 'Software Engineer Internship',
    content: (
      <p>
        Codethink are open source specialists in developing system-level software infrastructure for clients in the electronics, finance, medical and automotive sectors. I completed a 3 month placement with the company within the automotive team. Here I had the opportunity to liaise with clients and contribute to several repositories to document product development and update README's for technical and non-technical users. Additionally, I delivered open-source python based projects to engage with the wider GNOME 
        community and attended an international GNOME conference.
        <li><strong>Core technologies:</strong> Python, Git, Linux (GNOME) </li>
      </p>
    ),
  },
  {
    date: 'June 2017 - September 2018',
    location: 'Yelo Test Systems',
    title: 'Applications Engineer Industrial Placement',
    content: (
      <p>
        Yelo produces electronics test equipment for the photonics industry. I was offered a scholarship and industrial placement with the company to rotate between electronics, mechanical and software engineering teams. Through my placement I developed Excel macros to wrangle, clean and visualise test results. Additionally, I designed and delivered an autonomous manufacturing tool and organised outreach programs with local schools to introduce students to software engineering and programming.
        <li><strong>Core technologies:</strong> Visual Basic, LabView, C, Arduino </li>
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
        name: 'Static Web Development',
        level: 10,
      },
      {
        name: 'Dash',
        level: 8,
      },
      {
        name: 'React/Typescript',
        level: 7,
      },
    ],
  },
  {
    name: 'Backend/Cloud/Database',
    skills: [
      {
        name: 'AWS',
        level: 8,
      },
      {
        name: 'MySQL',
        level: 8,
      },
      {
        name: 'Docker',
        level: 7,
      },
    ],
  },
  {
    name: 'Analytics',
    skills: [
      {
        name: 'Tableau',
        level: 8,
      },
      {
        name: 'Grafana',
        level: 8,
      },
      {
        name: 'Python (Pandas, NumPy)',
        level: 8,
      },
    ],
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
  { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/z-shahid/' },
  { label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/zshahidresearch' },
];
