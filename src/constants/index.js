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
    humanactivity,
    firebase,
    java,
    diamond,
    dso,
    tailwind,
    nodejs,
    git,
    summarised,
    figma,
    canvas,
    gcp,
    doitvolunteering,
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
      id: "project",
      title: "Projects",
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

  const machine_learning_projects = [
    {
      name: "User Activity Recognition",
      description:
        "A LSTM machine learning model that obtained a 95% accuracy in predicting a handphone user's physical activity based on accelerometer data.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "keras",
          color: "green-text-gradient",
        },
      ],
      image: humanactivity,
      source_code_link: "https://colab.research.google.com/drive/1-I37fbj1ANgnHcBjPQKBWKoC5EOP19I1?usp=sharing",
    },
    {
      name: "Diamond Price Prediction",
      description:
        "A machine learning model based on random forest regression that obtained extremely high accuracy in predicting diamond prices based on the diamond's attributes.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "sklearn",
          color: "green-text-gradient",
        },
      ],
      image: diamond,
      source_code_link: "https://drive.google.com/file/d/1finxhyhT-iNov7XHOcTM_zZry-DjKTyX/view?usp=sharing",
    },
  ];
  
  const projects = [
    {
      name: "Canvas++",
      description:
        "A university student helper web-app that integrates the functionality of Canvas (Learning Management System), NUSMods (Semester Planning System), NUSNextBus (University Shuttle Timing System) into a single site, complemented with productivity features and timetable optimization algorithms to assist users.",
      tags: [
        {
          name: "nextjs",
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
      name: "DO-IT-Volunteering",
      description:
        "A website designed to streamline the volunteering registration process for volunteers and manpower management for the organizations.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "vanillaCSS",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: doitvolunteering,
      source_code_link: "https://github.com/anthonytamzil/DO-IT-Volunteering",
    },
    {
      name: "Summarised",
      description:
        "A website that summarizes lecture videos and pdf documents for students to create cheatsheets and notes quickly and effortlessly.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "vanillaCSS",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
        {
          name: "nodejs",
          color: "orange-text-gradient",
        },
      ],
      image: summarised,
      source_code_link: "https://github.com/ElginTZM/Lifehack2023",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, tools, database, machine_learning_projects };