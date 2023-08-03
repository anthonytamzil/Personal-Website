import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { AltSectionWrapper } from "../hoc";
import { mePicture } from "../assets";


const ProjectAboutPage = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h1 className="font-black text-center lg:text-[70px] sm:text-[50px] xs:text-[40px] text-[30px] lg:leading-[98px] text-white">{"<"}<span className="text-[#915eff]">Anthony Tamzil</span>{"/>"}</h1>
        <h2 className="text-center xs:text-[30px] text-[20px] lg:leading-[60px] font-medium">Passionate Software Developer · Avid Programmer · Funny Fella</h2>
      </motion.div>
      <div className="flex md:flex-row flex-col w-full">
        <motion.img variants={fadeIn("", "", 0.1, 1)} src={mePicture} className="md:w-1/4 w-full border-white border-2 mt-4 rounded-3xl object-cover shadow-card mx-auto" alt=""/>
      </div>
    </>
  )
}

const ProjectAbout = AltSectionWrapper(ProjectAboutPage, "about")

export default ProjectAbout;