import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useState } from "react";
import { tailwind, typescript, python, firebase, figma, nextjs, reactjs, canvaslogo, canvasposter } from "../assets";

const project = [
  {
    name: "Next",
    icon: nextjs,
  },
  {
    name: "TS",
    icon: typescript,
  },
  {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Firebase",
    icon: firebase,
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

const CanvasPage = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <div className="flex flex-col md:flex-row">
          <h2 className="font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[40px] grow text-[#dfd0ff]">Canvas++</h2>
          <p className="items-center flex text-white md:text-[24px] sm:text-[20px] xs:text-[20px] text-[15px] font-medium">May 2023 - Aug 2023</p>
        </div>
        <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-3 text-secondary text-[17px] leading-[30px]">
          A university student helper web-app that integrates the functionality of <span className="font-semibold text-white">Canvas</span> (Learning Management System), <span className="font-semibold text-white">NUSMods</span> (Semester Planning System), <span className="font-semibold text-white">NUSNextBus</span> (University Shuttle Timing System) into a single site.
          Complemented with productivity features and timetable optimization algorithms to assist users during module registration, Canvas++ aims to be the one-stop go-to platform for university students.
        </motion.p>
      </motion.div>
      <motion.div className="mt-4 ml-6 text-[17px] text-white font-medium flex" variants={fadeIn("left", "spring", 0.5, 0.75)}>
        <p>Web-App Link</p>
        <a className="ml-4 text-[#915eff]" href="https://canvasplusplus--development-4nz19h22.web.app">Canvas++</a>
      </motion.div>
      <motion.div className="ml-6 text-[17px] text-white font-medium flex" variants={fadeIn("left", "spring", 0.5, 0.75)}>
        <p>Report</p>
        <a className="ml-4 text-[#915eff]" href="https://docs.google.com/document/d/1yjqyzh3p23yfwCj-rEUJTlrjQFTXa2Mq/edit?usp=sharing&ouid=107315989031654876603&rtpof=true&sd=true">NUS Orbital Milestone 3 Report</a>
      </motion.div>
      <motion.div className="ml-6 text-[17px] text-white font-medium flex" variants={fadeIn("left", "spring", 0.5, 0.75)}>
        <p>Presentation Video</p>
        <a className="ml-4 text-[#915eff]" href="">NUS Orbital Milestone 3 Video</a>
      </motion.div>
      <motion.div className="ml-6 text-[17px] text-white font-medium flex" variants={fadeIn("left", "spring", 0.5, 0.75)}>
        <p>Poster</p>
        <a className="ml-4 text-[#915eff]" href="https://drive.google.com/file/d/1HpfmMsL5kr9loiWqSJdVyTN0Rbz1DnBy/view?usp=sharing">NUS Orbital Milestone 3 Poster</a>
      </motion.div>
      <motion.div className="ml-6 text-[17px] text-white font-medium flex" variants={fadeIn("left", "spring", 0.5, 0.75)}>
        <p>Award</p>
        <a className="ml-4 text-[#915eff]" href="">Achieved Artemis (Extreme) in Orbital 2023</a>
      </motion.div>
      <motion.div className="ml-6 text-[17px] text-white font-medium flex" variants={fadeIn("left", "spring", 0.5, 0.75)}>
        <p>Platform</p>
        <p className="ml-4">Web</p>
      </motion.div>
      <motion.div className="ml-6 text-[17px] text-white font-medium flex" variants={fadeIn("left", "spring", 0.5, 0.75)}>
        <p>Github Source</p>
        <a className="ml-4 text-[#915eff]" href="https://github.com/ElginTZM/CanvasPlusPlus">Github Repo (Private)</a>
      </motion.div>
      <motion.div className="mt-4 flex flex-wrap gap-3" variants={fadeIn("left", "spring", 0.7, 0.75)}>
        {project.map((tech) => (
          <TechCard key={tech.icon} props={tech} /> 
        ))}
      </motion.div>
      <motion.p className="mt-4 text-xl font-medium flex sm:text-2xl text-secondary uppercase tracking-wider" variants={fadeIn("left", "spring", 0.5, 0.75)}>
        Project Showcase
      </motion.p>
      <img src={canvaslogo} className="w-3/4 md:w-1/4 mx-auto mt-4"/>
      <img src={canvasposter} className="w-full md:w-1/2 mx-auto mt-10"/>
      <iframe src="https://drive.google.com/file/d/13DsLLYDULPmS9D4zMXpNiwZSZRFEfoQH/preview" allow="autoplay" width="100%" height="200" allowFullScreen className="mx-auto mt-10 xs:h-[280px] sm:h-[320px] md:h-[360px] md:w-[640px]"></iframe>
    </>
  )
}

const CanvasComp = SectionWrapper(CanvasPage, "");

export default CanvasComp;