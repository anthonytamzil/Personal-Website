import { motion } from "framer-motion";
import { AltSectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useState } from "react";
import { html, javascript, css, nodejs, azure, figma, summarisedpg1, summarisedpg2 } from "../assets";

const project = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "JS",
    icon: javascript,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "Node",
    icon: nodejs,
  },
  {
    name: "Azure",
    icon: azure,
  },
  {
    name: "Figma",
    icon: figma,
  }

];

const TechCard = ({props}) => {
  const [show, setShow] = useState(false);
  const label = "h-4 w-fit text-sm font-medium";
  const imgLabel = props.name === "Vercel"
    ? "h-9 w-11 items-center my-auto"
    : "h-11 w-11 items-center my-auto"

  return (
    <div className="flex flex-col w-11 items-center text-center" onMouseOver={() => setShow(true)} onMouseOut={() => setShow(false)}>
      <img src={props.icon} alt="" className={imgLabel}/>
      <motion.p className={label} animate={show ? {opacity: 100} : {opacity: 0}}>
        {props.name}
      </motion.p>
    </div>
  )
}

const SummarisedPage = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <div className="flex flex-col md:flex-row">
          <h2 className="font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[40px] grow text-[#dfd0ff]">Summarised</h2>
          <p className="items-center flex text-white md:text-[24px] sm:text-[20px] xs:text-[20px] text-[15px] font-medium">May 2023</p>
        </div>
        <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-3 text-secondary text-[17px] leading-[30px] text-center sm:text-left">
          A website that allows students to <span className="font-semibold text-white">summarise content with ease</span>. Whether it be from the lecture video or slides, students can just upload the lecture video / materials and expect a succinct summary from our web-app, Summarised, within seconds! This allows students to <span className="font-semibold text-white">quickly sieve through</span> the multitude of information that is available 
          to them, <span className="font-semibold text-white">increasing their efficiency</span> at clearing their backlog and helping students learn with digitised tools like ours.        </motion.p>
        </motion.div>
      <motion.div className="mt-4 ml-6 text-[17px] text-white font-medium flex flex-wrap" variants={fadeIn("left", "spring", 0.5, 0.75)}>
        <p>Devpost Link</p>
        <a className="ml-4 text-[#915eff]" href="https://canvasplusplus--development-4nz19h22.web.app">Summarised</a>
      </motion.div>
      <motion.div className="ml-6 text-[17px] text-white font-medium flex flex-wrap" variants={fadeIn("left", "spring", 0.5, 0.75)}>
        <p>Platform</p>
        <p className="ml-4">Online Website</p>
      </motion.div>
      <motion.div className="ml-6 text-[17px] text-white font-medium flex flex-wrap" variants={fadeIn("left", "spring", 0.5, 0.75)}>
        <p>Github Source</p>
        <a className="ml-4 text-[#915eff]" href="https://github.com/ElginTZM/Lifehack2023">Github Repo</a>
      </motion.div>
      <motion.div className="mt-4 flex flex-wrap gap-3" variants={fadeIn("left", "spring", 0.7, 0.75)}>
        {project.map((tech) => (
          <TechCard key={tech.icon} props={tech} /> 
        ))}
      </motion.div>
      <motion.p className="mt-8 text-xl font-medium flex sm:text-2xl text-secondary uppercase tracking-wider" variants={fadeIn("left", "spring", 0.5, 0.75)}>
        Project Showcase
      </motion.p>
      <iframe src="https://www.youtube.com/embed/JU4HsIMGWmY" allow="autoplay" width="100%" height="200" allowFullScreen className="mx-auto mt-4 xs:h-[280px] sm:h-[320px] md:h-[360px] md:w-[640px]"></iframe>
      <img src={summarisedpg1} className="w-full md:w-3/4 mx-auto mt-4"/>
      <img src={summarisedpg2} className="w-full md:w-3/4 mx-auto mt-6"/>
    </>
  )
}

const SummarisedComp = AltSectionWrapper(SummarisedPage, "");

export default SummarisedComp;