import React, { useState, useEffect } from "react";
import scroll from "../src/assets/scroll down.gif";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import ScrollIndicator from "./components/Scrollindicator";
import Hero from "./components/Hero";
import PreLoader from "./components/PreLoader";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <PreLoader />
      ) : (
        <>
          <Background />
          <ScrollIndicator />
          <Navbar />
          <div id="home"> <Hero /></div>
          <div id="skills" className="p-0 text-center mt-4 ">
            <img className="m-auto h-13 w-13" src={scroll} alt="Scroll down" />
            <h1 className="text-4xl font-bold text-center mb-6 text-white">
              Skills
            </h1>
            <p className="text-gray-400 font-bold text-xl">
              Discover the expertise and skills that define my professional
              journey
            </p>
            <Skills />
          </div>
          <div id="education" className="p-4 text-center mt-3 ">
            <h1 className="text-4xl font-bold text-center mb-6 text-white">
              Education
            </h1>
            <p className="text-gray-400 font-bold text-xl mb-3">
              Discover My Education journey
            </p>
            <Education />
          </div>
          <div id="projects" className="text-center mt-3 ">
            <h1 className="text-4xl font-bold text-center mb-6 text-white">
              Projects
            </h1>
            <p className="text-gray-400 font-bold text-xl mb-3">
              Delve into the projects that exemplify the expertise and skills that have shaped my professional career.
            </p>
            <Projects />
          </div>
          <div id="contact" className="text-center mt-3 ">
            <h1 className="text-4xl font-bold text-center mb-6 text-white">
              Contact Me
            </h1>
            <p className="text-gray-400 font-bold text-xl mb-3">
              Lets Connect , Feel free to reach out to me for any queries or collaborations.
            </p>
           
          </div>
       
          <Footer/>
        </>
      )}
    </>
  );
}

export default App;
