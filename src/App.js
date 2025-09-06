import React, { useEffect, useState } from "react";
import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomeBanner from "./components/HomeBanner";
import ProjectCard from './components/ProjectCard'
import AboutMe from './components/AboutMe'
import SkillCard from './components/SkillCard'
import ContactForm from './components/ContactForm'
import AnimatedCursor from "react-animated-cursor"


function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') || 'dark';
    } catch (e) {
      return 'dark';
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme === 'light' ? 'light' : 'dark');
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {}
  }, [theme]);

  const toggleTheme = () => setTheme(t => (t === 'light' ? 'dark' : 'light'));

  return (
    <>
    <AnimatedCursor
      color="#fff"
      innerSize={8}
      outerSize={50}
      innerScale={1}
      outerScale={2.2}
      outerAlpha={0}
      outerStyle={{
        background: '#ffffff',
        mixBlendMode: 'exclusion'
      }}
      innerStyle={{
        backgroundColor: '#F94892'
      }}
    />
    <div>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <HomeBanner id = "home"/>
      <ProjectCard
        id="project"
        className="odd"
        projectTitle="3D Interactive Nexbot"
        projectDesc="An engaging 3D robot character that tracks and responds to cursor movements, creating an interactive and dynamic user experience through three-dimensional animations."
        projectLink="https://github.com/purvanshh/Frontend"
        deployedProjectLink="https://frontend-lemon-delta-24.vercel.app/"
        projectImg={require('./images/3dNexBot.png')}
      />

      <ProjectCard
        projectTitle="BrainWave"
        className="even"
        projectDesc="Brainwave - Modern UI/UX website, developed using React.js and Tailwind CSS, exemplifies modern UI/UX principles. Its sleek design, seamless animations, and overall user experience set a high standard, serving as a reference or inspiration for future modern applications or websites in general."
        projectLink="https://github.com/purvanshh/BrainWave"  
        deployedProjectLink="https://brainwave-iota-ten.vercel.app/"
        projectImg={require('./images/brainwave.png')} 
      />
      
      <AboutMe id = 'about' />
      <SkillCard id = 'skills' />
      <ContactForm id = 'contact' />
      <Footer />
    </div>
    </>
  );
}

export default App;