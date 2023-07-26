import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    sciencecentre,
    python,
    reactjs,
    firebase,
    java,
    dso,
    tailwind,
    nodejs,
    git,
    figma,
    carrent,
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
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "JavaScript",
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
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Next JS",
      icon: nextjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "firebase",
      icon: firebase,
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
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
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };