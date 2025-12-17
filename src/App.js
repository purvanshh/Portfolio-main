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
import SplineErrorBoundary from "./components/SplineErrorBoundary";
function App() {


  return (
    <>
      <SplineErrorBoundary>
        <div className="spline-background fade-in" style={{ opacity: 1 }}>
          <spline-viewer url="https://prod.spline.design/c1CILr5VqKGYhoDt/scene.splinecode"></spline-viewer>
        </div>
      </SplineErrorBoundary>

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
      <div className="main-content">
        <Navbar />
        <HomeBanner id="home" />

        <ProjectCard
          id="project"
          projectTitle="BrainWave"
          className="even"
          projectDesc="Brainwave - Modern UI/UX website, developed using React.js and Tailwind CSS, exemplifies modern UI/UX principles. Its sleek design, seamless animations, and overall user experience set a high standard, serving as a reference or inspiration for future modern applications or websites in general."
          projectLink="https://github.com/purvanshh/BrainWave"
          deployedProjectLink="https://brainwave-iota-ten.vercel.app/"
          projectImg={require('./images/brainwave.png')}
        />

        <ProjectCard
          className="odd"
          projectTitle="FitTrack Pro"
          projectDesc="A comprehensive fitness tracking mobile app built with React Native and Expo. Features workout tracking, water intake monitoring, meal logging, weekly analytics with interactive charts, streak counter, push notifications, and beautiful dark mode with glassmorphism design."
          projectLink="https://github.com/purvanshh/fittrack-pro"
          deployedProjectLink="https://github.com/purvanshh/fittrack-pro/releases"
          projectImg={require('./images/FitTrackPro.jpeg')}
          isMobileApp={true}
        />

        <ProjectCard
          className="even"
          projectTitle="FarmFresh"
          projectDesc="A modern e-commerce mobile app for ordering fresh produce, built with React Native and Expo. Features secure authentication, product catalog with categories, cart management, integrated Stripe payments, order history, and location services with a premium NativeWind styled UI."
          projectLink="https://github.com/purvanshh/Quick-E-Commerce"
          deployedProjectLink="https://github.com/purvanshh/Quick-E-Commerce"
          projectImg={require('./images/FarmFresh.jpeg')}
          isMobileApp={true}
        />

        <ProjectCard
          className="odd"
          projectTitle="MyPA"
          projectDesc="Your Personal AI Assistant - Blazingly-Fast, Open-source, and Free. Features privacy-first local storage, BYO API keys, Chat Navigator, Google Gemini support, and an optimized React codebase."
          projectLink="https://github.com/purvanshh/MyPA"
          deployedProjectLink="https://mypa-omega.vercel.app/chat"
          projectImg={require('./images/mypa-omega-vercel-app-chat.png')}
        />

        <AboutMe id='about' />
        <SkillCard id='skills' />
        <ContactForm id='contact' />
        <Footer />
      </div>
    </>
  );
}

export default App;