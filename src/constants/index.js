import {
    web,
    javascript,
    typescript,
    html,
    css,
    sciencecentre,
    python,
    vercel,
    reactjs,
    firebase,
    java,
    dso,
    tailwind,
    nodejs,
    git,
    figma,
    carrent,
    canvas,
    jobit,
    tripguide,
    gcp,
    mysql,
    nextjs,
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
      title: "Web Developer",
      icon: web,
    },

  ];

  const tools = [
    {
      name: "React",
      icon: reactjs,
    },
    {
      name: "Next",
      icon: nextjs,
    },
    {
      name: "Tailwind",
      icon: tailwind,
    },
    {
      name: "Node",
      icon: nodejs,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Figma",
      icon: figma,
    },
    {
      name: "Vercel",
      icon: vercel,
    },
  ]

  const database = [
    {
      name: "Firebase",
      icon: firebase,
    },
    {
      name: "GCP",
      icon: gcp,
    },
  ]
  
  const technologies = [
    {
      name: "JS",
      icon: javascript,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "HTML",
      icon: html,
    },
    {
      name: "CSS",
      icon: css,
    },
    {
      name: "TS",
      icon: typescript,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
  ];
  
  const experiences = [
    {
      title: "Machine Learning Research Intern",
      company_name: "DSO National Laboratories",
      icon: dso,
      iconBg: "#FFFFFF",
      date: "Feb 2022 - May 2022",
      points: [
        "Worked on Bidirectional Encoder Representations from Transformers (BERT) and XLM-RoBERTa, with the use of PyTorch and Google Cloud Platform.",
        "Improved a pre-trained state-of-the-art Natural Language Processing (NLP) BERT model structure, by incorporating vectorization and parallel processing techniques, to achieve an approximately 50% reduction in processing time.",
      ],
    },
    {
      title: "Machine Learning Research Intern",
      company_name: "DSO National Laboratories",
      icon: dso,
      iconBg: "#FFFFFF",
      date: "Oct 2018 - Dec 2018",
      points: [
        "Successfully integrated multiple components (JeVois Smart Vision Camera, Raspberry Pi 3) into a single system with the use of Robotic Operating System (ROS) on a TurtleBot3.",
        "Researched on integrating a Convolutional Neural Network (CNN) with a JeVois Smart Vision Camera to detect human faces.",
      ],
    },
    {
      title: "Student Researcher",
      company_name: "Centre for Research and Applied Learning in Science (CRADLΣ)",
      icon: sciencecentre,
      iconBg: "#E6DEDD",
      date: "Nov 2017 - Dec 2017",
      points: [
        "Developed a working prototype of a flux gate magnetometer that is capable of detecting any disturbances in Earth's magnetic field within a close proximity. ",
        "Applied basic physics and algebraic concepts as well as grasped a substantial understanding of hardware serial for Arduino Uno.",
      ],
    },
    {
      title: "Student Researcher",
      company_name: "Centre for Research and Applied Learning in Science (CRADLΣ)",
      icon: sciencecentre,
      iconBg: "#E6DEDD",
      date: "Jun 2016 - Jul 2016",
      points: [
        "Developed a working prototype of an autonomous algal filtration device.",
        "Utilized relevant hardware skills (soldering, breadboard wiring) to assemble the device, and basic Arduino to program on-board sensors and servo motors",
        "Used LibreCAD to laser cut a custom body for the prototype's hardware.",
      ],
    },
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
  ];
  
  const projects = [
    {
      name: "Canvas++",
      description:
        "A university student helper web-app that integrates the functionality of Canvas (Learning Management System), NUSMods (Semester Planning System), NUSNextBus (University Shuttle Timing System) into a single site, complemented with productivity features and timetable optimization algorithms to assist users.",
      tags: [
        {
          name: "nextJS",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindCSS",
          color: "green-text-gradient",
        },
        {
          name: "typescript",
          color: "pink-text-gradient",
        },
        {
          name: "firebase",
          color: "orange-text-gradient",
        },
      ],
      image: canvas,
      source_code_link: "https://github.com/ElginTZM/CanvasPlusPlus",
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
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, tools, database };