import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience /> 
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
          <p className="text-center text-xs mb-2 text-gray-500">Made by Anthony Tamzil</p>
        </div>
      </div>
    </BrowserRouter>
  )
}
