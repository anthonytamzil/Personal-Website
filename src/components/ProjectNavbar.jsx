import { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { logo } from "../assets";

const ProjectNavbar = () => {
  const [active, setActive] = useState("");

  return (
    <nav className={`${styles.paddingX} w-full absolute flex py-5 top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link 
          href="/"
          to="/" 
          className="flex items-center gap-2" 
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
          <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
          <p className="text-white font-bold cursor-pointer text-[18px] flex">
            Anthony Tamzil
          </p>
        </Link>        
      </div>
    </nav>
  )
}

export default ProjectNavbar;