import { motion } from "framer-motion";
import { AltSectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useState } from "react";
import { python, keras, seaborn, eda, conclusion, confusionmatrix } from "../assets";

const project = [
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

const UserActivityPage = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <div className="flex flex-col lg:flex-row">
          <h2 className="font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[40px] grow text-[#dfd0ff]">User Activity Recognition</h2>
          <p className="items-center flex text-white md:text-[24px] sm:text-[20px] xs:text-[20px] text-[15px] font-medium">Jan 2023 - Mar 2023</p>
        </div>
        <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-3 text-secondary text-[17px] leading-[30px] text-center sm:text-left">
          A machine learning model that demonstrates the capability of LSTM models to learn <span className="font-semibold text-white">long-term dependencies</span> and retain information
          better than vanilla RNNs. The machine learning model was trained using the <span className="font-semibold text-white">WISDM Activity Recognition dataset</span> to recognize the user&apos;s 
          current physical activity based on the user&apos;s mobile phone accelerometer data. The model was then further refined using <span className="font-semibold text-white">SMOTE </span>
          in an attempt to <span className="font-semibold text-white"></span> within the dataset.
        </motion.p>
        </motion.div>
      <motion.div className="mt-4 ml-6 text-[17px] text-white font-medium flex flex-wrap" variants={fadeIn("left", "spring", 0.5, 0.75)}>
        <p>Google Colab Link</p>
        <a className="ml-4 text-[#915eff]" href="https://colab.research.google.com/drive/1-I37fbj1ANgnHcBjPQKBWKoC5EOP19I1?usp=sharing">LSTM Model</a>
      </motion.div>
      <motion.div className="ml-6 text-[17px] text-white font-medium flex flex-wrap" variants={fadeIn("left", "spring", 0.5, 0.75)}>
        <p>Written Report</p>
        <a className="ml-4 text-[#915eff]" href="https://docs.google.com/document/d/1_h51nb4biSEpZxnPuQPE3QLLndRggbI9rdGvn7hERH8/edit?usp=sharing">Article on LSTM, GRU and RNN</a>
      </motion.div>
      <motion.div className="ml-6 text-[17px] text-white font-medium flex flex-wrap" variants={fadeIn("left", "spring", 0.5, 0.75)}>
        <p>Model Type</p>
        <p className="ml-4">Long-Short Term Memory (LSTM) with SMOTE</p>
      </motion.div>
      <motion.div className="ml-6 text-[17px] text-white font-medium flex flex-wrap" variants={fadeIn("left", "spring", 0.5, 0.75)}>
        <p>Dataset</p>
        <a className="ml-4 text-[#915eff]" href="https://www.cis.fordham.edu/wisdm/dataset.php">WISDM Activity Recognition Dataset</a>
      </motion.div>
      <motion.div className="ml-6 text-[17px] text-white font-medium flex flex-wrap" variants={fadeIn("left", "spring", 0.5, 0.75)}>
        <p>Overall Accuracy</p>
        <p className="ml-4">94.1%</p>
      </motion.div>
      <motion.div className="mt-4 flex flex-wrap gap-3" variants={fadeIn("left", "spring", 0.7, 0.75)}>
        {project.map((tech) => (
          <TechCard key={tech.icon} props={tech} /> 
        ))}
      </motion.div>
      <motion.p className="mt-8 text-xl font-medium flex sm:text-2xl text-secondary uppercase tracking-wider" variants={fadeIn("left", "spring", 0.5, 0.75)}>
        Project Showcase
      </motion.p>
      <img src={eda} className="w-full md:w-3/4 mx-auto mt-4"/>
      <p className=" text-center mt-2 text-xs sm:text-sm md:text-base">Exploratory Data Analysis (EDA) of WISDM AR Dataset</p>
      <img src={confusionmatrix} className="w-full md:w-3/4 mx-auto mt-4"/>
      <p className=" text-center mt-2 text-xs sm:text-sm md:text-base">Confusion Matrix of built LSTM model</p>
      <img src={conclusion} className="w-full md:w-3/4 mx-auto mt-6"/>
    </>
  )
}

const UserActivityComp = AltSectionWrapper(UserActivityPage, "");

export default UserActivityComp;