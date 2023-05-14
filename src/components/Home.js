import React, { useRef } from "react";
import Experience from "./Experience";
import Educations from "./Educations";
import Skills from "./Skills";
import Portfolios from "./Portfolios";
import Profile from "./Profile";
import Navbar from "./Navbar";
import About from "./About";

const Home = () => {
  const AboutRef = useRef(null);
  const SkillsRef = useRef(null);
  const ExperienceRef = useRef(null);
  const EducationRef = useRef(null);
  const ProjectRef = useRef(null);
  //   const ref = React.useRef;

  return (
    <div>
      <Navbar
        onNavClick={(ref) =>
          ref.current.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      />
      <div className="container">
        <div className="row">
          <div className="col s12 m4 l3">
            <Profile />
          </div>
          <div className="col s12 m8 l8">
            <About forwardRef={AboutRef} />
            <Skills forwardRef={SkillsRef} />
            <Experience forwardRef={ExperienceRef} />
            <Educations forwardRef={EducationRef} />
            <Portfolios forwardRef={ProjectRef} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
