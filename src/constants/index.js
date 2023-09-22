import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  figma,
  python,
  swift,
  tensorflow,
  pygame,
  keras,
  pandas,
  numpy,
  youthdigital,
  inspiritai,
  helloworld,
  komadvisors,
  dowchemical,
  ststephens,
  universityoftexas,
  universityofmichigan,
  wordle,
  jobit,
  tripguide,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Student Athelete",
    icon: mobile,
  },
  {
    title: "Data Analyst",
    icon: backend,
  },
  {
    title: "3D Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Swift",
    icon: swift,
  },
  {
    name: "Tensorflow",
    icon: tensorflow,
  },
  {
    name: "Pygame",
    icon: pygame,
  },
  {
    name: "Keras",
    icon: keras,
  },
  {
    name: "Pandas",
    icon: pandas,
  },
  {
    name: "Numpy",
    icon: numpy,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Minecraft Modding",
    company_name: "Youth Digital",
    icon: youthdigital,
    iconBg: "#42C4FE",
    date: "June 2014 - September 2014",
    points: [
      "Completed a 30-hour course in Java programming through Youth Digital, a company that offers online courses in computer programming and digital design for children.",
      "Learned about object-oriented programming and how to use Java to create Minecraft mods.",
      "Developed a mod that included custom blocks and items in Minecraft.",
      "Sparked my interest in computer programming and led to further exploration."

    ],
  },
  {
    title: "Coding in Python, Swift, and C#",
    company_name: "Hello World",
    icon: helloworld,
    iconBg: "#FFFFFF",
    date: "2019-2020",
    points: [
      "Completed five computer programming sessions through Hello World; began taking courses during the summer before eighth grade.",
      "Learned about app development in Swift, game development in Unity, and object-oriented programming in Python.",
      "Designed user interfaces and game scenes; enhanced communication and project management skills."
    ]
  },
  {
    title: "Physics and Forensics",
    company_name: "University of Michigan",
    icon: universityofmichigan,
    iconBg: "#00224B",
    date: "July 2021",
    points: [
      "Learned about the physics of forensics through a curriculum that included experimental physics methods applied to physical crime scene evidence.",
      "Enjoyed the opportunity for career exploration.",
      "Session was conducted remotely due to Covid."
    ]
  },
  {
    title: "iOS App Development",
    company_name: "University of Texas Austin",
    icon: universityoftexas,
    iconBg: "#C05600",
    date: "July 2022",
    points: [
      "Participated in a camp focused on developing coding proficiency in Swift and XCode.",
      "Learned through a curriculum that included both SwiftUI and UIKit; explored the different Kits and packages.",
      "Practiced app User Interface design and problem solved challenges presented.",
      "Lived in UT’s dormitory; experienced campus living and increased independence."
    ]
  },
  {
    title: "Advanced Computer Science Independent Study",
    company_name: "St. Stephen’s",
    icon: ststephens,
    iconBg: "#4B287B",
    date: "Grade 11-12",
    points: [
      "Independent study project-based course focused on full stack program development.",
      "Built an IOS app for a water testing tech startup (Panacea) that allows users to crowd-source information on public waterway safety.",
      "Built a sports data analysis program using BeautifulSoup to web scrape data off of official sports network sites and Pandas to organize data structures.",
    ]
  },
  {
    title: "Statistics and Data Science Independent Study",
    company_name: "St. Stephen’s",
    icon: ststephens,
    iconBg: "#4B287B",
    date: "Grade 12",
    points: [
      "Collaborated with faculty sponsor to design a year-long full-credit course focused on data science and advanced statistical analysis.",
      "Learned about data science and statistical analysis through a curriculum that included Python, R, and SQL.",
      "Developing a capstone project that will accumulate all the skills of the course into a single project."
    ]
  },
  {
    title: "Machine Learning",
    company_name: "Inspirit AI",
    icon: inspiritai,
    iconBg: "#949494",
    date: "April 2023 - June 2023",
    points: [
      "Developed a machine learning program for real-time object detection in videos and street images as part of a mentor-led group of 5 members while exploring the mechanisms and ethics of self-driving car technologies.",
      "Gained valuable experience in machine learning concepts including linear regression, natural language processing, neural networks and convolutional neural networks.",
      "Acquired expertise in Python libraries and frameworks, including Kera and Tensorflow.",
      "Project culminated in a presentation of findings to the larger InspiriAI community."
    ]
  },
  {
    title: "Web App Development Intern",
    company_name: "KOM Advisors",
    icon: komadvisors,
    iconBg: "#FFFFFF",
    date: "January 2023 - Current",
    points: [
      "Selected as an intern for a small consulting business focused on financial services technology.",
      "Independently designed and coded a web-based application to transition a client evaluation from paper to online. Application coded using React (like this website!).",
      "Delivered a preliminary version and then added additional functionality as required by the client.",
      "Persisted through coding challenges and troubleshooting. Learned valuable skills in independent work, time management, problem-solving, and communication."
    ]
  },
  {
    title: "Project Management Development Intern",
    company_name: "DOW Chemical",
    icon: dowchemical,
    iconBg: "#FFFFFF",
    date: "January 2023 - Current",
    points: [
      "Hired as an intern to develop an Android app aimed at enhancing version control and streamlining documentation updates between maintenance and engineering teams. Objective was mitigating the risk of lost work. Partnered with an engineer to understand functional requirements and platform standards at Dow.",
      "App programmed in Javascript. Learned about privacy of user information while using SQL database.",
      "Researched various methods to meet objectives; enhanced problem-solving ability and project management; learned how to work effectively with industry professionals and about workplace expectations."
    ]
  }
  
  

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Wordle Bot",
    description:
      "Python algorithm for Wordle that strategically assigns a value to each letter, considering its information-revealing potential. The algorithm then employs various functions to determine the next guessable word with the highest value. This object-oriented project enhanced my problem-solving skills through intricate Python logic.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },

    ],
    image: wordle,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },{
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
