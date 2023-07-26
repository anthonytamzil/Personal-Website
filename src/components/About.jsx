import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { mePicture } from "../assets";


const AboutPage = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </motion.div>
      <div className="flex md:flex-row flex-col mt-4 w-full">
        <motion.img variants={fadeIn("", "", 0.1, 1)} src={mePicture} className="md:w-1/3 w-full border-white border-2 rounded-xl object-cover shadow-card " alt=""/>
        <motion.p variants={fadeIn("", "", 0.1, 1)} className="text-secondary text-[17px] max-w-3xl leading-[30px] md:w-2/3 w-full md:mt-0 mt-4 md:ml-10">
          I am currently a student at the National University of Singapore, studying 
          Computer Science. I have a passion for software development, coding, solving 
          challenging problems and learning new technologies. Exposed to programming 
          since secondary school, I aim to get better at it everyday, working hard towards
          my dreams of being a full-time Software Engineer. Away from the computer, 
          I love Formula One, hanging with my friends and sports like bowling and rock
          climbing.
        </motion.p>
      </div>
      
    </>
  )
}

const About = SectionWrapper(AboutPage, "about")

export default About;