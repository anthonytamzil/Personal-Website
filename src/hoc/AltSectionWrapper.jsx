import {motion} from "framer-motion";
import { staggerContainer } from "../utils/motion";

const AltSectionWrapper = (Component, idName) => 
  function HOC() {
    return (
      <motion.section variants={staggerContainer()} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="sm:px-16 px-6 sm:py-4 py-2 max-w-7xl mx-auto relative z-0">
        <Component />
      </motion.section>
    )
  }

export default AltSectionWrapper;