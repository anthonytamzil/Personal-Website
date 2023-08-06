import { motion } from "framer-motion";
import { AltSectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useState } from "react";
import { html, css, javascript, devpost, doitdashboard } from "../assets";

const project = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JS",
    icon: javascript,
  },
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

const DoItPage = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <div className="flex flex-col md:flex-row">
          <h2 className="font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[40px] grow text-[#dfd0ff]">DO-IT-Volunteering</h2>
          <p className="items-center flex text-white md:text-[24px] sm:text-[20px] xs:text-[20px] text-[15px] font-medium">Jul 2022</p>
        </div>
        <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-3 text-secondary text-[17px] leading-[30px] text-center sm:text-left">
          DO-IT-Volunteering is an all-in-one platform to <span className="font-semibold text-white">streamline</span> the process of volunteering in Singapore by allowing users to read up on different organizations and <span className="font-semibold text-white">effortlessly</span> register for any upcoming volunteering work, and for organizations to ensure the proper management of manpower for volunteering activities. By doing so, 
          we aim to spread the workforce to even the <span className="font-semibold text-white">smaller charities</span> and provide a proper framework that can be used to aid them further.
        </motion.p>
      </motion.div>
      <motion.div className="mt-4 ml-6 text-[17px] text-white font-medium flex flex-wrap" variants={fadeIn("left", "spring", 0.5, 0.75)}>
        <p>Devpost Link</p>
        <a className="ml-4 text-[#915eff]" href="https://devpost.com/software/tekong-hackers">DO-IT-Volunteering</a>
      </motion.div>
      <motion.div className="ml-6 text-[17px] text-white font-medium flex flex-wrap" variants={fadeIn("left", "spring", 0.5, 0.75)}>
        <p>Award</p>
        <a className="ml-4 text-[#915eff]" href="https://devpost.com/software/tekong-hackers">Most Impressive Pre-University Hack in NUS LifeHack 2022</a>
      </motion.div>
      <motion.div className="ml-6 text-[17px] text-white font-medium flex flex-wrap" variants={fadeIn("left", "spring", 0.5, 0.75)}>
        <p>Platform</p>
        <p className="ml-4">Online Website</p>
      </motion.div>
      <motion.div className="ml-6 text-[17px] text-white font-medium flex flex-wrap" variants={fadeIn("left", "spring", 0.5, 0.75)}>
        <p>Github Source</p>
        <a className="ml-4 text-[#915eff]" href="https://github.com/anthonytamzil/DO-IT-Volunteering">Github Repo</a>
      </motion.div>
      <motion.div className="mt-4 flex flex-wrap gap-3" variants={fadeIn("left", "spring", 0.7, 0.75)}>
        {project.map((tech) => (
          <TechCard key={tech.icon} props={tech} /> 
        ))}
      </motion.div>
      <motion.p className="mt-10 text-xl font-medium flex sm:text-2xl text-secondary uppercase tracking-wider" variants={fadeIn("left", "spring", 0.5, 0.75)}>
        Project Showcase
      </motion.p>
      <iframe src="https://www.youtube.com/embed/UoLj1g19A8U" allow="autoplay" width="100%" height="200" allowFullScreen className="mx-auto mt-4 xs:h-[280px] sm:h-[320px] md:h-[360px] md:w-[640px]"></iframe>
      <img src={doitdashboard} className="w-full md:w-3/4 mx-auto mt-4"/>
      <img src={devpost} className="w-full md:w-3/4 mx-auto mt-6"/>
    </>
  )
}

const DoItComp = AltSectionWrapper(DoItPage, "");

export default DoItComp;