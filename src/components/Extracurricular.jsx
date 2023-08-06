import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useState } from "react";
import { keras, python, seaborn } from "../assets";

const fintech = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Keras",
    icon: keras,
  },
  {
    name: "Seaborn",
    icon: seaborn,
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

const ExtracurricularPage = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Interests</p>
        <h2 className={styles.sectionHeadText}>Extracurricular Activities.</h2>
      </motion.div>
      <motion.p className="mt-10 text-3xl font-semibold text-gray-200" variants={fadeIn("left", "spring", 0.4, 0.75)}>NUS Fintech Society Singapore</motion.p>
      <motion.div className="mt-2 text-secondary text-lg italic flex flex-col md:flex-row font-medium" variants={fadeIn("left", "spring", 0.5, 0.75)}>
        <p className="grow">Machine Learning Tech Analyst</p>
        <p className=" not-italic">Dec 2022 - Present</p>
      </motion.div>
      <motion.ul className="mt-1 list-disc text-white ml-12" variants={fadeIn("left", "spring", 0.5, 0.75)}>
        <li>
          Worked on a semester-long research project to understand more about mechanism and applications behind vanilla Recurrent Neural Networks (RNN), Gated Recurrent Units (GRU), and Long-Short Term Memory (LSTM) models
        </li>
        <li>
          Developed an LSTM model with 94% accuracy to <a className="font-medium text-[#915eff]" href="/User Activity Recognition">predict user&apos;s physical activity based on the user&apos;s handphone accelerometer data</a>
        </li>
        <li>
          Conducted a workshop for 20 participants on our research and LSTM code implementation
        </li>
      </motion.ul>
      <motion.div className="mt-2 text-secondary text-lg italic flex flex-col md:flex-row font-medium" variants={fadeIn("left", "spring", 0.6, 0.75)}>
        <p className="grow">Machine Learning Tech Analyst - Trainee</p>
        <p className=" not-italic">Aug 2022 - Dec 2022</p>
      </motion.div>
      <motion.ul className="mt-1 list-disc text-gray-200 ml-12" variants={fadeIn("left", "spring", 0.6, 0.75)}>
        <li>
          Completed a semester-long training programme on machine learning models, time series and various fundamental machine learning concepts
        </li>
        <li>
          Completed an internal projects on stock price prediction and an internal Kaggle competition on social media comment sentiment analysis
        </li>
      </motion.ul>
      <div className="ml-1 mt-3 flex flex-wrap gap-3">
        {fintech.map((tech) => (
          <TechCard key={tech.icon} props={tech} /> 
        ))}
      </div>
    </>
  )
}

const Extracurricular = SectionWrapper(ExtracurricularPage, "");

export default Extracurricular;