import { SectionWrapper } from "../hoc";
import { technologies, tools, database } from "../constants"
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { useState } from "react";

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

const TechPage = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My tools</p>
        <h2 className={styles.sectionHeadText}>Technical Proficiency.</h2>
      </motion.div>
      <motion.p className="mt-8 text-3xl font-semibold text-secondary" variants={fadeIn("left", "spring", 0.4, 0.75)}>Programming Languages</motion.p>
      <div className="mt-3 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <TechCard key={tech.icon} props={tech} /> 
        ))}
      </div>
      <motion.p className="mt-3 text-3xl font-semibold text-secondary" variants={fadeIn("left", "spring", 0.8, 0.75)}>Tools and Frameworks</motion.p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tools.map((tech) => (
          <TechCard key={tech.icon} props={tech} /> 
        ))}
      </div>
      <motion.p className="mt-3 text-3xl font-semibold text-secondary" variants={fadeIn("left", "spring", 1.2, 0.75)}>Databases</motion.p>
      <div className="mt-3 flex flex-wrap gap-2">
        {database.map((tech) => (
          <TechCard key={tech.icon} props={tech} /> 
        ))}
      </div>
    </>
  )
}

const Tech = SectionWrapper(TechPage, "")

export default Tech;