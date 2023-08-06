import { motion } from "framer-motion";
import { AltSectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useState } from "react";
import { python, leaderboard, award } from "../assets";

const project = [
  {
    name: "Python",
    icon: python,
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

const DiamondPredictionPage = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <div className="flex flex-col lg:flex-row">
          <h2 className="font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[40px] grow text-[#dfd0ff]">Diamond Price Prediction</h2>
          <p className="items-center flex text-white md:text-[24px] sm:text-[20px] xs:text-[20px] text-[15px] font-medium">Jun 2020</p>
        </div>
        <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-3 text-secondary text-[17px] leading-[30px] text-center sm:text-left">
          A high-accuracy <span className="font-semibold text-white">random forest regression</span> based machine learning model was built to predict the price of diamonds
          based on various attributes and characteristics with a <span className="font-semibold text-white">r-squared (coefficient of determination) regression score of 
          0.99999</span> as part of a Kaggle-style machine learning competition.
        </motion.p>
        </motion.div>
      <motion.div className="mt-4 ml-6 text-[17px] text-white font-medium flex flex-wrap" variants={fadeIn("left", "spring", 0.5, 0.75)}>
        <p>Google Colab Link</p>
        <a className="ml-4 text-[#915eff]" href="https://colab.research.google.com/drive/1finxhyhT-iNov7XHOcTM_zZry-DjKTyX">Diamond Prediction Model</a>
      </motion.div>
      <motion.div className="ml-6 text-[17px] text-white font-medium flex flex-wrap" variants={fadeIn("left", "spring", 0.5, 0.75)}>
        <p>Kaggle Link</p>
        <a className="ml-4 text-[#915eff]" href="https://www.kaggle.com/competitions/eee-datathon-challenge-2020">NTU EEE Datathon Challenge</a>
      </motion.div>
      <motion.div className="ml-6 text-[17px] text-white font-medium flex flex-wrap" variants={fadeIn("left", "spring", 0.5, 0.75)}>
        <p>Award</p>
        <a className="ml-4 text-[#915eff]" href="https://drive.google.com/file/d/1CdgzRw95yBslO9gGZtG_CIWl7xI7bqYQ/view?usp=sharing">Overall Champion in NTU EEE Datathon Challenge 2020</a>
      </motion.div>
      <motion.div className="ml-6 text-[17px] text-white font-medium flex flex-wrap" variants={fadeIn("left", "spring", 0.5, 0.75)}>
        <p>Model Type</p>
        <p className="ml-4">Random Forest Regression</p>
      </motion.div>
      <motion.div className="ml-6 text-[17px] text-white font-medium flex flex-wrap" variants={fadeIn("left", "spring", 0.5, 0.75)}>
        <p>R2 Score</p>
        <p className="ml-4">0.99999</p>
      </motion.div>
      <motion.div className="mt-4 flex flex-wrap gap-3" variants={fadeIn("left", "spring", 0.7, 0.75)}>
        {project.map((tech) => (
          <TechCard key={tech.icon} props={tech} /> 
        ))}
      </motion.div>
      <motion.p className="mt-8 text-xl font-medium flex sm:text-2xl text-secondary uppercase tracking-wider" variants={fadeIn("left", "spring", 0.5, 0.75)}>
        Project Showcase
      </motion.p>
      <img src={leaderboard} className="w-full md:w-3/4 mx-auto mt-4"/>
      <p className=" text-center mt-2 text-xs sm:text-sm md:text-base">Kaggle Leaderboard</p>
      <img src={award} className="w-full md:w-3/4 mx-auto mt-4"/>
      <p className=" text-center mt-2 text-xs sm:text-sm md:text-base">Award Certificate</p>
    </>
  )
}

const DiamondPredictionComp = AltSectionWrapper(DiamondPredictionPage, "");

export default DiamondPredictionComp;