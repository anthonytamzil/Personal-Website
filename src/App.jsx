import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Canvas, Home, DoItVolunteering, Summarised } from "./pages";

export default function App() {
  return (
    <BrowserRouter>
      {/* pages */}
      <Routes>
        <Route path="/" element={(<Home/>)} />
        <Route path="/Canvas++" element={(<Canvas/>)}/>
        <Route path="/DO-IT-Volunteering" element={(<DoItVolunteering/>)}/>
        <Route path="/Summarised" element={(<Summarised/>)}/>
      </Routes>

      {/* Original home page just in case */}
      {/* 
        <div className="relative z-0 bg-primary overflow-x-hidden">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience /> 
          <Tech />
          <Works />
          <Education />
          <Extracurricular />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
            <p className="text-center text-xs mb-2 text-gray-500">Made by Anthony Tamzil</p>
          </div>
        </div> 
      */}
    </BrowserRouter>
  )
}
