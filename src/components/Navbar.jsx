import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import {logo, menu, close} from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value to the useState variable
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    }
  }, [])

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
        <div className="sm:hidden flex flex-1 justify-end items-center w-fit">
          <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain" onClick={() => setToggle(!toggle)}/>
          <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex flex-1 justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li 
                  key={link.id}
                  className={`${active === link.title ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li 
              key={link.id}
              className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        
      </div>
    </nav>
  )
}

export default Navbar;