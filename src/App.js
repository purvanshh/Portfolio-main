import React from "react";
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
      <Navbar />
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

      { <ProjectCard
        projectTitle="A Modern Note-Taking & Task Management App"
        projectDesc="A comprehensive note-taking and to-do list application built with React JS, featuring an intuitive interface for managing both detailed notes and task lists. The app offers seamless organization capabilities allowing users to efficiently capture ideas and track their tasks in one unified platform."
        projectLink="https://github.com/purvanshh/Advanced-Notion"
        deployedProjectLink="https://advanced-notion.vercel.app/"
        projectImg={require('./images/Notetaking.png')}
      />

      /* <ProjectCard
        className = "odd"
        projectTitle="Rog-free: accessible anytime, anywhere"
        projectDesc="An approach to target and heal specific health conditions by transforming the living room into a yoga studio"
        projectLink=""
        deployedProjectLink=""
        projectImg={require('./images/projectRogfree.png')}
      /> */}
      <AboutMe id = 'about' />
      <SkillCard id = 'skills' />
      <ContactForm id = 'contact' />
      <Footer />
    </div>
    </>
  );
}

export default App;
