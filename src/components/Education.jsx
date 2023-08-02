import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const EducationPage = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Studies</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>
      <motion.p className="mt-10 text-3xl font-semibold text-white" variants={fadeIn("left", "spring", 0.4, 0.75)}>National University of Singapore</motion.p>
      <motion.div className="mt-2 text-secondary text-lg italic flex flex-col md:flex-row font-medium" variants={fadeIn("left", "spring", 0.5, 0.75)}>
        <p className="grow">Bachelor of Computing in Computer Science (Hons)</p>
        <p className=" not-italic">Aug 2022 - Present</p>
      </motion.div>
      <motion.ul className="mt-1 list-disc text-gray-200 ml-12" variants={fadeIn("left", "spring", 0.5, 0.75)}>
        <li>
          <span className="font-semibold">Relevant Course Work:</span> Object-Oriented Programming, Software Engineering, Data Structures and Algorithms, Computer Organization
        </li>
      </motion.ul>
      <motion.p className="mt-10 text-3xl font-semibold text-white" variants={fadeIn("left", "spring", 0.8, 0.75)}>Victoria Junior College</motion.p>
      <motion.div className="mt-2 text-secondary text-lg italic flex flex-col md:flex-row font-medium" variants={fadeIn("left", "spring", 0.9, 0.75)}>
        <p className="grow">GCE A Levels (87.5 out of 90 RP)</p>
        <p className=" not-italic">Jan 2018 - Dec 2019</p>
      </motion.div>
      <motion.ul className="mt-1 list-disc text-gray-200 ml-12" variants={fadeIn("left", "spring", 0.9, 0.75)}>
        <li>
        <span className="font-semibold">Subjects:</span> H2 Physics, H2 Mathematics, H2 Economics, H2 Chemistry, H1 General Paper, H1 Project Work
        </li>
        <li>
        <span className="font-semibold">Activities and Societies:</span> StudioV (Videography Club), Robotics Club, Pets and Animals Welfare Society (PAWS)
        </li>
      </motion.ul>
      <motion.p className="mt-10 text-3xl font-semibold text-white" variants={fadeIn("left", "spring", 1.2, 0.75)}>Victoria School</motion.p>
      <motion.div className="mt-2 text-secondary text-lg italic flex flex-col md:flex-row font-medium" variants={fadeIn("left", "spring", 1.3, 0.75)}>
        <p className="grow">Integrated Programme (3.5 out of 4.0 GPA)</p>
        <p className=" not-italic">Jan 2014 - Dec 2017</p>
      </motion.div>
      <motion.ul className="mt-1 list-disc text-gray-200 ml-12" variants={fadeIn("left", "spring", 1.3, 0.75)}>
        <li>
        <span className="font-semibold">Subjects:</span> Physics, Integrated Mathematics, English, Higher Chinese, Chemistry, History, Bahasa Indonesia
        </li>
        <li>
        <span className="font-semibold">Activities and Societies:</span> Red Cross (Vice-Chairman)
        </li>
      </motion.ul>
    </>
  )
}

const Education = SectionWrapper(EducationPage, "");

export default Education;