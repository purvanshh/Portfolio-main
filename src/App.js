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

        {/* PROJECTS */}
<ProjectCard
  id="project"
  className="even"
  projectTitle="Delivery Operations Intelligence"
  projectDesc="AI-powered operations analytics platform for restaurant delivery teams. Built real-time KPI dashboards, AI-based root cause analysis with confidence scores, issue prioritization workflows, and revenue recovery tracking. Designed and implemented full-stack architecture with data-heavy UI and scalable backend APIs."
  projectLink="https://github.com/purvanshh/Delivery-Operations-Inteligence"
  deployedProjectLink="https://github.com/purvanshh/Delivery-Operations-Inteligence"
  projectImg={require('./images/image.png')}
/>

<ProjectCard
  className="odd"
  projectTitle="PocketExpense+"
  projectDesc="Production-grade expense tracking mobile app with JWT authentication, offline sync, CRUD operations, and analytics dashboards. Includes daily/monthly insights, budget alerts, and smooth animated UI while maintaining performance and state consistency."
  projectLink="https://github.com/purvanshh/PocketExpense-"
  deployedProjectLink="https://github.com/purvanshh/PocketExpense-"
  projectImg={require('./images/SCR-20251219-bgxe.png')}
  isMobileApp={true}
/>

<ProjectCard
  className="even"
  projectTitle="FarmFresh"
  projectDesc="End-to-end e-commerce mobile app for ordering fresh produce. Implemented secure authentication, cart and order flows, Stripe payments, location services, and clean state management with a focus on scalable user experience."
  projectLink="https://github.com/purvanshh/Quick-E-Commerce"
  deployedProjectLink="https://github.com/purvanshh/Quick-E-Commerce"
  projectImg={require('./images/FarmFresh.jpeg')}
  isMobileApp={true}
/>

<ProjectCard
  className="odd"
  projectTitle="MyPA (Personal AI Assistant)"
  projectDesc="Privacy-first AI assistant with local storage and bring-your-own API keys. Supports multiple AI models with optimized React rendering, chat navigation, and extensible architecture focused on speed and user control."
  projectLink="https://github.com/purvanshh/MyPA"
  deployedProjectLink="https://mypa-omega.vercel.app/chat"
  projectImg={require('./images/mypa-omega-vercel-app-chat.png')}
/>

<ProjectCard
  className="even"
  projectTitle="FitTrack Pro"
  projectDesc="Fitness tracking mobile app with workout logging, hydration and meal tracking, streaks, and weekly analytics. Built interactive charts, push notifications, and a smooth dark-mode experience with clean data visualization."
  projectLink="https://github.com/purvanshh/fittrack-pro"
  deployedProjectLink="https://github.com/purvanshh/fittrack-pro/releases"
  projectImg={require('./images/FitTrackPro.jpeg')}
  isMobileApp={true}
/>

<ProjectCard
  className="odd"
  projectTitle="BrainWave"
  projectDesc="Modern UI/UX showcase implementing responsive layouts, smooth animations, and clean component structure. Built as a design-focused project to explore modern frontend patterns and visual polish."
  projectLink="https://github.com/purvanshh/BrainWave"
  deployedProjectLink="https://brainwave-iota-ten.vercel.app/"
  projectImg={require('./images/brainwave.png')}
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